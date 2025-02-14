# Dublin Core Metadata Initiative Scholarly Resources Application Profile (SRAP) 

**Authors:** <br/>
Karen Coyle, DCMI<br/>
Osma Suominen, National Library of Finland<br/> 
 	
**Collaborators**<br />
Jan Ashton, British Library<br/>
Juha Hakala<br/>
Alasdair MacDonald, University of Edinburgh


## Table of Contents

- [Introduction](#introduction)
- [Domain Model](#domain-model)
- [DCTAP for SRAP](#dctap-for-srap)
- [Basic bibliographic elements](#basic-bibliographic-elements)
- [Dates](#dates)
- [Identifiers](#identifiers)
- [Publication context and relationships](#publication-context-and-relationships)
- [Periodicals](#periodicals)
- [Books](#books)
- [Rights](#rights)
- [Accessibility](#accessibility)
- [Project context and funding](#project-context-and-funding)
- [Grants](#grants)
- [Persons](#persons)
- [Organizations](#organizations)
- [Appendix 1. Roles](#appendix-1-roles)
- [Appendix 2. Legacy representations for SRAP data](#appendix-2-legacy-representations-for-srap-data)

## Introduction

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, UKOLN SWAP, the Finnish guidelines, and the British Library’s ETHOS specification[^4]. This is not surprising since they share the same aim, support for description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by institutions of higher education. 

The SRAP application profile proposal is intended to be globally applicable. Many suggested properties are already in use by related communities. There are new properties for e.g. creator and contributor roles, but these have been adopted from MARC 21. SRAP draft contains also recommendations for SRAP-related semantic refinements to some existing Dublin Core Terms properties, in order to make them more suitable for use in the description of scholarly resources.  

The terms MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL used in the table below should be interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

## Domain model 

SRAP has a simple domain model which enumerates the key entities and describes in generic terms how they are related. 
<img src="https://github.com/dcmi/dc-srap/assets/1564129/272a2cbb-b292-48c3-b766-ed4239b45cc1" width="500" />

There is a basic bibliographic description for the scholarly work. Where appropriate, with SRAP one can define metadata elements that represent a serial or monographic resource in which the scholarly work is contained. There are also related descriptions of persons and organizations that can provide additional detail.

## DCTAP for SRAP

SRAP is expressed in a table format as a [Dublin Core Tabular Application Profile](https://www.dublincore.org/specifications/dctap/) (TAP). The TAP expresses the main elements of SRAP in a structured, machine actionable format that can be used for data creation and for basic data validation. The TAP includes details on value types of the properties, like "date" and "string", and has notes on usage. Refer to the TAP for specific information on properties used, values, and recommended value lists to use.

The following term prefixes are used in this document and in the TAP document:

* dct: http://purl.org/dc/terms/ 
* bibo: http://purl.org/ontology/bibo/
* foaf: http://xmlns.com/foaf/spec/
* schema: https://schema.org
* edtf: http://id.loc.gov/datatypes/edtf/

(TODO: embed DCTAP table here; possibly move this entire section later in the document)

## Basic Bibliographic Elements

These basic bibliographic description elements SHOULD be used to describe all kinds of resources including scholarly resources: 

> `dct:type`, `dct:language`, `dct:contributor`, `dct:creator`, `dct:publisher`, `dct:subject`, `dct:title`, `dct:format`, `dct:abstract`, `dct:tableOfContents`, `dct:description`

The type or genre of a scholarly resource, when known, SHOULD be indicated using the `dct:type` property whose value SHOULD be be an IRI from the [COAR Resource Type vocabulary](https://vocabularies.coar-repositories.org/resource_types/). Example values from the vocabulary include [journal article](http://purl.org/coar/resource_type/c_6501), [book part](http://purl.org/coar/resource_type/c_3248) and [master thesis](http://purl.org/coar/resource_type/c_bdcc).

The language of the resource, when known, SHOULD be indicated using the `dct:language` property. The language SHOULD be an IETF BCP 47 language tag. When the resource includes content in multiple languages, the `dct:language` property MAY be repeated in order to indicate all the languages.

The contributor, creator and publisher of the resource SHOULD be indicated using the `dct:contributor`, `dct:creator` and `dct:publisher` properties, respectively. These properties SHOULD be used with IRI or blank node resources that represent Person or Organization entities (see [Persons](#persons) and [Organizations](#organizations)). However, when only a name is known, simple literal strings MAY be used as values for these properties.

> NOTE: `dct:publisher` here is used when the resource being described is not contained in a larger resource. For example, a technical report would be described with `dct:publisher` at this level. For contained works, the containing resource (periodical or monograph) SHOULD be described with its publisher.

TBW: title, format, abstract, tableOfContents, description

## Dates

These date properties SHOULD be used to represent important dates in the life cycle of the resource:

> `dct:date`, `dct:issued`, `dct:modified`, `dct:dateAccepted`, `srap:embargoDateRange`, `srap:dateRetracted`

The `dct:date` property is generic and SHOULD NOT be used when more specific dates are known. The `dct:issued`, `dct:modified`, `dct:dateAccepted` and `srap:dateRetracted` properties SHOULD be used to indicate, respectively, the dates when the resource was issued, modified, accepted for publication and retracted.

The above mentioned dates SHOULD be in one of these standard ISO 8601 formats:

> `YYYY` | `YYYY-MM` | `YYYY-MM-DD`

If a resource has been placed under an embargo, during which its content is not available to the general public, the `srap:embargoDateRange` property SHOULD be used to indicate the date range under which the embargo is in place. The date range MUST be expressed using the [Extended Date/Time Format](https://www.loc.gov/standards/datetime/) (EDTF); more specifically, as an EDTF Level 1 Extended Interval, which permits open-ended intervals. 

### Embargo example

This example represents the embargo period for an article that is under embargo from an unspecified start date until December 31st, 2024:

```
ex:article srap:embargoDateRange "../2024-12-31"^^edtf:EDTF .
```

## Identifiers

These properties SHOULD be used to express standard identifiers of a scholarly work:

> `dct:identifier`, `bibo:isbn`, `schema:url`

TBW: more detailed guidance

## Publication context and relationships

Journal articles and chapters are usually contained within a larger publication. They may also be presented at conferences or other events. Scholarly resources may have relationships to other resources. This kind of contextual and relationship information is expressed using the following properties:

> `bibo:volume`, `bibo:issue`, `bibo:pageStart`, `bibo:pageEnd`, `dct:isPartOf`, `bibo:presentedAt`, `dct:bibliographicCitation`, `dct:relation`, `srap:versionType`

TBW: more detailed guidance (some bits from below could be used?)

> The start and end pages are also used to locate a resource that is part of a monographic publication, such as a book of essays or a conference publication with articles.
> When there is a preferred citation for the resource, it can be coded with the `dct:bibliographicCitation` property.
> Scholarly resources may be based on, or otherwise associated with, software applications and/or data sets that are also stored or deposited. For example, an article may be based on software experiments and the underlying data sets may be published separately. SRAP enables linking the resources with ...

## Periodicals

In SRAP, periodicals such as journals and series are seen as a special type (subclass) of a scholarly resouce. Thus, properties for describing resources in general can also be used to describe periodicals.

A periodical is often not the focus resource, but instead represents a container which the focus resource is part of (see [Publication context and relationships](#publication-context-and-relationships)). Periodicals SHOULD be described using these properties:

> `rdf:type`, `dct:title`, `dct:publisher`, `bibo:issn`, `bibo:eissn`

In RDF data, information that a resource is a periodical work SHOULD be designated using a `rdf:type` statement with the class `bibo:Journal` (for journals) or `bibo:Periodical` (for other types of periodicals than journals) as the value.

A periodical will typically have a title and publisher, which SHOULD be indicated using the `dct:title` and `dct:publisher` properties.

For identification of the periodical, the properties `bibo:eissn` (for electronic International Standard Serial Numbers, i.e., e-ISSN) and `bibo:issn` (for other types of ISSNs) SHOULD be used.

### Example periodical

This example represents the Current Problems in Cardiology journal:

```
ex:curr_probl_cardiol
    a bibo:Journal ;
    dct:title "Current problems in cardiology" ;
    bibo:issn "0146-2806" ;
    bibo:eissn "1535-6280" .
```

## Books

In SRAP, books are seen as a special type (subclass) of a scholarly resource. This includes other monographic publications like technical reports and conference proceedings. Properties for describing resources in general can also be used to describe books.

A book is often not the focus resource, but instead represents a container which the focus resource is part of. For example the focus resource may be a chapter that is part of a book (see [Publication context and relationships](#publication-context-and-relationships)).  Books SHOULD be described using these properties:

> `rdf:type`, `dct:contributor`, `dct:publisher`, `dct:date`, `bibo:isbn`

In RDF data, information that a resource is a monographic work SHOULD be designated using a `rdf:type` statement with the class `bibo:Book` as the value.

The `bibo:isbn` property SHOULD be used to represent the International Standard Book Number (ISBN) of a book.

## Rights

Many types of rights apply to scholarly resources. These SHOULD be represented using the following properties:

> `dct:accessRights`, `dct:license`, `dct:rights`, `dct:rightsHolder`

TBW: more detailed guidance

## Accessibility

Accessibility is an important aspect of scholarly resources. The accessibility features, hazards, and deficiencies of a resource SHOULD be indicated using the property:

> `srap:accessibilityStatement`

NOTE: This property corresponds to the MARC field [532 Accessibility Note](https://www.loc.gov/marc/bibliographic/bd532.html).

## Project context and funding

Scholarly resources are commonly created in the context of a project and/or with specific funding. These aspects SHOULD be indicated using the properties:

> `schema:funding`, `srap:project`

TBW: more detailed guidance

## Grants

A grant represents a financial or otherwise quantifiable allocation of resources, for example when a funding agency provides financial support for a research activity that then results in the publication of one or more scholarly articles. A grant SHOULD be described using the following properties:

> `rdf:type`, `srap:funder`, `dct:identifier`

In RDF data, information that a resource is a grant SHOULD be designated using a `rdf:type` statement with the class `srap:Grant` as the value.

The funder of the grant (for example the funding agency) SHOULD be indicated using the property `srap:funder`, which may also be repeated. The value can be either a literal value (the name of the funder) or a resource that represents an Organization. It can be an IRI from a registry such as [ISNI](https://isni.org/) or [Research Organization Registry](https://ror.org/) (ROR).

The grant number or other identifier or the grant SHOULD be indicated using the property `dct:identifier`. The value is a literal value, for example a plain number.

### Example grant

This example represents a grant awarded by the Lawrence Livermore Laboratory. The funder is indicated using both a literal value and an IRI from ROR.

```
ex:lll_grant
   a srap:Grant ;
	  srap:funder "Lawrence Livermore National Laboratory" ;
	  srap:funder <https://ror.org/041nk4h53> ;
	  dct:identifier "EP/P010288/1" .
```

## Persons

> `rdf:type`, `srap:role`, `schema:affiliation`, `foaf:name`, `dct:identifier`

TBW: more detailed guidance (bit from below could be used?)

> In scholarly publications there can be many named creators and contributors. Although the names themselves are useful for display and identification, they are not unambigous. For this reason individual persons often make use of identifiers, such as the ORCID. Another common identifying element is the affiliation of the person at the time the work was accepted. If relevant, the specific role played by the Person can be coded.
> In RDF data, information about a person can be contained within a graph with the class [Person](http://xmlns.com/foaf/spec/#term_Person).

## Organizations

> `rdf:type`, `srap:role`, `dct:identifier`, `foaf:name`

TBW: more detailed guidance (bit from below could be used?)

> In RDF data, information about an organization can be contained within a graph with the class [Organization](http://xmlns.com/foaf/spec/#term_Organization).

## Appendix 1. Roles
### Examples of roles for theses and dissertations

It is recommended that LC Relator entities be used for the `role` properties.

These are linked here to the Library of Congress relator properties:

* Academic supervisor
* [Dedicatee](http://id.loc.gov/vocabulary/relators/dte)
* [Degree committee member](http://id.loc.gov/vocabulary/relators/dgc)
* [Degree granting institution](http://id.loc.gov/vocabulary/relators/dgg)
* [Degree supervisor](http://id.loc.gov/vocabulary/relators/dgs)
* [Dissertant](http://id.loc.gov/vocabulary/relators/dis)
* [Opponent](http://id.loc.gov/vocabulary/relators/opn)
* [Praeses](http://id.loc.gov/vocabulary/relators/pra)
* [Respondent](http://id.loc.gov/vocabulary/relators/rsp)
* [Thesis advisor](http://id.loc.gov/vocabulary/relators/ths)

### Examples of roles for journal articles

* [Abridger](https://id.loc.gov/vocabulary/relators/abr)
* [Compiler](http://id.loc.gov/vocabulary/relators/com)
* [Editor](http://id.loc.gov/vocabulary/relators/edt)
* [Editor of compilation](http://id.loc.gov/vocabulary/relators/edc)
* [Funder](http://id.loc.gov/vocabulary/relators/fnd)
* [Honoree](http://id.loc.gov/vocabulary/relators/hnr)
* [Host institution](http://id.loc.gov/vocabulary/relators/his)
* [Organizer](http://id.loc.gov/vocabulary/relators/orm)
* [Reviewer](http://id.loc.gov/vocabulary/relators/rev)
* Reviser
* [Sponsor](http://id.loc.gov/vocabulary/relators/spn)
* [Translator](http://id.loc.gov/vocabulary/relators/trl)

## Appendix 2. Legacy representations for SRAP data

SRAP itself is defined using DCTAP tables, which express the SRAP data model. The tables define several shapes, corresponding to different types of entities, as well as their properties (data elements such as title and publication date). The underlying assumption is that the metadata for each entity can be represented in a structured format such as RDF, JSON or XML and the different entities can be represented independently of each other. This is not always possible when dealing with legacy systems that only provide a flat representation of document metadata fields and values. This appendix provides guidance on how to apply SRAP in such a legacy setting.

### Flat key-value representation of SRAP
Legacy systems should use properties defined in the SRAP, but in many cases will not be able to make use of the additional information that is provided by the shapes. An example:
```
rdf:type bibo:AcademicArticle ;
dct:title "COVID-19 and multiorgan response" ;
dct:creator "Sevim Zaim" ;
dct:creator "Jun Heng Chong" ;
dct:creator "Vissagan Sankaranarayanan" ;
dct:creator "Amer Harky" ;
dct:issued "2020" ;
dct:identifier <https://doi.org/10.1016/j.cpcardiol.2020.100618> ;
bibo:volume "45" ;
bibo:issue "8" ;
bibo:pageStart "100618" ;
dct:isPartOf "Current problems in cardiology" .
```
This example is less expressive than the capabiities when using a non-flat metadata model. In particular, the flat model cannot provide identifiers or roles for the creators; it cannot include the affiliation of the authors; it cannot specify whether the containing resource (the value of dct:isPartOf) is a journal or a monograph. 

________________

[^1]: http://www.ukoln.ac.uk/repositories/digirep/index/Scholarly_Works_Application_Profile

[^2]: http://www.ariadne.ac.uk/issue/50/allinson-et-al/

[^3]: https://www.kiwi.fi/display/Julkaisuarkistopalvelut/Metadatasuositus+julkaisuarkistojen+tekstiaineistolle

[^4]: http://ethostoolkit.cranfield.ac.uk/tiki-index.php?page=The+EThOS+UKETD_DC+application+profile

[^5]: https://github.com/dcmi/pids_in_dc 

[^6]: http://id.loc.gov/vocabulary/relators.html

[^7]: https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/

[^8]: http://purl.org/coar/resource_type
