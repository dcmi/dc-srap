# DC SRAP meeting 59

Time: 2025-03-25, 16:00-17:00 UTC (note\! US daylight savings time)  
Place: Zoom, [https://helsinki.zoom.us/j/62368569596?pwd=UGQxenZFbjZQUlluRzdQQUM1UFhaUT09](https://helsinki.zoom.us/j/62368569596?pwd=UGQxenZFbjZQUlluRzdQQUM1UFhaUT09) 

## Agenda

1. ### Opening of the meeting

2. ### Appointment of the minutes taker

3. ### Approval of the agenda

4. ### Minutes of previous meetings

Minutes of meeting 58 (2025-03-11) not yet posted.

Minutes of previous meetings are on GitHub:  
[https://github.com/dcmi/dc-srap/tree/main/meetings](https://github.com/dcmi/dc-srap/tree/main/meetings) 

5. ### Changes to the UB proposal, SRAP specification and TAP

Karen added instructions to use full URIs.

Osma added the following to the profile:

* a mention of using dct:contributor to indicate the organization where the work was done  
* some guidance into the Project context and funding section  
* some guidance to the Rights section  
  * Should it be possible to use Person/Organization shapes for the dct:rightsHolder value? Needs to be specified in the TAP if we want to enable this.

6. ### Highwire Press Tags mapping to SRAP

GitHub issue: [https://github.com/dcmi/dc-srap/issues/67](https://github.com/dcmi/dc-srap/issues/67) 

Nishad suggested that we could provide a mapping from Highwire Press Tags to SRAP to ease the work of adopting SRAP.

7. ### Next steps for taking SRAP to the Usage Board

GitHub issue: [https://github.com/dcmi/dc-srap/issues/64](https://github.com/dcmi/dc-srap/issues/64) 

From the minutes of a previous meeting:

- *need to link documents*  
- *should examples be in main document? maybe a few, in appendices*  
- *main document doesn't have recent changes*  
- *mainly want to add new terms into BIBO*  
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

8. ### Any other business 

9. ### Closure of the meeting

