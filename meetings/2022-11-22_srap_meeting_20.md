# DC SRAP meeting 20

https://github.com/dcmi/dc-srap/blob/main/meetings/2022-11-22_srap_meeting_20.md

* Time: 2022-11-22, 15:00-16:00 UTC
* Place: Zoom, https://helsinki.zoom.us/j/66651804340?pwd=ZnpWNzBOYlIraTE3SnNzeEd4ZjYyUT09 
* Present: Juha, Osma, Tom, Karen, Freddy, Alasdair, Jan

## 1. Opening of the meeting

Juha opened the meeting.

## 2. Appointment of the minutes taker (Juha will act as the chair)

Osma will take minutes.

## 3. Approval of the agenda

Agenda approved.

## 4. Minutes of previous meetings 

* 2022-10-25, number 19 https://github.com/dcmi/dc-srap/blob/main/meetings/2022-10-25.srap_meeting_19.md 
* 2022-10-11, number 18 https://github.com/dcmi/dc-srap/blob/main/meetings/2022-10-11.srap_meeting_18.md  

## 5. Recent changes to the SRAP profile (Osma)

See https://github.com/dcmi/dc-srap/blob/main/profile/srap-profile.md 
and a pull request with changes: https://github.com/dcmi/dc-srap/pull/23 

Tom suggested changing the Editor definition into a Note, to make it clear that the definition comes from the original vocabulary, not SRAP.

Agreed to merge the PR after taking into account Tom's proposal. Osma will merge after the meeting.

Osma: We did not decide on the pull request (and Tom's suggestion of putting as NOTE).

DECISION Agreed to accept PR. Osma will edit.

## 6. Possible changes to MARC Relator codes 

Currently some LC relator codes are defined as subproperties of http://purl.org/dc/elements/1.1/contributor. Should the relator specification mention that they are also subproperties of http://purl.org/dc/terms/contributor, which is itself subproperty of the same term in the namespace 1.1? 

Should artist, photographer and possibly some other relators be specified also as subproperties of http://purl.org/dc/terms/creator, which is itself a subproperty of http://purl.org/dc/elements/1.1/creator and http://purl.org/dc/elements/1.1/contributor (and should also be subproperty of http://purl.org/dc/terms/contributor)? 

Kungliga biblioteket treats all relators as properties (via Equivalent property specification between their and LoC relator codes). What are the pros and cons of asking LoC to make a clarification that relators which are not already subproperties are properties in their own right? And should we ask KB if they would join us in making such request (which has no impact on them)?

Suggested changes will be processed by DeAnna Evans. MARC Advisory Committee discussion and vote will not be required, which diminishes bureaucracy a lot.  

Karen: The subproperty definitions of LC relators are visible on the HTML page and in the MADS/RDF download, but not in the SKOS download.

Karen: Many find it dangerous that the same URI can be used as RDF property and SKOS concept, in entirely different ways.

Juha: Relators specified as subproperties of DC 1.1 contributor, not the newer DCTerms contributor, which would be better. Some relators are creators (like photographer).

Karen: None of this helps with relators that are not contributors at all.

Juha: KB (Sweden) has defined all as properties. Could ask for the same change to be made to LC relators.

Karen: You can ask, but I don't think it's simple. Really big thing for BIBFRAME people.

Juha: It's straightforward in terms of bureaucracy. Only one person to ask.

Karen: I don't think one person can decide this. I can ask on the BIBFRAME list next week.

Osma: There is also a set of relators in RDA - unconstrainted properties are in the "u" namespace: https://www.rdaregistry.info/Elements/u/ 

Karen: URIs have numbers but have labels like "isMusicalDirectorOf". We'd have to download and repair.

Juha: We can discuss whether to use the RDA properties in the next call.

Alasdair: Many institutions are still using the "old" RDA because they are still using MARC. Gordon Dunsire has never been happy with shoehorning relators into cataloging. We would not be putting URIs into MARC $e subfields, but the strings. That is the practice.

Osma: In RDA there are specific namespaces for Work properties (the interesting ones for us), Instance properties, Expression properties. But the properties in those namespaces are tied with the RDA data model so one could infer it is an RDA Work, etc.

Karen: Work properties are also going to have things that are not relators.

Osma: Local names are numbers in RDA - I consider an unfortunate design decision. Wanted to have stable URIs so used numeric, so anyone dealing with them has to look up all the time.

Alasdair: Same problem as with Wikidata.

Osma: In RDA, there are "aliases" (like "hasThisOrThat") but may not be official identifiers. May be a "sameAs" relation in the triples.

Karen: "Opponent" does not show up in RDA search of unconstrained properties.

Osma: They have "respondent" which is similar.

Karen: Would need to analyze.

Juha: Can we make that analysis by next meeting? I am warming to the idea of using RDA. Would not be dependent on things happening in MARC / BIBFRAME world. Maybe Alasdair could ask Gordon?

Karen: Also sound out how RDA sees itself in relation to LC relators.

Alasdair: Can ask Gordon after his presentation on Friday.

Osma: Pretty sure there are conversion tables or equivalence mappings between MARC relators and RDA properties.

Juha: Should we ask LC to change subproperty definitions to point to DCTerms?

Karen: We should wait until we have more information. I don't think anyone is using those as properties.

## 7. Funder and  Grant number 

Grant number is specified as “alpha-numeric string identifying the funding grant under which the scholarly resource was written”

In the previous meeting there was no objection to extend the definition a’la MARC 21 tag 536 to: 

“alpha-numeric string identifying the contract, project or funding grant under which the scholarly resource was created”

Is the new formulation OK? 

Finnish experts have been contacted to find out how funder and grant number metadata has been provided, and hopefully we can provide some examples even before the meeting. 

DECISION: postponed until we have more information about actual usage.

## 8. Related dataset, Related code 

These are now defined in the SRAP specification as: 

"dataset or datasets referenced in the scholarly resource"

"code (software applications) referenced in the scholarly resource"

DECISION: Approved

## 9. Proposed new SRAP terms

### 9.1 Accessibility 

Added as a [new issue](https://github.com/dcmi/dc-srap/issues/24) in GitHub, with the following proposed description adapted from MARC: 

“textual information describing the accessibility features of a resource, including technical details”

Note that this differs from e.g. MARC 532 Accessibility features, because it is not possible to describe accessibility deficiencies in this simplified version. 

Karen: It's relevant, but hard to define. Can it mean "is it available" or "do you have to pay for it" or..? I know this term is commonly used.

Juha: I didn't try to come up with a new term. Term taken from MARC.

Osma: How does this relate to WCAG standards?

Juha: MARC has good examples of what kind of accessibility information can be provided. Examples can be copied and adapted from there. Any cataloguer encoding accessibility in MARC could then do it for DC as well. I suppose adding this to the profile is OK since nobody is opposing? Details can be worked out later.

DECISION: Add accessibility to SRAP, tentatively, then revisit.

## 10. Any other business

Juha: IANA has a working group approving registration requests for URN namespaces. Has been dormant for some time but now revived. New namespaces have been or are being approved. One of them is a URN namespace for DOI. Already DOIs can be represented as URNs, resolvers can deal with urn:doi: namespace. Decision was taken in International DOI Foundation. Some were strongly in favor, nobody opposed. Juha was involved in writing the registration request. Another relevant new namespace is urn:meta:, which is intended for metadata elements. A few others are useful for specific interest groups.

Osma: Next meeting is scheduled for December 6, which is a national holiday in Finland.

DECISION: Scheduled for December 15, same time (15 UTC).

##  11. Closure of the meeting

Juha closed the meeting.
