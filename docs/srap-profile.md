# Dublin Core Metadata Initiative Scholarly Resources Application Profile (SRAP) 

*list of authors*

*draft date*

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, UKOLN SWAP, the Finnish guidelines, and the British Library’s ETHOS specification[^4]. This is not surprising since they share the same aim, support for description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by institutions of higher education. 

The SRAP application profile proposal is intended to be globally applicable. All suggested properties were “battle-proven”, in use. There are new properties for e.g. creator and contributor roles, but these have been adopted from MARC 21. SRAP draft contains also recommendations for SRAP-related semantic refinements to some existing Dublin Core Terms properties, in order to make them more suitable for use in the description of scholarly resources.  

Roles of contributors are based on [Library of Congress Relator terms](https://www.loc.gov/marc/relators/relaterm.html) or other controlled contributor lists. Contributor roles presented below are examples of ones that can be used.

Note 1: All new DCMI Metadata Terms URIs are just suggestions until this profile has been approved, and marked with asterisk (*). 

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

## DCTAP for SRAP

SRAP is expressed in a table format as a [Dublin Core Tabular Application Profile](https://www.dublincore.org/specifications/dctap/) (TAP). The TAP expresses the main elements of SRAP in a structured, machine actionable format that can be used e.g. for basic data validation.

The remainder of this document contains more detailed guidance and examples for how to apply SRAP in specific circumstances.

## Basic metadata

Resources described with SRAP can be described with basic metadata elements from Dublin Core Terms. This includes properties such as Title and Language. The most frequently used elements are listed in the TAP. This section suggests some additional guidance for applying basic metadata elements.

### Type (dct:type)

Recommended practice in SRAP is to use the COAR Controlled Vocabulary for Resource Type Genres[^8], which allows precise description of the type with terms like _doctoral thesis_, _master thesis_ and _bachelor thesis_ as well as _journal article_ and _research report_. 

## Status and dates

SRAP makes it possible to express the status of a scholarly in a publishing workflow in multiple ways. The Publication Status element indicates the current status, while many date fields can be used to express the date of important events in the lifecycle of the resource.

### Publication Status (srap:publicationStatus)

The stage of the resource in the publishing workflow. Recommended practice is to use a publication status value from the [OpenAIRE Publication Version vocabulary](https://guidelines.openaire.eu/en/latest/literature/field_publicationversion.html).

NOTE: Publication status should be used when there are several versions of the same resource, and publication status can be used for telling them apart. Status information should be accompanied with an appropriate date specification whenever such date can be obtained from the resource itself or metadata linked to it.

### Date Issued (dct:issued)

Date of formal issuance of the resource.

Recommended practice is to describe the date, date/time, or period of time as recommended for the property Date.

### Date Modified (dct:modified)

Date on which the resource was changed.

Recommended practice is to describe the date, date/time, or period of time as recommended for the property Date.

### Date Accepted (dct:dateAccepted)

Date of acceptance of the resource.

Recommended practice is to provide this date if it is specified in the resource. Examples of scholarly resources to which a date of acceptance may be relevant are a thesis (accepted by a university department) or a scientific article (accepted by a journal).

### Embargo Date Range (srap:embargoDateRange)

A period of time during which the resource is under embargo.  

Subproperty of: Date (dct:date) 

Recommended practice is to describe the date range as recommended for the property Date.

NOTE Date available covers all resource types and news embargo, a request by a source that the information or news provided by that source not be published until a certain date or certain conditions have been met.

### Date Retracted (srap:dateRetracted)

Date when the resource was retracted or withdrawn.

Subproperty of: Date (dct:date)

Recommended practice is to provide reason for retraction or withdrawal in Description element. 


## Containment

Many scholarly resources are published as parts of journals, conference proceedings or other types of collective works. The details of the relationship of a resource and the collection can be expressed using metadata elements from Dublin Core Terms and BIBO.

### Volume, issue and page numbers

A scholarly article may be published in a journal or other periodical that uses numbered volumes and issues as well as page numbers.  These should be represented using the BIBO properties `bibo:volume`, `bibo:issue`, `bibo:pageStart` and `bibo:pageEnd`. The relationship between the article and the journal should be represented using the `dct:isPartOf` relationship. See the [journal article example](examples/journalArticle.md) for more details.

### Is Part Of (dct:isPartOf)

A related resource in which the described resource is physically or logically included.

Recommended practice in SRAP is to identify the related resource by means of a URI. If this is not possible or feasible, a string conforming to a formal identification system or a name may be provided. It is also possible to give both the name and the URI.

EXAMPLE: In SRAP, this property may be used to specify a scientific periodical in which the described article has been published.

NOTE: This property is an inverse property of Has Part.

### Has Part (dct:hasPart)

A related resource that is included either physically or logically in the described resource.

Recommended practice is to provide URI of the related resource.

EXAMPLE: In SRAP, this property may be used to specify presentations published in the conference proceedings described.

NOTE: This property is an inverse property of Is Part Of.

NOTE: If parts are not independently accessible with URI, Table of Contents should be used.  

### Presented At (srap:presentedAt)

The conference, workshop, shareholder meeting etc. where the resource was presented. 

SRAP: Conference, workshop or other scientific event where the scholarly resource was presented. 

Recommended practice is to identify formal meetings such as conferences with a URI. If this is not possible or feasible, a literal value that identifies the meeting may be provided. It is also possible to give both the name and the URI.

### Bibliographic Citation (dct:bibliographicCitation)

A bibliographic reference for the resource.

Recommended practice is to include sufficient bibliographic detail to identify the described resource as unambiguously as possible.

NOTE: Authors may use this element to give an example of how the resource should be cited. It may be necessary to adjust these examples to meet the preference of the publisher or serial. Some elements of the citation (e.g. information of the host resource) may or may not be available elsewhere in the SRAP record.  

EXAMPLE: Klein M, Van de Sompel H, Sanderson R, Shankar H, Balakireva L, Zhou K, et al. (2014) Scholarly Context Not Found: One in Five Articles Suffers from Reference Rot. PLoS ONE 9(12): e115253. https://doi.org/10.1371/journal.pone.0115253


## Rights

Many types of rights apply to scholarly resources. SRAP allows expressing the rights using metadata elements from Dublin Core Terms as well as a new, proposed element for indicating the Rights Holder.

### Access Rights (dct:accessRights)

Recommended practice is to use the COAR (Confederation of Open Access Repositories) [vocabulary of access rights](http://vocabularies.coar-repositories.org/documentation/access_rights/).

Version 1.0 of the vocabulary contains the following terms: 

* open access
* embargoed access
* restricted access
* metadata only access 

NOTE: The current definition of the property in the DCMI Terms namespace is "Information about who can access the resource or an indication of its security status."

This is not applicable to scholarly resources. Their access rights are usually not based on security status nor do rights metadata normally specify who can access a scholarly resource. Moreover, for the time being there is no recommendation to use a controlled vocabulary.

### License (dct:license)

A legal document giving official permission to do something with the resource.

Recommended practice is to identify the license document with a URI. If this is not possible or feasible, a literal value that identifies the license may be provided.

### Rights (dct:rights)

Information about rights held in and over the resource.

Recommended practice is to refer to a rights statement with a URI. If this is not possible or feasible, a literal value (name, label, or short text) may be provided.

NOTE: Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights.

### Rights Holder (dct:rightsHolder)

A person or organization owning or managing rights over the resource.

Recommended practice is to refer to the rights holder with a URI. If this is not possible or feasible, a literal value that identifies the rights holder may be provided.

## Accessibility

Accessibility is an important aspect of scholarly resources. SRAP proposes a new element for indicating the accessibility of a resource with an Accessibility Statement.

### Accessibility Statement (srap:accessibility)

Textual information describing the accessibility features of a resource, including technical details.

Recommended practice is to define the accessibility options, such as software requirements for using the document or technical features such as open or closed captioning. 


## Academic context

Scholarly resources are created in an academic context, for example a specific institution, faculty and department and/or a project funded by a specific grant. Also, authors and contributors can be affiliated with academic or other institutions. SRAP enables expressing the academic context of scholarly resources and the affiliation of related individuals.

### Affiliation (schema:affiliation)

An organization to which an agent was affiliated when the resource was created.

Domain includes: dcterms:Agent

Recommended practice is to identify the affiliation with a URI. If this is not possible or feasible, a literal value that identifies the affiliated organization may be provided. It is also possible to give both the name and the URI.

If a name is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit. 

NOTE This element should not be used to provide the current (at the time the metadata is created) affiliation of the agent, or all affiliations the agent has had over time.  

### Grant Number (srap:grantNumber)

An alpha-numeric string identifying the contract, project or funding grant under which the scholarly resource was created. 

Subproperty of: Identifier (dct:identifier)


## Identifiers

Scholarly resources are often referred to using identifiers from an identification system. 

### Identifier (dct:identifier)

An unambiguous reference to the resource within a given context.

Recommended practice is to identify the resource by means of a string conforming to an identification system. Examples include International Standard Book Number (ISBN), Digital Object Identifier (DOI), and Uniform Resource Name (URN). Persistent identifiers should be provided as HTTP URIs.


## Related code and datasets

Scholarly resources may be based on, or otherwise associated with, software applications and/or data sets. For example, an article may be based on software experiments and the underlying data sets may be published separately. SRAP enables linking the resources to related code and data sets.

### Related Code (srap:relatedCode)

Code (software applications) referenced in the resource. 

Recommended practice is to identify the code with a URI identifying either the code or a landing page through which the application or applications are accessed.  

Subproperty of: References (dct:references)

### Related Dataset (srap:relatedDataset)

Dataset or datasets referenced in the described resource. 

Recommended practice is to identify a dataset with a URI identifying either the dataset or a landing page through which the dataset is accessed.  

Subproperty of: References (dct:references)


## Roles 

Creators and contributors of scholarly resources may have a wide variety of roles. SRAP does not provide a comprehensive role list; recommended practice is to use the [Library of Congress MARC Relator codes](https://www.loc.gov/marc/relators/relaterm.html) or some other controlled list to express roles such as the [RDA Unconstrained](https://www.rdaregistry.info/Elements/u/) properties. See below for examples of existing roles that may be used with thesis or with scientific articles. Lists are not mutually exclusive; for instance, a thesis may have a translator.

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
