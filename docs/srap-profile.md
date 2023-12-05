# Dublin Core Metadata Initiative Scholarly Resources Application Profile (SRAP) 

*list of authors*

*draft date*

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, UKOLN SWAP, the Finnish guidelines, and the British Library’s ETHOS specification[^4]. This is not surprising since they share the same aim, support for description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by institutions of higher education. 

The SRAP application profile proposal is intended to be globally applicable. All suggested properties were “battle-proven”, in use. There are new properties for e.g. creator and contributor roles, but these have been adopted from MARC 21. SRAP draft contains also recommendations for SRAP-related semantic refinements to some existing Dublin Core Terms properties, in order to make them more suitable for use in the description of scholarly resources.  

Roles of contributors are based on Library of Congress Relator terms and their associated codes[^6] or other controlled contributor lists. Contributor roles presented below are examples of ones that can be used.  

Note 1: All new DCMI Metadata Terms URIs are just suggestions until this profile has been approved, and marked with asterisk (*). 

Note 2: Examples are not normative and do not need to be reviewed.  

## Domain model 

SRAP has a simple domain model which enumerates the key entities and describes in generic terms how they are related. 

Note that the definitions of properties are more restrictive in the domain model than below, because in the Dublin Core context for instance affiliation should be interpreted more broadly. 

Scholarly resource is a) a peer-reviewed (usually) document, written by an authority on the subject at hand, produced by a reputable association, or b) dissertation, thesis, mémoire, or any other document written in order to achieve an academic degree, or c) a research dataset. 

NOTE Metadata elements needed for description of research datasets are not included in this version of the SRAP profile. Research datasets require complex and domain specific metadata (see for instance DDI, https://ddialliance.org/, for metadata specification intended for social science datasets). A future version of SRAP may be extended to cover also some or all domains of research data. 

Creator is a person or group which produces a scholarly resource. 

Affiliation is an organization to which the creator of the scholarly resource was affiliated when the resource was created. 

Editor is a person or group who prepares a scholarly resource for publication that is not primarily their own, such as by clarifying text, adding introductory or other critical matter, or technically leading an editorial staff.

Funder is a person or organization that furnished financial support for the production of the resource. 

Degree supervisor is a person under whose supervision a degree candidate develops and presents a document required to achieve an academic degree.

Opponent is a person responsible for opposing a thesis or dissertation. 

Figure 1. SRAP domain model (to be added).

## Alphabetic table of elements

This table contains all the proposed new or changed elements, and DC Terms elements which are essential for description of scholarly resources. In addition to the listed elements, any existing DC Terms element may also be used if and when necessary.

NOTE: Roles are presented in separate tables. 

NOTE: If the name is preceded by an asterisk, identifier has not been implemented yet. 

The table has been moved to a separate [DCTAP table](srap.csv).

## Roles 

Creators and contributors of scholarly resources may have a wide variety of roles. SRAP does not provide a comprehensive role list; recommended practice is to use the Library of Congress MARC Relator codes or some other controlled list to express roles such as the [RDA Unconstrained](https://www.rdaregistry.info/Elements/u/) properties. See below for examples of existing roles that may be used with thesis or with scientific articles. Lists are not mutually exclusive; for instance, a thesis may have a translator. 

Using uncontrolled (local) contributor roles reduces semantic interoperability and should be avoided. 

### Examples of roles for theses and dissertations

* Academic supervisor
* Dedicatee
* Degree committee member
* Degree granting institution
* Degree supervisor
* Dissertant
* Opponent
* Praeses
* Respondent
* Thesis advisor

### Examples of roles for journal articles

* Abridger
* Compiler
* Editor
* Editor of compilation
* Funder
* Honoree
* Host institution
* Organizer
* Reviewer
* Reviser
* Sponsor
* Translator

## Generic elements 

### Access Rights  

DCMI Metadata Term: http://purl.org/dc/terms/accessRights 

Recommended practice is to use the COAR (Confederation of Open Access Repositories) [vocabulary of access rights](http://vocabularies.coar-repositories.org/documentation/access_rights/).

Version 1.0 of the vocabulary contains the following terms: 

* open access
* embargoed access
* restricted access
* metadata only access 

NOTE: Current definition of this property in the DCMI Terms namespace is “Information about who can access the resource or an indication of its security status.”

This is not applicable to scholarly resources. Their access rights are usually not based on security status nor do rights metadata normally specify who can access a scholarly resource. Moreover, for the time being there is no recommendation to use a controlled vocabulary.  

### Accessibility Statement

DCMI Metadata Term: http://purl.org/dc/terms/accessibility

Textual information describing the accessibility features of a resource, including technical details.

Recommended practice is to define the accessibility options, such as software requirements for using the document or technical features such as open or closed captioning. 

### Affiliation

Schema.org property: https://schema.org/affiliation 

An organization to which an agent was affiliated when the resource was created.

Domain includes: dcterms:Agent

Recommended practice is to identify the affiliation with a URI. If this is not possible or feasible, a literal value that identifies the affiliated organization may be provided. It is also possible to give both the name and the URI.

If a name is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit. 

NOTE This element should not be used to provide the current (at the time the metadata is created) affiliation of the agent, or all affiliations the agent has had over time.  

### Bibliographic Citation 

DCMI Metadata Term: http://purl.org/dc/terms/bibliographicCitation

A bibliographic reference for the resource.

Subproperty of: Identifier http://purl.org/dc/terms/identifier

Recommended practice is to include sufficient bibliographic detail to identify the described resource as unambiguously as possible.

NOTE: Authors may use this element to give an example of how the resource should be cited. It may be necessary to adjust these examples to meet the preference of the publisher or serial. Some elements of the citation (e.g. information of the host resource) may or may not be available elsewhere in the SRAP record.  

EXAMPLE: Klein M, Van de Sompel H, Sanderson R, Shankar H, Balakireva L, Zhou K, et al. (2014) Scholarly Context Not Found: One in Five Articles Suffers from Reference Rot. PLoS ONE 9(12): e115253. https://doi.org/10.1371/journal.pone.0115253

### Date Accepted

DCMI Metadata Term: http://purl.org/dc/terms/dateAccepted

Date of acceptance of the resource.

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date if it is specified in the resource. Examples of scholarly resources to which a date of acceptance may be relevant are a thesis (accepted by a university department) or a scientific article (accepted by a journal).

### Date Lost

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateLost

Date when the resource was lost. 

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date only if there is no reasonable doubt that the resource has been lost; that is, there is not a single (readable) copy of it left. Criteria for making the decision that the resource has been lost may be developed locally, but can include for instance digital documents that can no longer be rendered. A SRAP record with date lost should contain sufficient metadata to serve as a permanent tombstone of the resource. 

Date lost should be used when e.g. the only known copy of a digital or printed resource has been destroyed or otherwise rendered unusable. 

Date lost should not be used when a publisher fails but its resources (e.g. serials) are still preserved in a legal deposit collection. Rights metadata should be updated to reflect changes in restrictions on access and use of such archived resources. For serials and other continuing publications, the most convenient solution is to provide this metadata in the host record, from which it may be copied to all component part (article) records.     

### Date Missing

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateMissing

Date when the resource went missing. 

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date only if there is no reasonable doubt that the resource is missing; that is, there may be one or more copies left but they cannot be found. Criteria for making the decision that the resource is missing may be developed locally. A SRAP record with date missing should have sufficient metadata to serve as a temporary tombstone of the resource. 

Date missing may be used when e.g. a printed copy (item) of a resource has disappeared and its current location is unknown for the time being. 

### Embargo Date Range

Proposed DCMI Metadata Term: http://purl.org/dc/terms/embargoDateRange

A period of time during which the resource is under embargo.  

Subproperty of: Date http://purl.org/dc/terms/date 

Recommended practice is to describe the date range as recommended for the property Date.

NOTE Date available covers all resource types and news embargo, a request by a source that the information or news provided by that source not be published until a certain date or certain conditions have been met.

### Grant Number

Proposed DCMI Metadata Term: http://purl.org/dc/terms/grantNumber

An alpha-numeric string identifying the contract, project or funding grant under which the scholarly resource was created. 

Subproperty of: Identifier

### Has Format 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/hasFormat

A related resource that is substantially the same as the pre-existing described resource, but in another format.

Subproperty of: Relation

NOTE: This property is an inverse property of Is Format Of.

### Has Part 

Proposed DCMI Metadata Term:  	http://purl.org/dc/terms/hasPart

A related resource that is included either physically or logically in the described resource.

Subproperty of: Relation. 

Recommended practice is to provide URI of the related resource.

EXAMPLE: In SRAP, this property may be used to specify presentations published in the conference proceedings described.

NOTE: This property is an inverse property of Is Part Of.

NOTE: If parts are not independently accessible with URI, Table of Contents should be used.  

### Has Version 

Proposed DCMI Metadata Term: 

A related resource that is a version, edition, or adaptation of the described resource.

Recommended practice is to provide URI or other identifier of the related resource.

NOTE: Changes in version imply substantive changes in content rather than differences in format. 

NOTE: This property is an inverse property of Is Version Of.

### Identifier

Proposed DCMI Metadata Term: http://purl.org/dc/terms/identifier

An unambiguous reference to the resource within a given context.

Recommended practice is to identify the resource by means of a string conforming to an identification system. Examples include International Standard Book Number (ISBN), Digital Object Identifier (DOI), and Uniform Resource Name (URN). Persistent identifiers should be provided as HTTP URIs.

### Is Format Of 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/isFormatOf

A pre-existing related resource that is substantially the same as the described resource, but in another format.

NOTE: This property is an inverse property of Has Format.

### Is Part Of

DCMI Metadata Term: http://purl.org/dc/terms/isPartOf

A related resource in which the described resource is physically or logically included.

Recommended practice in SRAP is to identify the related resource by means of a URI. If this is not possible or feasible, a string conforming to a formal identification system or a name may be provided. It is also possible to give both the name and the URI.

EXAMPLE: In SRAP, this property may be used to specify a scientific periodical in which the described article has been published.

NOTE: This property is an inverse property of Has Part.

### Is Referenced By 

Proposed DCMI Metadata Term:  http://purl.org/dc/terms/isReferencedBy

A related resource that references, cites, or otherwise points to the described resource.

NOTE: This property is an inverse property of References.

### Is Version Of 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/isVersionOf

A related resource of which the described resource is a version, edition, or adaptation.

NOTE: Changes in version imply substantive changes in content rather than differences in format.
NOTE: This property is an inverse property of Has Version.

### Date Issued 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/issued 

Date of formal issuance of the resource.

Recommended practice is to describe the date, date/time, or period of time as recommended for the property Date.

Subproperty of: Date http://purl.org/dc/terms/date

### Language 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/language

A language of the resource.

Recommended practice is to use either a non-literal value representing a language from a controlled vocabulary such as ISO 639-2 or ISO 639-3, or a literal value consisting of an IETF Best Current Practice 47 [IETF-BCP47] language tag.

### License 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/license

A legal document giving official permission to do something with the resource.

Subproperty of: Rights http://purl.org/dc/terms/rights

Recommended practice is to identify the license document with a URI. If this is not possible or feasible, a literal value that identifies the license may be provided.

### Date Modified

Proposed DCMI Metadata Term: http://purl.org/dc/terms/modified

Date on which the resource was changed.

Recommended practice is to describe the date, date/time, or period of time as recommended for the property Date.

Subproperty of: Date http://purl.org/dc/terms/date

### Publication Status 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/publicationStatus

The stage of the resource in the publishing workflow.

Recommended practice is to use a publication status value from the following list, ordered according to the increasing level of maturity: 

* public draft
* preprint
* postprint
* submitted manuscript
* publication
* updated publication

NOTE: Publication status should be used when there are several versions of the same resource, and publication status can be used for telling them apart. Status information should be accompanied with an appropriate date specification whenever such date can be obtained from the resource itself or metadata linked to it. 

### Presented At

Proposed DCMI Metadata Term: http://purl.org/dc/terms/presentedAt

The conference, workshop, shareholder meeting etc. where the resource was presented. 

SRAP: Conference, workshop or other scientific event where the scholarly resource was presented. 

Recommended practice is to identify formal meetings such as conferences with a URI. If this is not possible or feasible, a literal value that identifies the meeting may be provided. It is also possible to give both the name and the URI.

### References 

Proposed DCMI Metadata Term:  http://purl.org/dc/terms/References

A related resource that is referenced, cited, or otherwise pointed to by the described resource.

NOTE: This property is an inverse property of Is Referenced By.

### Related Code  

Proposed DCMI Metadata Term: http://purl.org/dc/terms/relatedCode

Code (software applications) referenced in the resource. 

Recommended practice is to identify the code with a URI identifying either the code or a landing page through which the application or applications are accessed.  

Subproperty of: References         http://purl.org/dc/terms/references

### Related Dataset  

Proposed DCMI Metadata Term: http://purl.org/dc/terms/relatedDataset

Dataset or datasets referenced in the described resource. 

Recommended practice is to identify a dataset with a URI identifying either the dataset or a landing page through which the dataset is accessed.  

Subproperty of: References http://purl.org/dc/terms/references

### Relation 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/relation

A related resorce. 

Recommended practice is to identify the related resource by means of a URI. If this is not possible or feasible, a string conforming to a formal identification system may be provided.

### Rights 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/rights

Information about rights held in and over the resource.

Recommended practice is to refer to a rights statement with a URI. If this is not possible or feasible, a literal value (name, label, or short text) may be provided.

NOTE: Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights.

### Rights Holder 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/rightsHolder

A person or organization owning or managing rights over the resource.

Recommended practice is to refer to the rights holder with a URI. If this is not possible or feasible, a literal value that identifies the rights holder may be provided.

### Subject 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/subject 

A topic of the resource.

Recommended practice is to refer to the subject with a URI. If this is not possible or feasible, a literal value that identifies the subject may be provided. Both should preferably refer to a subject in a controlled vocabulary.

### Table Of Contents

Proposed DCMI Metadata Term: http://purl.org/dc/terms/tableOfContents

A list of subunits of the resource.

Subproperty of: Description  http://purl.org/dc/terms/description

### Title

Proposed DCMI Metadata Term: http://purl.org/dc/terms/title

A name given to the resource.

### Type 

DCMI Metadata Term: http://purl.org/dc/terms/type

Recommended practice in SRAP AP is to use the COAR Controlled Vocabulary for Resource Type Genres[^8]. 

## SRAP elements 

SRAP elements are elements which are applicable primarily for scholarly resources such as academic dissertations. 

### Date Ahead of Print

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateAheadOfPrint

Subproperty of: Date (http://purl.org/dc/terms/date)

Date when the final version of the resource was made available in the Web or in print format before publication in a journal issue.

NOTE Many scientific journals operate article-level publishing, whereby articles are processed for publication immediately following acceptance. Such articles are later compiled into the next journal issue to be published. Recommended practice is to use Date ahead of print to record the date when the article was published, and Date published to record the date when the journal issue was published.  

### Date Available as Public Draft

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateAvailableAsPublicDraft

Subproperty of: Date http://purl.org/dc/terms/date

Date when an early draft of the resource (predating even preprint) has been made available in an open repository such as ArXiv.

### Date Received as Manuscript

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateReceivedAsManuscript

Subproperty of: Date http://purl.org/dc/terms/date

Date when the resource is first received by the publisher. 

Recommended practice is to provide this data when it is indicated in the resource. 

### Date Retracted

Fabio Metadata Term: http://purl.org/spar/fabio/hasRetractionDate

Date when the resource was retracted or withdrawn.

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide reason for retraction or withdrawal in Description element. 

NOTE: Do not use Date lost or Date missing for retracted resources. 

### Date Submitted as Preprint

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateSubmittedAsPreprint

Subproperty of: Date http://purl.org/dc/terms/date

Date when an author submits a preprint of an unpublished resource to a repository.

Recommended practice is to provide this information when it is included in the resource, provided by the author or available in the repository application. 

### Date Submitted as Postprint

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateSubmittedAsPostprint

Subproperty of: Date http://purl.org/dc/terms/date

Date when an author submits a postprint of an unpublished resource to a repository.

Recommended practice is to provide this information if it is included in the resource, provided by the author or available in the repository application. 

### Date Updated

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateUpdated

Date(s) when the publication was republished with additional or revised content.

Subproperty of: Date http://purl.org/dc/terms/date

Subproperty of: Modified http://purl.org/dc/terms/modified

Recommended practice is to provide this date if it is specified in the publication.

## Examples of roles

### Abridger 

MARC relator: http://id.loc.gov/vocabulary/relators/abr

MARC relator definition: A person, family, or organization contributing to a resource by shortening or condensing the original work but leaving the nature and content of the original work substantially unchanged

Recommended practice is to identify the person, family or organization with a URI. If this is not possible or feasible, a literal value that identifies the abridger may be provided. It is also possible to give both the name and the URI.

The name of an organization should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Academic supervisor

RDA definition: An agent who is responsible for overseeing academic activity of any kind that results in a resource, including theses, research, and projects.

Recommended practice is to identify the person, family or organization with a URI. If this is not possible or feasible, a literal value that identifies the compiler may be provided. It is also possible to give both the name and the URI.

### Compiler 

MARC relator: http://id.loc.gov/vocabulary/relators/com

MARC relator definition: A person, family, or organization responsible for creating a new work (e.g., a bibliography, a directory) through the act of compilation, e.g., selecting, arranging, aggregating, and editing data, information, etc 

Recommended practice is to identify the person, family or organization with a URI. If this is not possible or feasible, a literal value that identifies the compiler may be provided. It is also possible to give both the name and the URI.

The name of an organization should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Degree granting institution

MARC relator: http://id.loc.gov/vocabulary/relators/dgg

MARC relator definition: An organization granting an academic degree. 

Recommended practice is to identify the organization with a URI. If this is not possible or feasible, a literal value that identifies the organization may be provided. It is also possible to give both the name and the URI.

The name of an institution should be provided in full and in hierarchical order, starting from the largest organizational unit.

Subproperty of: Contributor               http://purl.org/dc/terms/contributor

### Degree supervisor 

MARC relator: http://id.loc.gov/vocabulary/relators/dgs

MARC relator definition: A person overseeing a higher level academic degree.

Recommended practice is to identify the degree supervisor with a URI. If this is not possible or feasible, a literal value that identifies the degree supervisor may be provided. It is also possible to give both the name and the URI.

Subproperty of: Contributor               http://purl.org/dc/terms/contributor

### Dissertant

MARC relator: http://id.loc.gov/vocabulary/relators/dis 

MARC relator definition: A person who presents a thesis for a university or higher-level educational degree.

Recommended practice is to identify the dissertant with a URI. If this is not possible or feasible, a literal value that identifies the dissertant may be provided. It is also possible to give both the name and the URI.

### Editor 

MARC relator: https://id.loc.gov/vocabulary/relators/edt

MARC relator definition: A person or organization contributing to a resource by revising or elucidating the content, e.g., adding an introduction, notes, or other critical matter. An editor may also prepare a resource for production, publication, or distribution. For major revisions, adaptations, etc., that substantially change the nature and content of the original work, resulting in a new work, see creator.

Recommended practice is to identify the editor with a URI. If this is not possible or feasible, a literal value that identifies the editor may be provided. It is also possible to give both the name and the URI.

The name of an organization should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Editor of compilation 

MARC relator: http://id.loc.gov/vocabulary/relators/edt 

MARC relator definition: A person, family, or organization contributing to a collective or aggregate work by selecting and putting together works, or parts of works, by one or more creators.

Recommended practice is to identify the editor of compilation with a URI. If this is not possible or feasible, a literal value that identifies the editor of compilation may be provided. It is also possible to give both the name and the URI.

The name of an organization should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Funder 

MARC relator: https://id.loc.gov/vocabulary/relators/fnd

MARC relator definition: A person or organization that furnished financial support for the production of the resource. 

Recommended practice is to identify the funder with a URI. If this is not possible or feasible, a literal value that identifies the funder may be provided. It is also possible to give both the name and the URI.

If a name of an organization is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit.  

### Honoree 

MAARC relator: http://id.loc.gov/vocabulary/relators/hnr

MARC relator definition: A person, family, or organization honored by a work or item (e.g., the honoree of a festschrift, a person to whom a copy is presented) 

### Host institution

MARC relator: http://id.loc.gov/vocabulary/relators/his

MARC relator definition: An organization hosting the event, exhibit, conference, etc., which gave rise to a resource, but having little or no responsibility for the content of the resource. 

Recommended practice is to identify the host institution with a URI. If this is not possible or feasible, a literal value that identifies the host institution may be provided. It is also possible to give both the name and the URI.

The name should be provided in full and in hierarchical order, starting from the largest organizational unit.

Subproperty of: Contributor               http://purl.org/dc/terms/contributor

### Opponent

MARC relator: http://id.loc.gov/vocabulary/relators/opn

A person or organization responsible for opposing a thesis or dissertation.

Recommended practice is to identify the opponent with a URI. If this is not possible or feasible, a literal value that identifies the opponent may be provided. It is also possible to give both the name and the URI.

### Organizer 

MARC relator: http://id.loc.gov/vocabulary/relators/orm 

MARC relator definition: A person, family, or organization organizing the exhibit, event, conference, etc., which gave rise to a resource.

Recommended practice is to identify the funder with a URI. If this is not possible or feasible, a literal value that identifies the funder may be provided. It is also possible to give both the name and the URI.

If a name of an organization is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Praeses

MARC relator: http://id.loc.gov/vocabulary/relators/pra 

A person who is the faculty moderator of an academic disputation, normally proposing a thesis and participating in the ensuing disputation

Recommended practice is to identify the praeses with a URI. If this is not possible or feasible, a literal value that identifies the praeses may be provided. It is also possible to give both the name and the URI.

### Respondent

MARC relator: http://id.loc.gov/vocabulary/relators/rsp

A candidate for a degree who defends or opposes a thesis provided by the praeses in an academic disputation.

Recommended practice is to identify the respondent with a URI. If this is not possible or feasible, a literal value that identifies the respondent may be provided. It is also possible to give both the name and the URI.

### Reviewer 

MARC relator: http://id.loc.gov/vocabulary/relators/rev

MARC relator definition: A person or organization responsible for the review of a book, motion picture, performance, etc. 

Recommended practice is to identify the funder with a URI. If this is not possible or feasible, a literal value that identifies the funder may be provided. It is also possible to give both the name and the URI.

If a name of an organization is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Reviser 

A person or organization responsible for the revision of a book, article, etc. 

Recommended practice is to identify the reviser with a URI. If this is not possible or feasible, a literal value that identifies the reviser may be provided. It is also possible to give both the name and the URI.

### Sponsor 

MARC relator: http://id.loc.gov/vocabulary/relators/spn 

MARC relator definition: A person, family, or organization sponsoring some aspect of a resource, e.g., funding research, sponsoring an event 

Recommended practice is to identify the funder with a URI. If this is not possible or feasible, a literal value that identifies the funder may be provided. It is also possible to give both the name and the URI.

If a name of an organization is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit.

### Thesis advisor

MARC relator: http://id.loc.gov/vocabulary/relators/ths

A person under whose supervision a degree candidate develops and presents a thesis, mémoire, or text of a dissertation.

Recommended practice is to identify the thesis advisor with a URI. If this is not possible or feasible, a literal value that identifies the thesis advisor may be provided. It is also possible to give both the name and the URI.

### Translator

MARC relator: http://id.loc.gov/vocabulary/relators/trl

A person or organization who renders a text from one language into another, or from an older form of a language into the modern form.

Recommended practice is to identify the translator with a URI. If this is not possible or feasible, a literal value that identifies the translator may be provided. It is also possible to give both the name and the URI.

## Refinements to existing DCMIMT elements

Definitions of Access rights and Type have been modified. Reasons for changes are explained below. 

### Access rights  

Definition of this property in the DCMI Terms namespace is: “Information about who can access the resource or an indication of its security status.”

This is not applicable to scholarly resources. Their access rights are usually not based on security status nor do rights metadata normally specify who can access a scholarly resource. Moreover, there is no recommendation to use a controlled vocabulary to describe access status. 

In SRAP AP, the COAR (Confederation of Open Access Repositories) [vocabulary of access rights](http://vocabularies.coar-repositories.org/documentation/access_rights/) should be used, because it is applicable to scholarly resources 

### Type 

The Dublin Core DCMI Type Vocabulary[^7] contains the following terms: Collection, Dataset, Event, Image, Interactive resource, Moving Image, Physical object, Service, Software, Sound, Still image, Text. These types are generic and as such not ideal for scholarly resources. COAR Controlled Vocabulary for Resource Type Genres[^8], which allows precise description of the type with terms like bachelor, doctoral and master thesis, is more suitable for SRAP. 

It is possible to use DCMI Type Vocabulary to provide generic description, and complement it with a precise COAR term. 

## Examples

These examples are all non-normative and included for information purposes only. 

### Affiliation 

Example 1:

    <dcterms:affiliation>University of Helsinki. Faculty of Theology</dcterms:affiliation>    

Example 2:

    <dcterms:affiliation pid="http://isni.org/isni/0000000406246810">University of Helsinki. Faculty of Theology</dcterms:affiliation>   

Note 1: ISNI should be provided as a URI, not as a literal, since the literal form (0000 0004 0624 6810) is not actionable and does not indicate explicitly whether the string is ISNI, ORCID or even some other identifier that just happens to have the same syntax. 

### Bibliographic citation 

Example: 

    <dcterms:bibliographicCitation>Klein M, Van de Sompel H, Sanderson R, Shankar H, Balakireva L, Zhou K, et al. (2014) Scholarly Context Not Found: One in Five Articles Suffers from Reference Rot. PLoS ONE 9(12): e115253. https://doi.org/10.1371/journal.pone.0115253</dcterms:bibliographicCitation>

### Editor 

Example 1:

    <dcterms:editor>Hakala, Juha</dcterms:editor>

Example 2:

    <dcterms:editor pid=https://orcid.org/0000-0003-1067-5020 https://isni.org/isni/0000000416625064>Hakala, Juha</dcterms:editor>

### Embargo date range 

Example:

    <dcterms:embargoDateRange>2022-01-01/2022-12-31</dcterms:embargoDateRange>

### Funder

Example 1:

    <dcterms:funder>Wellcome Trust</dcterms:funder>

Example 2:

    <dcterms:funder pid="http://isni.org/isni/0000000404277672">Wellcome Trust</dcterms:funder>   
    
### Publication status

Example:

    <dcterms:publicationStatus>Updated</dcterms:publicationStatus>

### Presented at 

Example 1:

    <dcterms:presentedAt>The Web Conference 2020</dcterms:presentedAt> 

Example 2:

    <dcterms:presentedAt pid="https://www2020.thewebconf.org">The Web Conference 2020</dcterms:presentedAt>

Note: The URI and the name may identify either a single conference or a conference series, but both the name and the URI shall identify the same thing. Example 3 is incorrect: 

Example 3:

    <dcterms:presentedAt pid="https://www.iw3c2.org/">The Web Conference 2020</dcterms:presentedAt>
    
### Related code

Example:

    <dcterms:relatedCode>https://support.mozilla.org/fi/products/firefox/install-and-update-firefox</dcterms:relatedCode>
    
### Related dataset

Example:

    <dcterms:relatedDataset>http://dx.doi.org/10.17605/OSF.IO/B6KJZ</dcterms:relatedDataset>

### Degree supervisor 

Example 1:

    <dcterms:supervisor>Watson, James D.</dcterms:supervisor>

Example 2:

    <dcterms:supervisor pid="https://isni.org/isni/0000000114514801">Watson, James D.</dcterms:supervisor>

### Grant number 

Example:

    <dcterms:grantNumber>R01GM98765401</dcterms:grantNumber>

### Opponent 

Example 1:

    <dcterms:opponent>Ainsyut'ain, Alberŭt'ŭ</dcterms:opponent>

Example 2:

    <dcterms:opponent pid="http://isni.org/isni/000000012281955X">Ainsyut'ain, Alberŭt'ŭ</dcterms:opponent>

### Access rights 

Example 1:

    <dcterms:accessRight>open access</dcterms:accessRight>

Example 2:

    <dcterms:accessRight pid="http://purl.org/coar/access_right/c_abf2">open access</dcterms:accessRight>

### Is Part Of 

Example 1:

    <dcterms:isPartOf>https://www.thelancet.com/coronavirus<dcterms:isPartOf>

Example 2:

    <dcterms:isPartOf pid="https://www.thelancet.com/coronavirus">COVID-19 Resource Center<dcterms:isPartOf>

Example 3:

    <dcterms:isPartOf pid="1474-547X">Lancet (online)<dcterms:isPartOf>

### Type

Example 1:

    <dcterms:type>journal</dcterms:type>

Example 2:

    <dcterms:type pid="http://purl.org/coar/resource_type/c_0640">journal</dcterms:type>

## Appendix 1. Legacy representations for SRAP data

SRAP itself is defined using DCTAP tables, which express the SRAP data model. The tables define several shapes, corresponding to different types of entities, as well as their properties (data elements such as title and publication date). The underlying assumption is that the metadata for each entity can be represented in a structured format such as RDF, JSON or XML and the different entities can be represented independently of each other. This is not always possible when dealing with legacy systems that only provide a flat representation of document metadata fields and values. This appendix provides guidance on how to apply SRAP in such a legacy setting.

### Flat key-value representation of SRAP

*To Be Written*

### Identifiers along with names in XML

DCMI’s "PIDs in DC" draft proposal[^5] allows using the XML `id` attribute to match identifiers with the agent names. However, we use attribute `pid` instead of `id`, since W3C xml:id proposal allows just one identifier per each element. In SRAP context, the same person or organization may have multiple unique identifiers.  For instance: 

    <dcterms:affiliation pid="http://isni.org/isni/0000000404102071 0313471-7">University of Helsinki</dcterms:affiliation>    

    <dcterms:editor pid=https://orcid.org/0000-0003-1067-5020 https://isni.org/isni/0000000416625064>Hakala, Juha</dcterms:editor>

Using attribute `id` would produce xml:id errors which, although not fatal, would in this case be incorrect. 

________________

[^1]: http://www.ukoln.ac.uk/repositories/digirep/index/Scholarly_Works_Application_Profile

[^2]: http://www.ariadne.ac.uk/issue/50/allinson-et-al/

[^3]: https://www.kiwi.fi/display/Julkaisuarkistopalvelut/Metadatasuositus+julkaisuarkistojen+tekstiaineistolle

[^4]: http://ethostoolkit.cranfield.ac.uk/tiki-index.php?page=The+EThOS+UKETD_DC+application+profile

[^5]: https://github.com/dcmi/pids_in_dc 

[^6]: http://id.loc.gov/vocabulary/relators.html

[^7]: https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/

[^8]: http://purl.org/coar/resource_type
