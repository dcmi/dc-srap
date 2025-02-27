# DC SRAP meeting 57

Time: 2025-02-25, 16:00-17:00 UTC  
Place: Zoom, [https://helsinki.zoom.us/j/62368569596?pwd=UGQxenZFbjZQUlluRzdQQUM1UFhaUT09](https://helsinki.zoom.us/j/62368569596?pwd=UGQxenZFbjZQUlluRzdQQUM1UFhaUT09) 

## Agenda

1. ### Opening of the meeting

2. ### Appointment of the minutes taker \- Karen

3. ### Approval of the agenda

4. ### Minutes of previous meetings

Minutes of previous meetings are all on GitHub:  
[https://github.com/dcmi/dc-srap/tree/main/meetings](https://github.com/dcmi/dc-srap/tree/main/meetings) 

5. ### Changes to the UB proposal, SRAP specification and TAP

We've had two workshops (instead of regular SRAP meetings) on Jan 28 and Feb 11\. In those, and in between (by Karen and Osma), some important changes have been made to the documents.

The [Usage Board proposal](https://docs.google.com/document/d/1kJ5M5VqosbdJVeAmIqreud0kOQsVX3Kk_2qDjyQWKVk/edit?usp=sharing) is starting to take shape. Some details are needed for the classes (next agenda item). 

The [SRAP main specification](https://dcmi.github.io/dc-srap/srap-profile) has been almost completely overhauled, at least the middle part that describes the SRAP elements. Some elements were further specified, in particular the date properties, especially the embargoDateRange property that is now specified to be used with EDTF date intervals.

The [TAP](https://github.com/dcmi/dc-srap/blob/main/docs/srap.csv) has been adjusted as well. The main change is that references to foaf: and schema: namespaces have been replaced with the srap: placeholder namespace, because we are proposing these elements for inclusion into BIBO and/or DCTerms. If these are accepted, the srap: namespace can be switched to the final namespace.

6. ### Proposed classes

GitHub issue: [https://github.com/dcmi/dc-srap/issues/54](https://github.com/dcmi/dc-srap/issues/54) 

We need some more details in the UB proposal for Person and Organization. What are the important differences between the two alternatives for how to define Person and Organization (with or without subclassing dcterms:Agent)?

It's still unclear what we are proposing for the SRAPResource class. Are we proposing a new class for BIBO such as ScholarlyResource? 

7. ### Accessibility

Old (closed) GitHub issue: [https://github.com/dcmi/dc-srap/issues/24](https://github.com/dcmi/dc-srap/issues/24) 

We previously decided to propose a srap:accessibilityStatement property for describing accessibility features.

While writing up the guidance for this, I (Osma) noticed that describing accessibility in MARC has evolved. There's not a single field for accessibility but two separate fields: [341 Accessibility Content](https://www.loc.gov/marc/bibliographic/bd341.html) (with many subfields taking values from controlled lists) and [532 Accessibility Note](https://www.loc.gov/marc/bibliographic/bd532.html) (more free form notes intended to expand on what was stated in 341; note that the first indicator is used to qualify the type of note).

Expressing all of this in a single srap:accessibilityStatement property isn't possible. If we want to express the same level of detail that is possible in MARC, we need many more properties. What to do? Options:

- define srap:accessibilityStatement in a similar way to 532 (free form notes), but without specifying the content in any great detail (which seems to be the Dublin Core tradition). This is the current status quo in the spec.  
- expand with more fields so that we can represent all/most of what's possible with 341 and 532\.  
- drop the srap:accessibilityStatement altogether \- leave this for another day or project

8. ### Academic context

We've discussed linking to universities, faculties, departments etc. but never found a solution, so in the current SRAP profile it's only possible to express person (author) affiliations but nothing else about the institutional context.

Should we add notes and examples for the publisher and/or contributor properties, saying that they can be used to indicate the institution where the work was done? Using publisher or contributor fields this way seems to be the common practice in many institutional repositories in Finland. (Representing organizational hierarchy \- e.g. university / faculty / department / research group \- would be out of scope.)

9. ### Next steps for taking SRAP to the Usage Board

GitHub issue: [https://github.com/dcmi/dc-srap/issues/64](https://github.com/dcmi/dc-srap/issues/64) 

From the minutes of a previous meeting:

- *need to link documents*  
- *should examples be in main document? maybe a few, in appendices*  
- *main document doesn't have recent changes*  
- *mainly want to add new terms into BIBO*  
- *why use schema:isbn and not bibo:isbn? maybe better to not use schema at all. look at both srap namespace and schema namespace for properties to add to bibo.*  
- *schema:funding \- is this relevant to bibo? We took our shape from RIOXX*  
- *list of terms is \#64, list of classes is \#54 (added SrapResource and schema:Grant)*  
- *Decisions:*  
- *if we don't use schema?*  
  - *look at schema \+ srap to see if they can all fit into bibo*  
  - *bibo also uses foaf for person and organization (perhaps add these to bibo?)*  
- *dc only has agent \- for shapes we have person and organization; these are core classes*  
  - *perhaps propose Person and Organization to be added to dcterms*  
- *add Grant to bibo.*   
- *srapResource \- defines this as scholarly. Fabio has ScholarlyWork. Can we add ScholarlyWork to bibo? put it alongside bibo:Document.* 

10. ### Any other business 

11. ### Closure of the meeting

*Minutes:*

1. *Specification needs to represent end result: Osma removed any recommendations from the document*  
2. *Yes, need to add grant to diagram*  
3. *Specification has been re-written*  
4. *Add more examples to specification? Osma: rely on full examples for the simple terms*  
5. *Possibly remove or change headlines on examples*  
6. *For now, have examples in main document*  
7. *Osma did changes to the TAP; removed foaf and schema, made those srap*  
8. *kc: add statement that we limited to dct and bibo \- DONE*  
9. *person/organization give both options for UB \- kc: add reasoning \- DONE*  
10. *scholarly resource class \- need attachment to TAP? if no class, how to know that it represents something scholarly. Propose to add to BIBO. Subclass academic article and thesis to scholarly resource.*  
11. *accessibility \- MARC now has more options, more complex. Is it about disability, or about what you need to access? Is there a vocabulary we can use? Consider for SRAP, instead refer people to use schema properties. Add section: Extending SRAP.*  
12. *Osma will add grant shape*  
13. *kc: will do line 80 with better definitions; identifiers section \- DONE*