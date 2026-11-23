#!/usr/bin/env node
//
// Render mermaid fenced code blocks in docs/**/*.md to static SVG files
// using @mermaid-js/mermaid-cli (mmdc), and rewrite each block to reference
// the generated SVG.
//
// - The SVG is written next to the source .md file, so relative image paths
//   work at every page depth (docs/ and docs/examples/).
// - Generated SVGs are build artifacts only; never commit them.
// - The script is idempotent: once a fence has been replaced by an image
//   reference, a re-run finds no mermaid fences to process.
//
// Usage:  node scripts/render-mermaid.mjs [docsDir]
// Requires mmdc on PATH:  npm install -g @mermaid-js/mermaid-cli
//

import { execFileSync } from 'node:child_process';
import {
  mkdtempSync,
  writeFileSync,
  readFileSync,
  readdirSync,
  statSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const docsDir = path.resolve(process.argv[2] ?? 'docs');

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (entry.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

const mermaidFence = /```mermaid\r?\n([\s\S]*?)\r?\n```/g;

let total = 0;
for (const file of walk(docsDir)) {
  const content = readFileSync(file, 'utf8');
  if (!content.includes('```mermaid')) continue;

  const base = path.basename(file, '.md');
  const tmp = mkdtempSync(path.join(tmpdir(), 'mermaid-'));
  let n = 0;

  const out = content.replace(mermaidFence, (_match, code) => {
    n += 1;
    total += 1;
    const svgName = `${base}.diagram-${n}.svg`;
    const mmdPath = path.join(tmp, `diagram-${n}.mmd`);
    writeFileSync(mmdPath, code);
    const svgPath = path.join(path.dirname(file), svgName);
    // -p: the bundled Chromium cannot create its user-namespace sandbox on
    // GitHub Actions ubuntu runners; pass --no-sandbox via a launch config.
    execFileSync(
      'mmdc',
      [
        '-i',
        mmdPath,
        '-o',
        svgPath,
        '-b',
        'transparent',
        '-p',
        path.join(path.dirname(fileURLToPath(import.meta.url)), 'puppeteer-config.json'),
      ],
      { stdio: 'inherit' },
    );
    console.log(`${path.relative(process.cwd(), file)}: mermaid block ${n} -> ${svgName}`);
    return `![${base} diagram ${n}](${svgName})`;
  });

  rmSync(tmp, { recursive: true, force: true });
  writeFileSync(file, out);
}

console.log(`Rendered ${total} mermaid diagram(s).`);
