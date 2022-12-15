	 	 	 	 	 	
# DC SRAP meeting 21

Time: 2022-12-15, 15:00-17:00 UTC, 17.00-19.00 CET
Place: Zoom, https://helsinki.zoom.us/j/66651804340?pwd=ZnpWNzBOYlIraTE3SnNzeEd4ZjYyUT09

## 1. Opening of the meeting

## 2. Appointment of the minutes taker (Juha will act as the chair)

## 3. Approval of the agenda

## 4. Draft minutes of previous meetings

2022-11-21, number 20
https://github.com/dcmi/dc-srap/blob/main/meetings/2022-11-22_srap_meeting_20.md

Juha: changed relators to MARC definitions, not as SRAP definitions

Juha: added accessibility 

## 6. Usage of MARC Relator codes
According to Kevin Ford from LoC:
When the Relators dataset was published at ID in 2010, with those relationships to DC in place, each resource was declared a MADS/RDF Authority, SKOS Concept, and RDF Property (and later OWL ObjectProperty). It was this way for quite some time, but, as this thread has shown, that’s not the case presently.  We are still investigating how/when the Property declaration was mistakenly dropped, but its omission was very much an oversight.  We have restored it; declaring Relator resources as both types was, and remains, our intention.

According to https://www.w3.org/TR/2012/REC-owl2-syntax-20121211/#Object_Properties, Object properties connect pairs of individuals. For instance, the object property a:parentOf can be used to represent the parenthood relationship between individuals.
Declaring Relators as OWL Object properties is therefore a bit awkward, but is it OK for SRAP? OWL 2 was introduced in 2012. It provides another option:
For symmetry with object property expressions, the structural specification of OWL 2 also introduces data property expressions, which represent relationships between an individual and a literal. For instance, the data property a:hasName can be used to associate a name with each person.
Are OWL Data properties a better option for MARC Relators?

Both OWL Object property and Data property are more strict than dc:contributor. Is this a problem for SRAP?

Discussion: is data property better? 

Osma: "individual" means entity - this is what we need. The value is a person or organization. It can be a string. Data property is between an entity and a string. That would be good for title.

kc: object property cannot be a string. DC uses "domainIncludes". rdfs:property would be better

Osma: what happens if you use a string? very few people use reasoners

juha: can we find a work-around?

Osma: specify in profile that if you only have a string, use a blank node or a local URI. better if RDF data is consistent; harder to have to accept either IRI or literal. 

juha: our guidelines shouldn't be too strict. people extend DC terms for scholarly resources. SRAP is to help people who aren't finding the terms they need in DC.

Osma: use a list of relators. If they follow SRAP they need to use entities as the values. If not, it could cause problems. Use DCTAP, Shex or shacl for more specifics.

juha: we need the relators to say what kind of relators there are. We can recommend the use of LoC relators. 

kc: what is the purpose of having specific relators? 

juha: then we don't need to specify the relators themselves in SRAP.

tom: recommend marc relators as properties. provide a list of possible ones. but to not provide any examples is not helpful

jan: srap then has its own set of relators - srap doesn't have to create and maintain a set of values.

juha: there are many possible roles so better to use existing list. recommend marc relators. We have moved relators to an annex. 

jan: we are in such a problem in datacite because we have a lot of controlled lists that need to be maintained. we will move to just recommending that a list be used.

Osma: Documentation needs to explain what kind of values should be expected.

ACTION: KC will do pull request with explanation (and fix table)

## 6. Funder and Grant number

Finnish experts have been contacted to find out how funder and grant number metadata has been provided, and hopefully we can provide some examples before the meeting.

## 7. Proposed new SRAP terms
## 7 .1 Accessibility
Accessibility has been added to the draft profile with the following proposed description:

“Textual information describing the accessibility features of a resource, including technical details.

Recommended practice is to describe for instance software requirements for using the document or technical features such as open or closed captioning.”
juha: this doesn't express accessibility deficiencies. 

kc: recommendation is to define the accessibility options, such as software requirements for using the document or technical features such as open or closed captioning. 

tom: word accessibility is problematic. So looking at FAIR today, the word accessibility is broader. not defined in terms of disabilities.

## 8. Any other business

## 9. Closure of the meeting

