# DC SRAP meeting 64

Time: 2026-09-08, 15:00-16:00 UTC  
Place: Zoom, [https://helsinki.zoom.us/j/67822731377?pwd=PDYE968LaEK46ka48vfglOSZAnnTj7.1](https://helsinki.zoom.us/j/67822731377?pwd=PDYE968LaEK46ka48vfglOSZAnnTj7.1) (**NOTE**: new URL as the old one had expired\!)

## Agenda

1. ### Opening of the meeting

2. ### Appointment of the minutes taker \- Karen

3. ### Approval of the agenda

4. ### Minutes of previous meetings

Minutes of previous meetings are on GitHub:  
[https://github.com/dcmi/dc-srap/tree/main/meetings](https://github.com/dcmi/dc-srap/tree/main/meetings) 

5. ### Recap of SRAP review in the Usage Board

The DCMI Usage Board has had many meetings discussing the proposals we made and eventually \- after a lot of deliberation \- made a good number of decisions mainly around BIBO, but also affecting DCTerms and SRAP. The UB process is now nearly complete, with some loose ends such as accessibility properties still remaining. The UB decisions affecting SRAP are documented in this decision document: [https://github.com/dcmi/usage/blob/master/reviews/srap/decisions.md](https://github.com/dcmi/usage/blob/master/reviews/srap/decisions.md)

*UB* 

1. *Need some more examples*  
2. *Broader entities: funding and contributions*  
3. *Adding new properties to BIBO \- Not finished, still discussing domains and ranges*  
4. *Accessibility \- first proposal was a single property; UB suggesting this to go into DC Terms. Public response was that a simple string literal is not sufficient. Will probably end up with two properties, one more structured.*  
5. *Use FOAF terms for organization, person*

6. ### Updates to SRAP based on UB review

Osma has started the process of applying those decisions to the SRAP documentation: the main profile document, the TAP CSV and the examples. That work is tracked in this issue: [https://github.com/dcmi/dc-srap/issues/110](https://github.com/dcmi/dc-srap/issues/110)

Every UB decision (for example the decision to introduce a new BIBO property) is implemented in a separate Pull Request. The PR groups together the changes done to the main SRAP document, the TAP CSV, and the examples. The PRs are referenced to issue 110 linked above, so you can find links to them from the issue.

Current situation:

* many easy changes already done and PRs merged  
* some changes need further discussion  
  * [PR 118](https://github.com/dcmi/dc-srap/pull/118) funder property: literal values too, or just resources?  
  * [PR 119](https://github.com/dcmi/dc-srap/pull/119) contributioncontext: is it OK to specify contributor names, affiliations and/or roles as literals or do they always have to be resources?  
* some changes not yet started (e.g. new data model diagram \- can someone find the original?)

*(Changes to Bibo not done yet; procedure may still need to be developed.)*

*UB decided to go with "embargoedBefore" rather than a range.*   
*Alasdair: range gives you flexibility. What people want is when you can access it.*   
*Using bibo:accessLink instead of SRAP:URL.*   
*Project: bibo:project*  
*Funding source (was srap:grant) \- \> funding shape (Alasdair: grand was too narrow)*  
*Scholarly unit has become Organization Unit.*   
*Now looking at \#119 to see contribution shape.*  
*Should the TAP directly use rdf definitions? Osma: profile should be able to use a note or guidance relevant to the profile, not just the definition from the rdf.*  
*Also: dct:contributor outside of contribution class. Legacy usage. Alasdair: either/or? Based on technical capabilities.*  
*Need to add some examples of these new terms, especially context*  
*Osma has edited some examples. Have some with :hasContribution*  
*Need more snippet examples in the document. The examples have both literal and shape entries for the same contributors.*  
*e.g. funder \- with bibo:funder can we still have literal values? kc: metadata not always complete in one step*  
*kc: maybe do an extraction of DCTAP \- for flat model. (kc will look at)*  
*Osma: need new model diagram. kc: look for it?*

7. ### Addition of bibo:number in SRAP

A long time ago, Osma made a Pull Request ([PR 69](https://github.com/dcmi/dc-srap/pull/69)) to add bibo:number as a valid property in SRAP, primarily due to a need to represent "number within series" (see discussion in [issue 36](https://github.com/dcmi/dc-srap/issues/36)). This is an existing BIBO property, so should not require detailed UB review. Can we add it to SRAP?  
*PartOf property;*   
*Note: Book shape WAS missing dct:title*  
*Series: bibo has series*

*ACTION: Osma to make a proposal for changing Periodical shape to a more generic Collection (which includes Series according to the BIBO class hierarchy)*

8. ### Any other business 

*We will wait for the UB discussion and then reconvene when necessary.*

9. ### Closure of the meeting

