# DC SRAP meeting 17

https://github.com/dcmi/dc-srap/blob/main/meetings/2022-09-27.srap_meeting_17.md

* Time: 2022-09-27, 14:00-16:00 UTC, 16.00-18.00 CEST
* Place: Zoom, https://helsinki.zoom.us/j/66651804340?pwd=ZnpWNzBOYlIraTE3SnNzeEd4ZjYyUT09 
* Present: Juha, Osma, Tom, Alasdair, Karen, Freddy

## 1. Opening of the meeting

Juha opened the meeting.

## 2. Appointment of the minutes taker (Juha will act as the chair)

Osma takes the minutes.

## 3. Approval of the agenda

Approved. Also agreed to discuss Karen's DCTAP profile, if there is time.

## 4. Minutes of the previous meeting (2022-05-31, number 16)

See https://github.com/dcmi/dc-srap/blob/main/meetings/2022-05-31.srap_meeting_16.md

Note that an invitation to the meeting 16 (2022-05-31) was sent, but since only Tom and Osma were able to attend, they decided to cancel the meeting. To avoid confusion, very simple minutes were written and this meeting is the 17th.

## 5. Status report

An up to date version of the profile is now available at https://github.com/dcmi/dc-srap/blob/main/profile/srap-profile.md

Osma: This is meant as a living document that we should keep up to date as we make decisions. Authors and dates have been removed.

Tom: Need to indicate that this is a draft. Links to not yet existing DC Terms should be visually distinguished.

Tom: Going to create an issue to create a page for SRAP on the DC website under the Community section.

## 6. Roles in SRAP

In the 15th meeting, we agreed on using separate RDF properties for each role, and there was also slight preference to use the MARC relator codes as properties even though they are not explicitly declared as RDF properties.

Current role-specific terms/properties in SRAP are the following:

* Degree supervisor http://id.loc.gov/vocabulary/relators/dgs
* Editor https://id.loc.gov/vocabulary/relators/edt
* Funder https://id.loc.gov/vocabulary/relators/fnd
* Opponent http://id.loc.gov/vocabulary/relators/opn

Examples of how to use these in RDF and/or XML should be provided in the profile. 

There are many other MARC relator codes which may be relevant to SRAP, including: 

* Compiler - A person, family, or organization responsible for creating a new work (e.g., a bibliography, a directory) through the act of compilation, e.g., selecting, arranging, aggregating, and editing data, information, etc
* Degree granting institution - An organization granting an academic degree
* Dissertant - A person who presents a thesis for a university or higher-level educational degree
* Honoree - A person, family, or organization honored by a work or item (e.g., the honoree of a festschrift, a person to whom a copy is presented)
* Host institution - An organization hosting the event, exhibit, conference, etc., which gave rise to a resource, but having little or no responsibility for the content of the resource
* Praeses - A person who is the faculty moderator of an academic disputation, normally proposing a thesis and participating in the ensuing disputation
* Programmer - A person, family, or organization responsible for creating a computer program
* Respondent - A person or organization who makes an answer to the courts pursuant to an application for redress (usually in an equity proceeding) or a candidate for a degree who defends or opposes a thesis provided by the praeses in an academic disputation
* Reviewer - A person or organization responsible for the review of a book, motion picture, performance, etc.
* Sponsor - A person, family, or organization sponsoring some aspect of a resource, e.g., funding research, sponsoring an event
* Thesis advisor - A person under whose supervision a degree candidate develops and presents a thesis, mémoire, or text of a dissertation

Which ones, if any, we should add to the profile? Are the any other roles that could be relevant as well? 

Karen: I don't see that the RDF resources for MARC relator codes are declared as RDF properties?

Tom: They are SKOS concepts, which is a little weird

Juha: The MARC format can be changed but it's a bureaucratic process involving the MARC Advisory Committee. But adding new codes to e.g. relators you can just tell the Library of Congress. Maybe you need to prove that the role is relevant and that it doesn't collide with an existing role. We've added codes before at the National Library of Finland.

Karen: Not talking about the codes itself but the RDF data. I did find one sub-property of dct:contributor.

Tom: Web pages could be more explicit about that but I don't see that as a show-stopper. I think the schema actually says that they are RDF properties. Ones that are declared as subproperties as dc:contributor can be inferred as properties, but not sure if all MARC relator codes have been declared as subproperties. I don't think we should worry about that.

Juha: If we decide that some additional roles are required, we can just request LOC to add them so that every code is treated the same way. How to express this in the SRAP profile document? How about an annex with a list of roles?

Karen: Could you say "take the roles from the LOC vocabulary and here are the 10 or 20 roles that we think are most relevant"?

Juha: That would be the easiest way for treating roles in the profile. Whichever selection we make, somebody might miss a code that is relevat. Specifying a subset becomes counterproductive. Better to embrace all and provide examples of common codes. That will make the profile more compact.

Tom: Make sure the roles we list as examples are subproperties of dc:contributor.

Juha: Need to investigate if some of them are subproperties of other DC properties.

**DECISION**: In the profile, say that any MARC relator properties can be used and provide examples of common properties.

Osma: How do we implement this in the current document structure?

Juha: Make the document easier to read by collecting all roles into an annex.

Osma: So remove them from the table and move the definitions into the annex?

Karen: We need some kind of hook in the table.

Juha: For both Creator and Contributor, we could say "for creator/contributor roles, see annex…"

Karen: Problem with this is that these are properties. How do you make that machine actionable?

Osma: Two mindsets in action here: the MARC way (field with relator code) and the RDF way (subproperties).

Karen: What do you see as the object of one of these properties? Points to an IRI that identifies someone, or just text…?

Juha: In all of these the ideal solution is to use both name and identifier. If we can express that in other properties with the same requirement, they can be applied here as well. The encoding is a separate problem from the semantics of what kind of roles we need.

Osma: What are the next steps? Who will do the changes?

Juha: I can edit the draft, move the roles into an annex.

Tom: Suggest phrasing it in a way that makes clear roles are RDF properties. Risk of confusion between role codes and RDF properties.

Juha: Can you provide the prose for that?

Tom: You put the things where you want them, I can propose the text.

Karen: LOC roles don't differentiate between roles of people and roles of organizations.

Osma: Juha, can you make the edits as a pull request instead of editing the profile directly? That way we can look at the proposed changes before they are put into the profile

Juha: Should be doable, I will ask you for help if necessary

## 7. Affiliation information

See https://github.com/dcmi/dc-srap/issues/3

Description of the new class and properties in a Markdown snippet (Osma)

There is an example (by Osma) of expressing affiliation information in XML: https://github.com/dcmi/dc-srap/blob/main/profile/affiliation-example.xml

Osma: Was thinking of making this into a pull request so that we can incorporate the changes into the profile document.

Karen: Maybe do the role change first, then see how to fit affiliations into that.

Juha: Makes sense, a logical process, not too many moving parts.

**DECISION**: First handle the roles, then Osma will prepare a PR for Affiliations

## 8. Describing creator-related PIDs (ORCID, ISNI, RAiD, ROR) in Dublin Core

Status of the WG (Alasdair)

Alasdair: Nothing new to report. Have contacted people previously interested. Got some responses. We could have a discussion among 3 or 4 people.

Juha: Can this be done independently of the roles and affiliations?

Alasdair: Looking at real world implications of using a new attribut like pid. What would happen if we tried to use it in DSpace? Sticking point is how you deal with more than one pid for the same person.

Osma: XML id attribute is unsuitable because you're not allowed to repeat the same value in the same XML document.

Karen: What type of identifier would it be? Not necessary everything is an IRI…

Juha: PIDs by definition should be URIs.

Karen: You don't always have that for DOIs, ORCIDs etc. Can be raw numbers

Juha: They can be expressed as HTTP URIs and resolvable

Karen: Need to add that restriction to the definition that they are all URIs.

Alasdair: It says in the draft that it's advisory to do so. Meaningless to put in numeric ORCIDs

Juha: Also possible to express DOIs etc. as URNs. Feel uncomfortable having to use resolver addresses with identifiers as it makes them technologically dependent, these should last a very long time

Karen: In SRAP, have a property for identifier. Should this be used only for resources? (Yes) Table talks about "name and identifier of…"

Osma: Would like to make this more abstract. Talk about real world objects like organization and person. How to encode this is a separate question.

Alasdair: Same could be done with subjects from MeSH, FAST etc.

Osma: Subjects are already expressed like this. But for organization and person, we could have a separate section explaining how to encode the names and identifiers in RDF and XML.

Juha: Can you make that into a pull request?

Karen: Is it important to know whether something is a person or an organization? How do humans and machines know?

Juha: ORCID is always a person. RaID is always a project. ISNI can be anything from Donald Duck to CERN…

Osma: Is this a problem for this profile?

Juha: It is a problem if you want to migrate to for example MARC21 which uses separate fields for organizations and people. Only way we could deal with this is to have separate elements for legal/actual persons and organizations. Don't know whether I want to go there with Dublin Core

Alasdair: For some properties it's clear. But not always. Funder could be individual or corporate entity.

Juha: Would need to separate quite a lot of existing properties into two if we want to be systematic. MARC does it, separating into three (people, organizations, conferences). Don't want to do that in DC.

Osma: SRAP builds heavily on DC and changing the fundamentals is not wise.

**DECISION**: Incorporate the changes defining the agent values on a more abstract level into the PR that adds Affiliations (Osma).

## 9. Any other business

### 9.1 DCTAP profile

Karen: Let's postpone this, some of the things we discussed will change the situation.

### 9.2 Editing of the SRAP specification 

Who should be able to edit the Markdown file? 

Osma: Current persons with write access: Juha, Osma, Karen, Tom, Alasdair, Stefanie. If others need write access it can be arranged.

## 10. Meetings during Autumn / Winter 2022 

Juha: Have set up Zoom meeting every two weeks. Let's try to stick to that schedule. If many people can't make it we can cancel a particular meeting. I can attend at least next two meetings.

## 11. Closure of the meeting

Juha closed the meeting.
