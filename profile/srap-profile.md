# Dublin Core Metadata Initiative Scholarly Resources Application Profile (SRAP) 

*list of authors*

Draft 2022-12-13

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, UKOLN SWAP, the Finnish guidelines, and the British Library’s ETHOS specification[^4]. This is not surprising since they share the same aim, support for description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by institutions of higher education. 

The SRAP application profile proposal is intended to be globally applicable. All suggested properties were “battle-proven”, in use. There are new properties for e.g. creator and contributor roles, but these have been adopted from MARC 21. SRAP draft contains also recommendations for SRAP-related semantic refinements to some existing Dublin Core Terms properties, in order to make them more suitable for use in the description of scholarly resources.  

We do not propose any new properties for agent-specific identifiers, but rely on DCMI’s draft proposal[^5] of using the XML id attribute to match identifiers with the agent names. For instance: 

    <dcterms:affiliation id="http://isni.org/isni/0000000404102071">University of Helsinki</dcterms:affiliation>    

This approach is sufficient for e.g. ISNI and ORCID (which share the same syntax) since their HTTP URIs reveal the identifier system used:

    <dcterms:editor id=https://orcid.org/0000-0002-1825-0097>Carberry, Josiah</dcterms:editor>

Roles of contributors are based on Library of Congress Relator terms and their associated codes[^6] when applicable. Contributor codes used in SWAP are provided for reference purposes.  

Note 1: All DCMI Metadata Terms URIs are suggestions. 

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

This table contains all the proposed new or changed element, and DC Terms elements which are essential for description of scholarly resources. In addition to the listed elements, any existing DC Terms element may also be used if and when necessary.

NOTE: Roles are presented in a separate table. 

NOTE: If the name is preceded by an asterisk, identifier has not been implemented yet. 

| Name              | Identifier                                    | Mandatory / Repeatable | Value |
| ----------------- | ----------------------------------------------| ----- | ----- |
| Abstract          | http://purl.org/dc/terms/abstract             | 0...1 | Free text |
| Access rights     | http://purl.org/dc/terms/accessRights         | 0...1 | A term from the [COAR vocabulary](http://vocabularies.coar-repositories.org/documentation/access_rights/). If term embargoed access is used is indicated, end date or duration of embargo should be provided in Embargo date range. |
| * Accessibility   | http://purl.org/dc/terms/accessibility             | 0...1 | Free text |
| Affiliation       | http://purl.org/dc/terms/affiliation          | 0...1 | Name and identifier of an organization or organizations |
| Contributor       | http://purl.org/dc/terms/contributor          | 0...1 | Name and identifier of a person and/or organization |
| Creator           | http://purl.org/dc/terms/creator              | 0...1 | Name and identifier of a person and/or organization |
| Date              | http://purl.org/dc/terms/date                 | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| Date accepted     | http://purl.org/dc/terms/dateAccepted         | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date ahead of print               | http://purl.org/dc/terms/dateAheadOfPrint                     | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date available as public draft    | http://purl.org/dc/terms/dateAvailableAsPublicDraft           | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date missing      | http://purl.org/dc/terms/dateMissing         | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date lost     | http://purl.org/dc/terms/dateLost         | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| Date published     | http://purl.org/dc/terms/datePublished         | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date received as manuscript       | http://purl.org/dc/terms/dateReceivedAsManuscript             | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date retracted    | http://purl.org/spar/fabio/hasRetractionDate  | 1 | Date according to ISO 8601-1 (YYYY-MM-DD) |
| * Date submitted        | http://purl.org/dc/terms/dateSubmitted              | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date submitted as preprint        | http://purl.org/dc/terms/dateSubmittedAsPreprint              | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date submitted as postprint       | http://purl.org/dc/terms/dateSubmittedAsPostprint             | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| * Date updated     | http://purl.org/dc/terms/dateUpdated         | 1     | Date according to ISO 8601-1 (YYYY-MM-DD)  |
| Description       | http://purl.org/dc/terms/description          | 1     | Free text; different languages shall be provided separately (as different Description elements) |
| * Embargo date range     | http://purl.org/dc/terms/embargoDateRange     | 0...1 | A period of time during which the resource is under embargo, according to ISO 8601-1 (YYYY-MM-DD/YYYY-MM-DD) | 
| Format            | http://purl.org/dc/terms/format               | 1     | MIME type registered by IANA   |
| * Grant number      | http://purl.org/dc/terms/grantNumber          | 0...1 | Free text  |
| Has Part          | http://purl.org/dc/terms/hasPart              | 0...1 | URI or other identifier of a related resource |
| Identifier        | http://purl.org/dc/terms/identifier           | 1     | URI, one for each identifier the resource has, provided separately |
| Is Part Of        | http://purl.org/dc/terms/isPartOf             | 0...1 | URI or other identifier of a related resource  |
| Language          | http://purl.org/dc/terms/language             | 1     | A code from ISO 639-2, one for each language used in the resource, provided separately |
| License           | http://purl.org/dc/terms/license              | 0...1 | A legal document giving official permission to do something with the resource |
| * Metadata source   | http://purl.org/dc/terms/metadataSource       | 0...1 | Name of a database or a system  |
| * Presented at      | http://purl.org/ontology/bibo/presentedAt     | 0...1 | Free text or URI |
| * Publication status       | http://purl.org/dc/terms/publicationStatus         | 0...1 |  Publication status value from a predefined list |
| Publisher         | http://purl.org/dc/terms/publisher            | 0...1 | Name and URI of an organization |
| * Related code  | http://purl.org/dc/terms/relatedCode       | 0...1 | URI |
| * Related dataset   | http://purl.org/dc/terms/relatedDataset       | 0...1 | URI |
| Relation          | http://purl.org/dc/terms/relation             | 0...1 | URI |
| Rights            | http://purl.org/dc/terms/rights               | 0...1 | Information about rights held in and over the resource |
| Rights Holder     | http://purl.org/dc/terms/rightsHolder         | 0...1 | A person or organization owning or managing rights over the resource |
| Subject           | http://purl.org/dc/terms/subject              | 0...1 | A concept from a controlled vocabulary such as LCSH or MeSH |
| Title             | http://purl.org/dc/terms/title                | 1     | Free text, titles in different languages provided separately |
| Type              | http://purl.org/dc/terms/type                 | 0...1 | A term from the DCMI Type vocabulary or from the the [COAR resource type vocabulary](http://vocabularies.coar-repositories.org/pubby/resource_type) |

## Roles 

Creators and contributors may have different roles. SRAP recommends the use of a controlled list of roles such as the Library of Congress relators to express roles a person or organization may have (editor, funder, etc.). If there is a need to describe an additional role or roles are needed, a request to register a new code will be sent to LC.

Note that the Library of Congress roles are defined using OWL:ObjectProperty, which means that the expected value will be a URI or a blank node. 

| Name              | Identifier                                    | Mandatory / Repeatable | Value |
|----|----|----|----|
| Degree supervisor | http://id.loc.gov/vocabulary/relators/dgs     | 0...1 | Name and identifier of a person |
| Editor            | http://id.loc.gov/vocabulary/relators/edt     | 0...1 | Name and identifier of a person |
| Funder            | http://id.loc.gov/vocabulary/relators/fnd     | 0...1 | Name and identifier of a person and/or organization  |
| Opponent          | http://id.loc.gov/vocabulary/relators/opn     | 0...1 | Name and identifier of a person |
| Praeses           | http://id.loc.gov/vocabulary/relators/pra     | 0...1 | Name and identifier of a person |

## Generic elements 

### Accessibility

DCMI Metadata Term: http://purl.org/dc/terms/accessibility

Label: Accessibility

Textual information describing the accessibility features of a resource, including technical details.

Recommended practice is to describe for instance software requirements for using the document or technical features such as open or closed captioning. 

### Affiliation

Schema.org property: https://schema.org/affiliation 

Label: Affiliation

An organization to which an agent was affiliated when the resource was created.

Domain includes: dcterms:Agent

Recommended practice is to identify the affiliation with a URI. If this is not possible or feasible, a literal value that identifies the affiliated organization may be provided. It is also possible to give both the name and the URI.

If a name is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit. 

NOTE This element should not be used to provide the current (at the time the metadata is created) affiliation of the agent, or all affiliations the agent has had over time.  

### Date accepted

DCMI Metadata Term: http://purl.org/dc/terms/dateAccepted

Label: Date accepted

Date of acceptance of the resource.

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date if it is specified in the resource. Examples of scholarly resources to which a date of acceptance may be relevant are a thesis (accepted by a university department) or a scientific article (accepted by a journal).

### Date lost

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateLost

Label: Date lost

Date when the resource was lost. 

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date only if there is no reasonable doubt that the resource has been lost; that is, there is not a single (readable) copy of it left. Criteria for making the decision that the resource has been lost may be developed locally, but can include for instance digital documents that can no longer be rendered. A SRAP record with date lost should contain sufficient metadata to serve as a permanent tombstone of the resource. 

Date lost should be used when e.g. the only known copy of a digital or printed resource has been destroyed or otherwise rendered unusable. 

Date lost should not be used when a publisher fails but its resources (e.g. serials) are still preserved in a legal deposit collection. Rights metadata should be updated to reflect changes in restrictions on access and use of such archived resources. For serials and other continuing publications, the most convenient solution is to provide this metadata in the host record, from which it may be copied to all component part (article) records.     

### Date missing

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateMissing

Label: Date missing

Date when the resource went missing. 

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date only if there is no reasonable doubt that the resource is missing; that is, there may be one or more copies left but they cannot be found. Criteria for making the decision that the resource is missing may be developed locally. A SRAP record with date missing should have sufficient metadata to serve as a temporary tombstone of the resource. 

Date missing may be used when e.g. a printed copy (item) of a resource has disappeared and its current location is unknown for the time being. 

### Editor 

MARC relator: https://id.loc.gov/vocabulary/relators/edt

Label: Editor

MARC relator definition: A person or organization contributing to a resource by revising or elucidating the content, e.g., adding an introduction, notes, or other critical matter. An editor may also prepare a resource for production, publication, or distribution. For major revisions, adaptations, etc., that substantially change the nature and content of the original work, resulting in a new work, see creator.

NOTE: This is a subproperty of: http://purl.org/dc/elements/1.1/contributor 

Recommended practice is to identify the editor with a URI. If this is not possible or feasible, a literal value that identifies the editor may be provided. It is also possible to give both the name and the URI.

### Embargo date range

Proposed DCMI Metadata Term: http://purl.org/dc/terms/embargoDateRange

Label: Embargo Date Range

A period of time during which the resource is under embargo.  

Subproperty of: Date http://purl.org/dc/terms/date 

Recommended practice is to describe the date range as recommended for the property Date.

NOTE Date available covers all resource types and news embargo, a request by a source that the information or news provided by that source not be published until a certain date or certain conditions have been met.

### Funder

MARC relator: https://id.loc.gov/vocabulary/relators/fnd

Label: Funder

MARC relator definition: A person or organization that furnished financial support for the production of the resource. 

Recommended practice is to identify the funder with a URI. If this is not possible or feasible, a literal value that identifies the funder may be provided. It is also possible to give both the name and the URI.

If a name is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit.  

### Grant number

Proposed DCMI Metadata Term: http://purl.org/dc/terms/grantNumber

Label: Grant Number

An alpha-numeric string identifying the contract, project or funding grant under which the scholarly resource was created. 

Subproperty of: Identifier

### Metadata source  

Proposed DCMI Metadata Term: http://purl.org/dc/terms/metadataSource

Label: Metadata Source  

Source (database or system) of the metadata record.

Recommended practice is to specify the metadata source by means of its name and/or URI.

SRAP: source (database or system) of the metadata record describing a scholarly resource. 
 
For metadata on scholarly resources, common sources include 

* Web of Science (https://clarivate.com/scientific-and-academic-research/research-discovery/web-of-science/)
* Scopus (https://www.scopus.com/)
* PubMed Central (https://www.ncbi.nlm.nih.gov/pmc/)
* ArXiv (https://arxiv.org/)
* Cab Abstracts (https://www.cabi.org/publishing-products/cab-abstracts/)

Since names may change over time, a URI should be used, especially when there is one based on a standard identifier. 

Note: Institutional repositories may harvest metadata from external sources. Since the source may have an impact on how the metadata can be reused, it is important to keep track of where the metadata came from. 

### Publication status 

Proposed DCMI Metadata Term: http://purl.org/dc/terms/publicationStatus

Label: Publication status 

The stage of the resource in the publishing workflow.

Recommended practice is to use a publication status value from the following list, ordered according to the increasing level of maturity: 

* public draft
* preprint
* postprint
* submitted manuscript
* publication
* updated publication

Recommended practice is use publication status when there are several versions of the same resource, and publication status can be used for telling them apart. Status information should be accompanied with an appropriate date specification whenever such date can be obtained from the resource itself or metadata linked to it. 

### Presented at

Proposed DCMI Metadata Term: http://purl.org/dc/terms/presentedAt

Label: Presented at 

The conference, workshop, shareholder meeting etc. where the resource was presented. 

SRAP: Conference, workshop or other scientific event where the scholarly resource was presented. 

Recommended practice is to identify formal meetings such as conferences with a URI. If this is not possible or feasible, a literal value that identifies the meeting may be provided. It is also possible to give both the name and the URI.

### Related Code  

Proposed DCMI Metadata Term: http://purl.org/dc/terms/relatedCode

Label: Related Code

Code (software applications) referenced in the resource. 

SRAP: Code referenced in the scholarly resource.

Recommended practice is to identify the code with a URI identifying either the code or a landing page through which the application or applications are accessed.  

Subproperty of: References         http://purl.org/dc/terms/references

### Related Dataset  

Proposed DCMI Metadata Term: http://purl.org/dc/terms/relatedDataset

Label: Related Dataset

Dataset or datasets referenced in the described resource. 

SRAP: Dataset or datasets referenced in the described scholarly resource.

Recommended practice is to identify a dataset with a URI identifying either the dataset or a landing page through which the dataset is accessed.  

Subproperty of: References         http://purl.org/dc/terms/references

## SRAP elements 

SRAP elements are elements which are applicable primarily for scholarly resources such as academic dissertations. 

### Date ahead of print

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateAheadOfPrint

Label: Date ahead of print

Subproperty of: Date (http://purl.org/dc/terms/date)

Date when the final version of the resource was made available in the Web or in print format before publication in a journal issue.

NOTE Many scientific journals operate article-level publishing, whereby articles are processed for publication immediately following acceptance. Such articles are later compiled into the next journal issue to be published. Recommended practice is to use Date ahead of print to record the date when the article was published, and Date published to record the date when the journal issue was published.  

### Date available as public draft

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateAvailableAsPublicDraft

Label: Date available as public draft

Subproperty of: Date http://purl.org/dc/terms/date

Date when an early draft of the resource (predating even preprint) has been made available in an open repository such as ArXiv.

### Date received as manuscript

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateReceivedAsManuscript

Label: Date received as manuscript

Subproperty of: Date http://purl.org/dc/terms/date

Date when the resource is first received by the publisher. 

Recommended practice is to provide this data when it is indicated in the resource. 

### Date retracted

Fabio Metadata Term: http://purl.org/spar/fabio/hasRetractionDate

Label: Date retracted 

Date when the resource was retracted or withdrawn.

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide reason for retraction or withdrawal in Description element. 

NOTE: Do not use Date lost or Date missing for retracted resources. 

### Date submitted as preprint

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateSubmittedAsPreprint

Label: Date submitted as preprint

Subproperty of: Date http://purl.org/dc/terms/date

Date when an author submits a preprint of an unpublished resource to a repository.

Recommended practice is to provide this information when it is included in the resource, provided by the author or available in the repository application. 

### Date submitted as postprint

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateSubmittedAsPostprint

Label: Date submitted as postprint

Subproperty of: Date http://purl.org/dc/terms/date

Date when an author submits a postprint of an unpublished resource to a repository.

Recommended practice is to provide this information if it is included in the resource, provided by the author or available in the repository application. 

### Date updated

Proposed DCMI Metadata Term: http://purl.org/dc/terms/dateUpdated

Label: Date updated

Date(s) when the publication was republished with additional or revised content.

Subproperty of: Date http://purl.org/dc/terms/date

Recommended practice is to provide this date if it is specified in the publication.

### Degree supervisor 

MARC relator: http://id.loc.gov/vocabulary/relators/dgs

Label: Supervisor

A person overseeing a higher level academic degree.

Recommended practice is to identify the supervisor with a URI. If this is not possible or feasible, a literal value that identifies the supervisor may be provided. It is also possible to give both the name and the URI.

Subproperty of: Contributor               http://purl.org/dc/terms/contributor

### Opponent

MARC relator: http://id.loc.gov/vocabulary/relators/opn 

Label: Opponent 

A person or organization responsible for opposing a thesis or dissertation

Recommended practice is to identify the opponent with a URI. If this is not possible or feasible, a literal value that identifies the opponent may be provided. It is also possible to give both the name and the URI.

### Praeses

MARC relator: http://id.loc.gov/vocabulary/relators/pra 

Label: Praeses 

A person who is the faculty moderator of an academic disputation, normally proposing a thesis and participating in the ensuing disputation

Recommended practice is to identify the praeses with a URI. If this is not possible or feasible, a literal value that identifies the praeses may be provided. It is also possible to give both the name and the URI.


## Refinements to existing DCMIMT elements

### Access rights  

DCMI Metadata Term: http://purl.org/dc/terms/accessRights 

Label: Access Rights 

Current definition of this property in the DCMI Terms namespace is: 

> “Information about who can access the resource or an indication of its security status.”

This is not applicable to scholarly resources. Their access rights are usually not based on security status nor do rights metadata normally specify who can access a scholarly resource. Moreover, for the time being there is no recommendation to use a controlled vocabulary.  

In SRAP AP, recommended practice is to use the COAR (Confederation of Open Access Repositories) [vocabulary of access rights](http://vocabularies.coar-repositories.org/documentation/access_rights/).

Version 1.0 of the vocabulary contains the following terms: 

* open access
* embargoed access
* restricted access
* metadata only access 
 
### Is Part Of

DCMI Metadata Term: http://purl.org/dc/terms/isPartOf

In SRAP context, this property can be used to specify host document, a related resource in which the described scholarly resource is physically or logically included. For instance, a scientific periodical in which the described article has been published.

Recommended practice in SRAP AP is to identify the related resource by means of a URI. If this is not possible or feasible, a string conforming to a formal identification system or a name may be provided. It is also possible to give both the name and the URI.

“Is Part Of” in DCMI Terms shall be used to provide a link (URI) from the described component part (“child”) to the host resource (“parent”). 
Note: There are no practical examples in DCMI Terms or DC User Guide on how to use this property in cases that are common for scientific publications, such as linking from an article to conference proceedings or periodicals.  User guide and/or DCMI Terms should be revised to accommodate relevant use cases. 

### Type 

DCMI Metadata Term: http://purl.org/dc/terms/type

Label: Type 

The Dublin Core DCMI Type Vocabulary[^7] is general and as such not suitable for scholarly resources. 

Recommended practice in SRAP AP is to use the COAR Controlled Vocabulary for Resource Type Genres[^8]. T

## Examples

These examples are all non-normative and included for information purposes only. 

### Affiliation 

Example 1:

    <dcterms:affiliation>University of Helsinki. Faculty of Theology</dcterms:affiliation>    

Example 2:

    <dcterms:affiliation id="http://isni.org/isni/0000000406246810">University of Helsinki. Faculty of Theology</dcterms:affiliation>   

Note 1: ISNI should be provided as a URI, not as a literal, since the literal form (0000 0004 0624 6810) is not actionable and does not indicate explicitly whether the string is ISNI, ORCID or even some other identifier that just happens to have the same syntax. 

### Editor 

Example 1:

    <dcterms:editor>Carberry, Josiah</dcterms:editor>

Example 2:

    <dcterms:editor id="https://orcid.org/0000-0002-1825-0097">Carberry, Josiah</dcterms:editor>

### Embargo date range 

Example:

    <dcterms:embargoDateRange>2022-01-01/2022-12-31</dcterms:embargoDateRange>

### Funder

Example 1:

    <dcterms:funder>Wellcome Trust</dcterms:funder>

Example 2:

    <dcterms:funder id="http://isni.org/isni/0000000404277672">Wellcome Trust</dcterms:funder>   

### Metadata source 

Example 1:

    <dcterms:metadataSource>PubMed Central</dcterms:metadataSource> 

Example 2:

    <dcterms:metadataSource id="http://isni.org/isni/0000000405077840">Pubmed Central</dcterms:metadataSource>  
    
### Publication status

Example:

    <dcterms:publicationStatus>Updated</dcterms:publicationStatus>

### Presented at 

Example 1:

    <dcterms:presentedAt>The Web Conference 2020</dcterms:presentedAt> 

Example 2:

    <dcterms:presentedAt id="https://www2020.thewebconf.org">The Web Conference 2020</dcterms:presentedAt>

Note: The URI and the name may identify either a single conference or a conference series, but both the name and the URI shall identify the same thing. Example 3 is incorrect: 

Example 3:

    <dcterms:presentedAt id="https://www.iw3c2.org/">The Web Conference 2020</dcterms:presentedAt>
    
### Related code set

Example:

    <dcterms:relatedCodeSet>https://support.mozilla.org/fi/products/firefox/install-and-update-firefox</dcterms:relatedCodeSet>
    
### Related dataset

Example:

    <dcterms:relatedDataset>http://dx.doi.org/10.17605/OSF.IO/B6KJZ</dcterms:relatedDataset>

### Degree supervisor 

Example 1:

    <dcterms:supervisor>Carberry, Josiah</dcterms:supervisor>

Example 2:

    <dcterms:supervisor id="https://orcid.org/0000-0002-1825-0097">Carberry, Josiah</dcterms:supervisor>

### Grant number 

Example:

    <dcterms:grantNumber>R01GM98765401</dcterms:grantNumber>

### Opponent 

Example 1:

    <dcterms:opponent>Ainsyut'ain, Alberŭt'ŭ</dcterms:opponent>

Example 2:

    <dcterms:opponent id="http://isni.org/isni/000000012281955X">Ainsyut'ain, Alberŭt'ŭ</dcterms:opponent>

### Access rights 

Example 1:

    <dcterms:accessRight>open access</dcterms:accessRight>

Example 2:

    <dcterms:accessRight id="http://purl.org/coar/access_right/c_abf2">open access</dcterms:accessRight>

### Is Part Of 

Example 1:

    <dcterms:isPartOf>https://www.thelancet.com/coronavirus<dcterms:isPartOf>

Example 2:

    <dcterms:isPartOf id="https://www.thelancet.com/coronavirus">COVID-19 Resource Center<dcterms:isPartOf>

Example 3:

    <dcterms:isPartOf id="1474-547X">Lancet (online)<dcterms:isPartOf>

### Type

Example 1:

    <dcterms:type>journal</dcterms:type>

Example 2:

    <dcterms:type id="http://purl.org/coar/resource_type/c_0640">journal</dcterms:type> 

________________

[^1]: http://www.ukoln.ac.uk/repositories/digirep/index/Scholarly_Works_Application_Profile

[^2]: http://www.ariadne.ac.uk/issue/50/allinson-et-al/

[^3]: https://www.kiwi.fi/display/Julkaisuarkistopalvelut/Metadatasuositus+julkaisuarkistojen+tekstiaineistolle

[^4]: http://ethostoolkit.cranfield.ac.uk/tiki-index.php?page=The+EThOS+UKETD_DC+application+profile

[^5]: https://github.com/dcmi/pids_in_dc 

[^6]: http://id.loc.gov/vocabulary/relators.html

[^7]: https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/

[^8]: http://purl.org/coar/resource_type
