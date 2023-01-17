2023-01-17 SRAP meeting 22 - notes
- https://github.com/dcmi/dc-srap/blob/main/meetings/2023-01-17_srap_meeting_22_agenda.md
- https://github.com/dcmi/dc-srap/blob/main/meetings/2023-01-17_srap_meeting_22_notes.md

Present: Juha (chair), Osma, Tom (scribe), Karen, Alasdair

---------------------------------------------------------
Minutes from call 21 - 2022-12-15
- https://github.com/dcmi/dc-srap/blob/main/meetings/2022-12-15_srap_meeting_21.md
- Approved 

---------------------------------------------------------
Relators and constrained/unconstrained properties

Juha: Profile should include list of some frequently 
used relators.

Alasdair: Spoke with Gordon Dunsire. Unconstrained RDA properties 
are actually designed to work well with Dublin Core. Did we 
consider the unconstrained RDA properties as an option?

Juha: In my view, can point to more than one relator list; 
one of them should be approved?

Karen: How broad is the scope of SRAP? Legal works, patents - 
in a sense scholarly. Will be difficult to draw sharp line.

Juha: Difficult, and counterproductive to define scope too 
precisely. The only thing we have specifically excluded is 
research datasets. Each country has different practice for 
patents.

Karen: SRAP should say: "These are some you could use - 
for example", instead of exhaustive list.

Juha: Agrees. Should recommend LC.

Osma: LC constrained properties are divided by domain, 
but unconstrained are one big pile. 

Alasdair: Hard to find what you need.

Osma: One practical approach: look among the constrained 
properties (for work), then find corresponding unconstrained.

Juha: Should be in a User Guide. Also challenging to sift 
through relators, which are not organized in any particular 
way. That is why it is good to have list of relators that 
are most closely related to dissertations, etc. Must use 
existing list, lest we take on responsibility of maintaining 
ourselves. Can propose changes to LC relators - easy process.

Karen: Specific ideas?

Juha: Pretty sure there are things missing from LC (eg, see 
RDA).

Alasdair: Have not seen much evidence of people using
properties in RDA registry.

Juha: WG report about enriching MARC with RDA posted several
weeks ago. Some bits of RDA very theoretical. "Nomen".

Karen: Would it be enough to show LC and RDA examples?
One could mix-and-match.

Juha: Profile should mention mix-and-match.

Alasdair: Gordon said it was a bit of a fudge. Alasdair:
opponent is related to the thesis defense, not the
thesis, but you would not be looking at the thesis
without it. But will look at unconstrained properties and
make a spreadsheet.

ACTION Alasdair to explore RDA unconstrained elements.

Juha: Need to discuss whether these two lists are
sufficient and topics they provide are good enough. Will
split roles table into two:

- thesis roles
- scientific publication roles

Will not be exhaustive. 

AGREED: Need guidelines on how to use RDA unconstrained
list.

---------------------------------------------------------
Accessibility

Juha: We started to talk about accessibility. We agreed
would be useful. Karen suggested definition.

    Textual information describing the acciessibility
    features of a resource, including technical details.

Tom asked whether "accessibility" is best because of
potential confusion with FAIR.

Karen: Do not know alternative.

Juha: FAIR has alot to do with datasets, which we have 
excluded from SRAP.

Karen: People might use this to point to accessibility
document.

Juha: Primarily for humans.

Alasdair: "Accessibility statement"?

Tom: There are some range classes in DCMI Metadata Terms
with "statement": ProvenanceStatement and
RightsStatements. Property could have "statement" too.
Usage Board should consider whether to coin range classes
or not.

---------------------------------------------------------
Metadata source

Juha: Meta-metadata.

Karen: Misgivings: Metadata is a constantly moving target. 

Juha: Could use for metadata copied without changes.
Problem we had: some metadata providers had restrictions
on use of records.

Karen: It is unlikely to be accurate. Good chance that
some will not be accurate. MARC 040 - everyone who
modifies adds their code. Doesn't seem workable.

Osma: DC and SRAP implicitly assume there is just one
resource and all properties have that resource as this
subject. But in this case, we are talking about document
that contains that metadata. Housekeeping
(administrative) metadata. Different from the document
being described. In DC, often just one implciit subject.

Karen: If you do want to include, describe at different
level. MARC is not a model to follow. Big problem: there
is no way to go back to previous versions.

Juha: In summary - much concern about this element,
whether in SRAP can be used in meaningful way.

Osma: What is the model? Are we assuming a single resource?
We had that discussion for Agent. In RDF this is easy. 
Assuming this would be encoded in RDF (or XML). Not sure if 
it is simple in XML.

Juha: Even in tradl cataloging, have this problem. Also: 
preservation and technical metadata. 

Karen: In a DCTAP, supports metadata about multiple entities.

Osma: If we want this sort of property, cannot have the 
same domain as other properties. So either we drop this 
or have separate resource.

Juha: For sake of simplicity, tempted to drop.

Osma: If we had separate resource, could use dc:source 
instead of extra property here. And even more elaborate 
mechanisms such as PROV Ontology.

Juha: Also Rights. Should consider Source.

Osma: We could describe this pattern, that there 
is this housekeeping metadata that should be considered 
separate resource.

Juha: Would call it "administrative", not "housekeeping".

Karen: For me, question: SRAP seems defined for adding 
things to DC, but not actionable in itself - it needs 
more.

Juha: SRAP should focus on descriptive metadata - 
describing the work itself. Other data provideed elsewhere.
We use alot of METS containers for digital resources.
So lack of administrative metadata in SRAP would 
hopefully not be a problem.

Karen: Looking at list of elements... I do not see:
- extent
- something for volume and number.

If we are doing descriptive metadata, need to put things 
like that - for citation. MARC doesn't do journal articles 
very well.

ACTION: Karen to send email to list. (Juha: we will 
discuss next time.)

Tom: DCMIMT has property bibliographicCitation.

Juha: Let's drop Source. Not on agenda of SRAP to 
go much further.

---------------------------------------------------------
AOB

Osma: We just had Governing Board meeting last week that
the conference papers on site - Nishad will get rid of
old software and use SRAP ("eat your own dogfood").

---------------------------------------------------------
Next meeting

2023-01-31 Tue - in two weeks.


