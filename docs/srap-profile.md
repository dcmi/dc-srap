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
<img src="https://github.com/dcmi/dc-srap/assets/1564129/2d88d6dd-79c2-4559-aadd-dbf3d9bb2d14" width="500">

> NOTE: Metadata elements needed for description of research datasets are not included in this version of the SRAP profile. Research datasets require complex and domain specific metadata (see for instance DDI, https://ddialliance.org/, for metadata specification intended for social science datasets). A future version of SRAP may be extended to cover also some or all domains of research data. 

## DCTAP for SRAP

SRAP is expressed in a table format as a [Dublin Core Tabular Application Profile](https://www.dublincore.org/specifications/dctap/) (TAP). The TAP expresses the main elements of SRAP in a structured, machine actionable format that can be used e.g. for basic data validation. It includes details on value types, like "date" and "string", and notes on usage.

The remainder of this document contains more detailed guidance and examples for how to apply SRAP in specific circumstances. 

The following term prefixes are used in this document and in the DCTAP document:

* dct: http://purl.org/dc/terms/ 
* BIBO: https://dcmi.github.io/bibo/
* [needs to be completed]

## Basic bibliographic description

The basic bibliographic description uses these Dublin Core elements:

[type](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/type)	|	[contributor](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor) | [creator](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor)	|	[language](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/language) 	|	[publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher)	|	[subject](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher)	|	[title](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title)	|	[format](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/format)	|

> NOTE: For `type` the recommended practice in SRAP is to use the COAR Controlled Vocabulary for Resource Type Genres[^8], which allows precise description of the type with terms like _doctoral thesis_, _master thesis_ and _bachelor thesis_ as well as _journal article_ and _research report_. 

> NOTE: `publisher` here is used when the resource being described is not contained in a larger resource. For example, a technical report would be described with `publisher` at this level. For contained works, the containing resource (periodical or monograph) is usually described with its publisher.

### Person and Organization
Creators and contributors can be persons or organizations, which can be described in a text string. Where there is more information that can be provided, SRAP has two structures call "shapes" for that information.

**Person shape**

Person shape has these properties for the description of a person:

[name](http://xmlns.com/foaf/spec/#term_name) | [identifier](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/identifier) | [affiliation](https://schema.org/affiliation)

**Organization shape**

Organizations can be described with:

[name](http://xmlns.com/foaf/spec/#term_name) | [identifier](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/identifier)

## Status and dates

SRAP makes it possible to express the status of a scholarly in a publishing workflow in multiple ways. The Publication Status element indicates the current status, while date fields can be used to express the date of important events in the lifecycle of the resource. For publication status the recommended practice is to use a publication status value from the [OpenAIRE Publication Version vocabulary](https://guidelines.openaire.eu/en/latest/literature/field_publicationversion.html)

It is expected that dates will be in one of these formats:

> `yyyy`	|	`mm/yyyy`	|	`dd/mm/yyyy`

These date properties are from the Dublin Core Terms:

[date published](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/date)	|	[date issued](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/issued)	|	[date modified](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/modified)	|	[date accepted](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/dateAccepted)

These additional date properties are being defined for SRAP:

[publication status](srap:publicationStatus) 	|	[embargo date range](srap:embargoDateRange)	|	[date retracted](srap:dateRetracted)

## Additional Context

### Presented at
SRAP is defining a property, [`presented at`](srap:presentedAt) for the conference, workshop, shareholder meeting etc. where the resource was presented. This may be the conference name or, preferably, a URI that identifies the event.

### Bibliographic Citation (dct:bibliographicCitation)

When there is a preferred citation for the resource, it can be coded with the Dublin Core property for [bibliographic citation](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/bibliographicCitation).

### Related code and datasets

Scholarly resources may be based on, or otherwise associated with, software applications and/or data sets that are also stored or deposited. For example, an article may be based on software experiments and the underlying data sets may be published separately. SRAP enables linking the resources to [related code](srap:relatedCode) and [data sets](srap:relatedDataset).

## Containing Work

Many scholarly resources are published as parts of journals, conference proceedings or other types of collective works. The relationship between the article and the journal or monograph containing it should be represented using the property [isPartOf](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/isPartOf) to link the resource being described to its containing work. 

The value of `isPartOf` should preferably be specific information about the periodical or monographic publication in which the resource is located. If it isn't possible to be specific, a simple text string can be used. If more detailed information is available the structures for Periodical and Monographic Work will be used.

### Periodical

A scholarly article may be published in a journal or other periodical. The periodical will generally have

[title](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title) |  [publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher) 

For identification of the periodical, these standard numbers should be used:

[ISSN](https://dcmi.github.io/bibo/#:issn)	|	[EISSN](https://dcmi.github.io/bibo/#:eissn)

The periodical may also use numbered volumes and issues as well as page numbers. These should be represented using the following properties:

[volume](https://dcmi.github.io/bibo/#:volume)	|	 [issue](https://dcmi.github.io/bibo/#:issue)	|	[pageStart](https://dcmi.github.io/bibo/#:pageStart)	|	[pageEnd](https://dcmi.github.io/bibo/#:pageEnd) 

### Monographic work
This is used when the focus resource is a chapter or section in a monographic work. This includes conference proceedings. 

[title](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title)   |    [publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher)  |   [contributor](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor)   |   [date published](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/date)


## Rights

Many types of rights apply to scholarly resources. SRAP allows expressing the rights using metadata elements from Dublin Core Terms as well as a new, proposed element for indicating the Rights Holder.

[Access rights](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/accessRights)    |   [License](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/license)   |   [Rights](Recommended practice is to use the COAR (Confederation of Open Access Repositories) [vocabulary of access] rights](http://vocabularies.coar-repositories.org/documentation/rghts/).)   | [Rights holder](Recommended practice is to use the COAR (Confederation of Open Access Repositories) [vocabulary of access] rights](http://vocabularies.coar-repositories.org/documentation/rightsHolder/).)

> NOTE:  Recommended practice for terms for access rights is to use the COAR (Confederation of Open Access Repositories) [vocabulary of access] rights](http://vocabularies.coar-repositories.org/documentation/access_rights/). However, either of the rights fields can be either a text or a link to a document that describes the rights.

## Accessibility

Accessibility is an important aspect of scholarly resources. SRAP proposes a new element for indicating the accessibility of a resource with a statement that defines accessibility options.

[Accessibility Statement](srap:accessibility)

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
