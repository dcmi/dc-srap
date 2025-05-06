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
- [DCTAP for SRAP](#dctap)
- [Scholarly Resource Shape](#scholarly-resource-shape)
  - [Primary bibliographic elements](#primary-bibliographic-elements)
  - [Description properties](#description-properties)
  - [Linking properties](#linking-properties)
  - [Date and version properties](#date-and-version-properties)
  - [Identifiers](#identifiers)
  - [Enumeration](#enumeration)
  - [Rights](#rights)
  - [Accessibility](#accessibility)
  - [Project and funding](#project-and-funding)
- [Person shape](#person-shape)
- [Organization shape](#organization-shape)
- [Periodical shape](#periodical-shape)
- [Book shape](#book-shape)
- [Grant shape](#grant-shape)
- [Extending SRAP](#extending-srap)
- [Examples of SRAP usage](#examples-of-srap-usage)
- [Appendix 1. Roles](#appendix-1-roles)
- [Appendix 2. Legacy representations for SRAP data](#appendix-2-legacy-representations-for-srap-data)

## Introduction

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms, supplemented with some terms from other vocabularies maintained by the Dublin Core Metadata Initiative. This proposal is informed by a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, the RIOXX application profile[^4], the Finnish guidelines, and the British Library’s ETHOS specification[^5]. This is not surprising since they share the same aim, support for description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by institutions of higher education. 

The SRAP application profile proposal is intended to be globally applicable. Many suggested properties are already in use by related communities. There are new properties for e.g. creator and contributor roles, but these have been adopted from MARC 21. SRAP draft contains also recommendations for SRAP-related semantic refinements to some existing Dublin Core Terms properties, in order to make them more suitable for use in the description of scholarly resources.  

The terms MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL used in the table below should be interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

## Domain model 

SRAP's domain model includes these entities and how they are related. 

<img src="https://github.com/user-attachments/assets/9abb9952-7e65-4913-8a29-bf1a74d99ace" width="600" />

The model can be used for stand-alone documents, like books, theses, technical reports, and for documents that are contained within larger publications, such as journal articles and book chapters. There is a required bibliographic description of the scholarly work. Where appropriate, one can encode metadata elements that represent a serial or monographic resource in which the scholarly work is contained. Persons, organizations, and grants are also resources that may be needed to describe the scholarly work.

## DCTAP 

SRAP is expressed in a table format as a [Dublin Core Tabular Application Profile](https://www.dublincore.org/specifications/dctap/) (TAP). The TAP expresses the above elements of SRAP in a structured, machine actionable format that can be used for data creation and for basic data validation. The TAP includes details on value types of the properties, like "date" and "string", and has notes on usage. Refer to the TAP for specific information on properties used, values, and recommended value lists to use.

In the DCTAP, each of the entities of the domain model are represented as "shapes". Each shape has associated properties and the rules that govern the creation and use of the property.

The following term prefixes are used in this document and in the TAP document:

* dct: `http://purl.org/dc/terms/`
* bibo: `http://purl.org/ontology/bibo/`
* srap: placeholder namespace for new elements proposed for BIBO and/or DCTerms
* ex: `http://example.com/` (placeholder namespace for example resources)

NOTE: The selection of properties used in SRAP has been limited to DC Terms and BIBO properties. Where appropriate properties were not found in those vocabularies the prefix `srap:` is used. These latter properties will be discussed with the DCMI Usage Board to find or create the needed properties.

## Scholarly resource shape
The Scholarly resource shape is the describes the focus resource. This resource may be a stand-alone document, such as a thesis, a technical report, or a book. It may be instead a resource that is located within another resource, such as a book chapter within a book, or a journal article within a journal.

### Primary Bibliographic Elements

The basic bibliographic elements are available to be used to describe stand-alone and contained works, with two exceptions: the use of `dct:publisher` and `dct:partOf`. These will be explained below. 

These basic bibliographic description elements SHOULD be used to describe the scholarly resource: 

> `dct:type`, `dct:language`, `dct:contributor`, `dct:creator`, `dct:publisher`, `dct:subject`, `dct:title`, `dct:format`, `dct:abstract`, `dct:tableOfContents`, `dct:description`

**dct:type**

The type or genre of a scholarly resource, when known, SHOULD be indicated using the `dct:type` property whose value SHOULD be be an IRI from the [COAR Resource Type vocabulary](https://vocabularies.coar-repositories.org/resource_types/). Example values from the vocabulary include [journal article](http://purl.org/coar/resource_type/c_6501), [book part](http://purl.org/coar/resource_type/c_3248) and [master thesis](http://purl.org/coar/resource_type/c_bdcc).

**dct:language**

The language of the resource, when known, SHOULD be indicated using the `dct:language` property. The language SHOULD be an IETF BCP 47 language tag. When the resource includes content in multiple languages, the `dct:language` property MAY be repeated in order to indicate all the languages.

**dct:creator**

A repeatable property for the person or organization that is primarily responsible for the creation of the resource. It is RECOMMENDED that the value of this property is a [`Person shape`](#person-shape) or an [`Organization shape`](#organization-shape). Alternatively, the value MAY be the name of the creator as a literal value.

**dct:contributor**

A repeatable property for the person or organization that has secondary or non-specific responsibility for the creation of the resource. It is RECOMMENDED that the value of this property is a [`Person shape`](#person-shape) or an [`Organization shape`](#organization-shape). Alternatively, the value MAY be the name of the contributor as a literal value.

**dct:publisher**

A property for the person or organization that is responsible for the publication of the resource. It is RECOMMENDED that the value of this property is an [`Organization shape`](#organization-shape). Alternatively, the value MAY be the name of the publisher as a literal value.

> NOTE: `dct:publisher` here is used when the resource being described is not contained in a larger resource. For example, a technical report would be described with `dct:publisher` at this level. For contained works, the containing resource (periodical or monograph) SHOULD be described with its publisher.

**dct:title**

The title or name of the resource, which is usually available on the resource itself, SHOULD be recorded in `dct:title`.

**dct:format**

The physical format of the resource SHOULD be indicated in `dct:format`. It is recommended that a standard list, such as the Internet Media Types ([MIME](https://www.iana.org/assignments/media-types/media-types.xhtml)) be used.

**dct:subject**

`dct:subject` MAY be used to add keywords, subject terms, or identifiers of terms from subject vocabulary lists.

### Description properties
These description properties MAY be used to provide additional information about the scholarly work.

**dct:abstract**

The `dct:abstract` is a resource summary and is often found in the content of the resource itself. It MAY be included in the SRAP metadata.

**dct:tableOfContents**

The `dct:tableOfContents` is a listing of the significant sections within the resource. It MAY be included for standand-alone resources that have relevant section headings.

**dct:description**

The `dct:description` MAY be used for any general description of the resource. This can be an account of the contents of the resource or any other description or context that may aid in searching or selection of the resource.

**bibo:presentedAt**

`bibo:presentedAt` MAY be used to record information about the conference or meeting where the scholarly work was presented. The value can be the name of the event or an IRI identifying the event. Describing the event itself is outside the scope of SRAP.

**dct:bibliographicCitation**

`dct:bibliographicCitation` MAY be used to provide a preferred citation for the scholarly work.

### Linking properties

**dct:relation**

Scholarly resources may be based on, or otherwise associated with, software applications and/or data sets that are also stored or deposited. For example, an article may be based on software experiments and the underlying data sets may be published separately. SRAP enables linking the resources with `dct:relation`. Preferably the related resource will have an identifier that can be used to make this link.

**dct:isPartOf**

Journal articles and book chapters may be contained within a larger publication that is either published serially or as a monograph. `dct:isPartOf` will have as its value the periodical shape or book shape for the containing publication. 

### Date and version properties

These date properties SHOULD be used to represent important dates in the life cycle of the resource:

> `dct:date`, `dct:issued`, `dct:modified`, `dct:dateAccepted`, `srap:dateRetracted`, `srap:embargoDateRange`, `srap:versionType`

All available and relevant dates SHOULD be used. The dates SHOULD be in one of these standard ISO 8601 formats:

> `YYYY` | `YYYY-MM` | `YYYY-MM-DD`

**dct:date**

The `dct:date` property is generic and SHOULD NOT be used when more specific dates are known. 

**dct:issued**

`dct:issued`, SHOULD be used to indicate when the resource was issued.

**dct:modified**

`dct:modified` SHOULD be used to record when the resource was modified or updated.

**dct:dateAccepted**

`dct:dateAccepted` SHOULD be used for the date that the resource was accepted for publication.

**srap:dateRetracted**

`srap:dateRetracted` properties SHOULD be used to record the date on which the resource was retracted from publication.

**srap:versionType**

srap:versionType MAY be used to encode the version of a work. It is recommended to use the [COAR vocabulary](http://purl.org/coar/version/) for terms denoting the version in the lifecycle of a scholarly work. 

**srap:embargoDateRange**

If a resource has been placed under an embargo, during which its content is not available to the general public, the `srap:embargoDateRange` property SHOULD be used to indicate the date range under which the embargo is in place. The date range MUST be expressed using the [Extended Date/Time Format](https://www.loc.gov/standards/datetime/) (EDTF); more specifically, as an EDTF Level 1 Extended Interval, which permits open-ended intervals. In RDF data, the data type `edtf:EDTF` SHOULD be used to indicate that the value conforms to EDTF.

> **Embargo example**

> This example represents the embargo period for an article that is under embargo from an unspecified start date until December 31st, 2024:

> ```
> ex:article srap:embargoDateRange "../2024-12-31"^^edtf:EDTF .
> ```

### Identifiers

These properties SHOULD be used to express standard identifiers of a scholarly work:

> `dct:identifier`, `bibo:isbn`, `srap:url`

**dct:identifier**

`dct:identifier` is a non-specific property for identifiers and MAY be used in the `SRAPResource` shape. It is also available in the `Person` shape, the `Organization` shape and the `Grant` shape. Full IRIs SHOULD be used as values of `dct:identifier` for those identifiers that have them, such as the DOI and the ORCID. 

**bibo:isbn**

When the focus resource is a monograph that has been assigned an ISBN, the `bibo:isbn` property SHOULD be used for that identifier. 

**srap:url**

This property SHOULD be used to provide the online download location for the resource.

### Enumeration

The scholarly work shape includes properties that define and locate the work in the context of monograph or periodical in which the focus work is contained.  These are:
> `bibo:volume`, `bibo:issue`, `bibo:pageStart`, `bibo:pageEnd` 

These properties SHOULD be used to locate the scholarly work within a containing publication, which is described in a Periodical shape or a Book shape. They are assumed to be literals. 

**bibo:volume**

If available, the designated volume in which the scholarly work is published. This SHOULD be used for scholarly works that have been published in a journal.

**bibo:issue**

The periodical issue in which the scholarly work was published.

**bibo:pageStart**

The page number where the scholarly work begins in the periodical or book in which it is published. 

**bibo:pageEnd**

The page number where the scholarly work end in the periodical or book in which it is published.

### Rights

Many types of rights apply to scholarly resources. These SHOULD be represented using the following properties:

> `dct:accessRights`, `dct:license`, `dct:rights`, `dct:rightsHolder`

All these properties can be given either a literal value or an IRI identifying a document, for example a [Rights Statement](https://rightsstatements.org/) or a Creative Commons license document.

**dct:accessRights**

The `dct:accessRights` property MAY be used to provide a statement about who can access the resource or an indication of its security status (for example public or private). 

**dct:license**

The `dct:license` property MAY be used to provide a statement about the license under which the resource is available. 

**dct:rights**

`dct:rights` is the super property to the two above, meaning that it is more general and MAY be used when a more specific rights type is not available. 

**dct:rightsHolder**

The `dct:rightsHolder` property MAY be used to indicate a person or organization owning or managing rights over the resource. Its value can be either a literal value or an IRI or Bnode describing the rights holder using a Person or Organization shape.

### Accessibility

Accessibility is an important aspect of scholarly resources. The accessibility features, hazards, and deficiencies of a resource SHOULD be indicated using the property:

> `srap:accessibilityStatement`

**srap:accessibilityStatement**

This property approximately corresponds to the MARC field [532 Accessibility Note](https://www.loc.gov/marc/bibliographic/bd532.html) but is more free form. For information on how to express more detailed accessibility information, see the section [Extending SRAP](#extending-srap).

### Project and funding

> `srap:project`, `srap:funding`, `srap:scholarlyUnit`

**srap:project**

The `srap:project` property MAY be used to indicate the project(s) in which the resource was created. Its value should be an IRI identifying the project, for example a [Research Activity Identifier](https://raid.org/) (RAiD). The specifics of how to describe projects is outside the scope of SRAP.

**srap:funding**

The `srap:funding` property MAY be used to indicate the funding source(s) that supported the creation of the resource. Its value SHOULD be a Grant shape (see [Grant shape](#grant-shape)).

**srap:scholarlyUnit**

The value of the `srap:scholarlyUnit` property SHOULD be an Organization shape. The property is distinct from organizations with which an individual person has an affiliation or the role of an academic institution in awarding a qualification.

## Person shape

> `rdf:type`, `srap:role`, `srap:affiliation`, `srap:name`, `dct:identifier`

In scholarly publications there can be many named creators and contributors. Although the names themselves are useful for display and identification, they are not unambigous. For this reason, metadata often make use of identifiers, such as the ORCID for individual persons. Another common identifying element is the affiliation of the person at the time the work was accepted. If relevant, the specific role played by the Person can be coded. (See Appendix 1)

**rdf:type**

`rdf:type` SHOULD be included with the value `srap:Person`. 

**srap:role**

`srap:role` SHOULD indicate the role that the person played in relation to the scholarly work. Preferably the role should be a URI taken from the [Library of Congress relators](http://id.loc.gov/vocabulary/relators/) list, but it may also be a simple string.

**srap:affiliation**

Primarily for authors and co-authors, this is the affiliation of the person at the time the work was accepted or published.

**srap:name**

The name of the person; usually a form intended for display.

**dct:identifier**

A unique identifier for the person. Some examples of common identifiers are ORCIDs, VIAF URIs, and Wikidata identifiers.

## Organization shape

> `rdf:type`, `srap:role`, `dct:identifier`, `srap:name`

Information about organizations MAY be included in SRAP metadata in various contexts: for the publisher of the book or periodical, for the rights holder, for the creator, and others. In each case the organization shape MAY be used as the value of those properties. 

**rdf:type**

When used in RDF data the organization shape SHOULD have an `rdf:type` property with the designation as a class "Organization".

**srap:role**

`srap:role` SHOULD indicate the role that the organization played in relation to the scholarly work. Preferably the role should be a URI taken from the [Library of Congress relators](http://id.loc.gov/vocabulary/relators/) list, but it may also be a simple string.

**srap:name**

The name of the organization; usually a form intended for display.

**dct:identifier**

A unique identifier for the organization. Some examples of common identifiers are VIAF URIs, and Wikidata identifiers.

## Grant shape

A grant represents a financial or otherwise quantifiable allocation of resources, for example when a funding agency provides financial support for a research activity that then results in the publication of one or more scholarly articles. A grant SHOULD be described using the following properties:

> `rdf:type`, `srap:funder`, `dct:identifier`

In RDF data, information that a resource is a grant SHOULD be designated using a `rdf:type` statement with the class `srap:Grant` as the value.

The funder of the grant (for example the funding agency) SHOULD be indicated using the property `srap:funder`, which may also be repeated. The value can be either a literal value (the name of the funder) or a resource that represents an Organization. It can be an IRI from a registry such as [ISNI](https://isni.org/) or [Research Organization Registry](https://ror.org/) (ROR).

The grant number or other identifier or the grant SHOULD be indicated using the property `dct:identifier`. The value is a literal value, for example a plain number.

**Example grant shape**

This example represents a grant awarded by the Lawrence Livermore Laboratory. The funder is indicated using both a literal value and an IRI from ROR.

```
ex:lll_grant
   a srap:Grant ;
	  srap:funder "Lawrence Livermore National Laboratory" ;
	  srap:funder <https://ror.org/041nk4h53> ;
	  dct:identifier "EP/P010288/1" .
```


## Periodical shape

The periodical shape represents a container of which the focus resource (usually a published journal article) is part. The periodical shape describes only the periodical publication itself; the specific information on on the volume and issue number of the scholarly work are provided scholarly work shape. Periodicals SHOULD be described using these properties:

> `rdf:type`, `dct:title`, `dct:publisher`, `bibo:issn`, `bibo:eissn`

**rdf:type**

In RDF data, information that a resource is a periodical work SHOULD be included in the periodical shape using a `rdf:type` statement with the class `bibo:Journal` (for journals) or `bibo:Periodical` (for other types of periodicals than journals) as the value.

**dct:title**

The title of the periodical. 

**dct:publisher**

The publisher of the periodical.

**bibo:issn, bibo:eissn**

For identification of the periodical, the properties `bibo:eissn` (for electronic International Standard Serial Numbers, i.e., e-ISSN) and `bibo:issn` (for other types of ISSNs) SHOULD be used.

> **Example periodical**

> This example represents the Current Problems in Cardiology journal:

> ```
> ex:curr_probl_cardiol
>     a bibo:Journal ;
>     dct:title "Current problems in cardiology" ;
>     bibo:issn "0146-2806" ;
>     bibo:eissn "1535-6280" .
> ```

## Book shape

The book shape can describe books and other monographic resources that contain the scholarly work. This shape is only used when the work described in the Scholarly Resource shape is a unit, such as a chapter, of a book. Scholarly resources that are themselves monographs are described in the Scholarly Resource Shape. Books that are containers for scholarly works SHOULD be described using these properties:

> `rdf:type`, `dct:contributor`, `dct:publisher`, `dct:date`, `bibo:isbn`

**rdf:type**

In RDF data, information that the shape represents a monographic work SHOULD be designated using a `rdf:type` statement with the class `bibo:Book` as the value.

**bibo:isbn**

The `bibo:isbn` property SHOULD be used to represent the International Standard Book Number (ISBN) of a book.

**dct:publisher**

The publisher of the book or monograph.

**dct:date**

The publication date of the book or monograph.

## Extending SRAP

SRAP is designed to be open and extensible. It is possible to use properties other than those recommended in SRAP, including properties from other namespaces such as [Schema.org](https://schema.org/).

For describing the accessibility of a scholarly resource in a structured form, you can use the [Schema.org Accessibility Properties for Discoverability Vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/).

## Examples of SRAP usage

These examples illustrate full documents described using SRAP properties.

* Theses
  * [Simple doctoral thesis](examples/thesis-simple.md)
  * [Doctoral thesis with opponent and series](examples/thesis-detailed.md)
* [Conference paper](examples/conference-paper.md)
* [Journal article](examples/journal-article.md)
* [Preprint with dataset](examples/preprint-with-dataset.md)
* [Book](examples/book.md)
* [Book chapter](examples/book-chapter.md)

## Appendix 1. Roles
### Examples of roles for theses and dissertations

It is recommended that LC Relator entities be used for the `role` properties.

These are linked here to the Library of Congress relator properties:

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

[^4]: https://rioxx.net/profiles/

[^5]: http://ethostoolkit.cranfield.ac.uk/tiki-index.php?page=The+EThOS+UKETD_DC+application+profile

[^5]: https://github.com/dcmi/pids_in_dc 

[^6]: http://id.loc.gov/vocabulary/relators.html

[^7]: https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/

[^8]: http://purl.org/coar/resource_type
