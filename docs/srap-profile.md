# Dublin Core Metadata Initiative Scholarly Resources Application Profile (SRAP) 

**Authors:** <br/>
Karen Coyle, DCMI<br/>
	Osma Suominen, National Library of Finland<br/> 
 	Juha hakala, National Library of Finland<br/>
**Collaborators**<br />
Jan Ashton, British Library<br/>
Alasdair MacDonald, University of Edinburgh

May 24, 2024

## Table of Contents

- [Introduction](#introduction)
- [Domain Model](#domain-model)
- [DCTAP for SRAP](#dctap-for-srap)
- [Scholarly Work Description](#scholarly-work-description)
- [Academic Context](#academic-context)
- [Extended Description for Agents and Containing Resources](#extended-description-for-agents-and-containing-resources)
- [Appendix 1. Roles](#appendix-1-roles)
- [Appendix 2. Legacy representations for SRAP data](#appendix-2-legacy-representations-for-srap-data)

## Introduction

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations or scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, UKOLN SWAP, the Finnish guidelines, and the British Library’s ETHOS specification[^4]. This is not surprising since they share the same aim, support for description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by institutions of higher education. 

The SRAP application profile proposal is intended to be globally applicable. Many suggested properties are already in use by related communities. There are new properties for e.g. creator and contributor roles, but these have been adopted from MARC 21. SRAP draft contains also recommendations for SRAP-related semantic refinements to some existing Dublin Core Terms properties, in order to make them more suitable for use in the description of scholarly resources.  

## Domain model 

SRAP has a simple domain model which enumerates the key entities and describes in generic terms how they are related. 
<img src="https://github.com/dcmi/dc-srap/assets/1564129/272a2cbb-b292-48c3-b766-ed4239b45cc1" width="500" />

There is a basic bibliographic description for the scholarly work. Where appropriate, with SRAP one can define metadata elements that represent a serial or monographic resource in which the scholarly work is contained. There are also related descriptions of persons and organizations that can provide additional detail.

## DCTAP for SRAP

SRAP is expressed in a table format as a [Dublin Core Tabular Application Profile](https://www.dublincore.org/specifications/dctap/) (TAP). The TAP expresses the main elements of SRAP in a structured, machine actionable format that can be used for data creation and for basic data validation. The TAP includes details on value types of the properties, like "date" and "string", and has notes on usage. Refer to the TAP for specific information on properties used, values, and recommended value lists to use.

The following term prefixes are used in this document and in the DCTAP document:

* dct: http://purl.org/dc/terms/ 
* BIBO: http://purl.org/ontology/bibo/
* FOAF: http://xmlns.com/foaf/spec/
* schema: https://schema.org

# Scholarly Work Description
## Basic Bibliographic Elements

These basic bibliographic description are commonly used to describe resources but are not limited to scholarly works.

[type](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/type)	|	[contributor](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor) | [creator](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor)	|	[language](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/language) 	|	[publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher)	|	[date published](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/date)	|	[subject](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher)	|	[title](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title)	|	[format](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/format)	|

> NOTE: `publisher` here is used when the resource being described is not contained in a larger resource. For example, a technical report would be described with `publisher` at this level. For contained works, the containing resource (periodical or monograph) is usually described with its publisher.
> NOTE: `Creator` and `Contributor` may be simple strings. For more detailed description options, see below: Extended Description.

### Descriptions

Further description can be coded in these properties:

[Abstract](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/abstract)	|	[Table of contents](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/tableOfContents)	|	[Description](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/description)

### Rights

Many types of rights apply to scholarly resources. SRAP allows expressing the rights using metadata elements from Dublin Core Terms as well as a new, proposed element for indicating the Rights Holder.

[Access rights](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/accessRights)    |   [License](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/license)   |   [Rights](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/rights)   | [Rights holder](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/rightsHolder)

### Accessibility statement

Accessibility is an important aspect of scholarly resources. SRAP proposes a new element for indicating the accessibility of a resource with a statement that defines accessibility options.

[Accessibility Statement](http://example.com/srap/accessibility)

## Academic context
### Dates

It is expected that dates will be in one of these standard formats:

> `YYYY`	|	`YYYY-MM`	|	`YYYY-MM-DD`

These date properties are from the Dublin Core Terms:

[date issued](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/issued)	|	[date modified](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/modified)	|	[date accepted](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/dateAccepted)

These additional date properties are being defined for SRAP:

[embargo date range](http://example.com/srap/embargoDateRange)	|	[date retracted](http://example.com/srap/dateRetracted)

### Part of
Journal articles and chapters usually are contained within a larger publication. This is encoded with the following property:

[Part of](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/partOf)

> NOTE: To provide fuller information on the periodical or monograph containing the scholarly work, see below: Extended Description

### Pages and issue information

A journal article is published within a periodical. It is a general practice to identify and locate the article within a specific periodical publication by noting the journal volume and issue, if used, and the pages occupied by the article within that. These should be represented using the following properties:

 [volume](https://dcmi.github.io/bibo/#:volume)	|	 [issue](https://dcmi.github.io/bibo/#:issue)	|	[pageStart](https://dcmi.github.io/bibo/#:pageStart)	|	[pageEnd](https://dcmi.github.io/bibo/#:pageEnd) 

 The start and end pages are also used to locate a resource that is part of a monographic publication, such as a book of essays or a conference publication with articles.

### Bibliographic Citation

When there is a preferred citation for the resource, it can be coded with the Dublin Core property:

[bibliographic citation](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/bibliographicCitation).

### Related code and datasets

Scholarly resources may be based on, or otherwise associated with, software applications and/or data sets that are also stored or deposited. For example, an article may be based on software experiments and the underlying data sets may be published separately. SRAP enables linking the resources with: 

[related code](http://example.com/srap/relatedCode)	|	 [data sets](http://example.com/srap/relatedDataset)

Scholarly resources are created in an academic context, for example a specific institution, faculty and department and/or a project funded by a specific grant. Also, authors and contributors can be affiliated with academic or other institutions. SRAP enables expressing the academic context of scholarly resources and the affiliation of related individuals.

### Grant Number

An alpha-numeric string identifying the contract, project or funding grant under which the scholarly resource was created. 

[Grant number](http://example.com/srap/grantNumber)	

## Extended Description for Agents and Containing Resources

The above properties represent a flat data model. Where it is desirable to make more than one statement about a resource, like a person or a journal, SRAP supports data structures that can carry these statements. These extended shapes also allow one to indicate whether a creator is a person or an organization, and whether the resource that is indicated using `isPartOf` is a journal or a monographic publication. Each of these can point to the following extended shapes:

dct:creator -> Person, Organization

dct:contributor -> Person, Organization

dct:isPartOf -> Periodical, Book

> NOTE: See Appendix 1 for a short list of common roles. It is recommended that LC Relator entities be used for the `role` properties.

### Person

In scholarly publications there can be many named creators and contributors. Although the names themselves are useful for display and identification, they are not unambigous. For this reason individual persons often make use of identifiers, such as the ORCID. Another common identifying element is the affiliation of the person at the time the work was accepted. If relevant, the specific role played by the Person can be coded.

#### Class

In RDF data, information about a person can be contained within a graph with the class [Person](http://xmlns.com/foaf/spec/#term_Person).

#### Properties

[Name](http://xmlns.com/foaf/spec/#term_name) | [Identifier](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/identifier) | [Affiliation](https://schema.org/affiliation) | [Role](http://example.com/srap/role)

### Organization

#### Class

In RDF data, information about an organization can be contained within a graph with the class [Organization](http://xmlns.com/foaf/spec/#term_Organization).

#### Properties

[Name](http://xmlns.com/foaf/spec/#term_name) | [Identifier](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/identifier) | [Role](http://example.com/srap/role)

### Periodical
Journals and other periodical publications are further described with these properties.
#### Class
In RDF data, information about a periodical can be contained within a graph with one of these classes:
	[Periodical](https://dcmi.github.io/bibo/#:Periodical) |  [Journal](https://dcmi.github.io/bibo/#:Journal)

#### Properties

A scholarly article may be published in a journal or other periodical. The periodical will generally have a [title](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title) and a [publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher). For identification of the periodical, these standard numbers should be used:

[ISSN](https://dcmi.github.io/bibo/#:issn)	|	[EISSN](https://dcmi.github.io/bibo/#:eissn)

### Monographic work
This is used when the focus resource is a chapter or section in a monographic work. This includes conference proceedings. 

#### Class
In RDF data, information that this is a monographic work is designated with the class:
	[Book](https://dcmi.github.io/bibo/#:Book) 

This includes other monographic publications like technical reports and conference proceedings.
#### Properties
[title](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title)   |    [publisher](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher)  |   [contributor](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor)   |   [date published](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/date)

## Appendix 1. Roles
### Examples of roles for theses and dissertations

These are linked here to the Library of Congress relator properties>

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
dct.creator "Sevim Zaim" ;
dct.creator "Jun Heng Chong" ;
dct.creator "Vissagan Sankaranarayanan" ;
dct.creator "Amer Harky" ;
dct:.issued "2020" ;
dct:identifier <https://doi.org/10.1016/j.cpcardiol.2020.100618> ;
bibo:volume "45" ;
bibo:issue "8" ;
bibo:pageStart "100618" ;
dct:isPartOf "Current problems in cardiology" .
```
This example is less expressive than the capabiities when using a non-flat metadata model. In particular, the flat model cannot provide identifiers or roles for the creators; it cannot include the affiliation of the authors; it cannot specify whether the containing resource (the value of dct:isPartOf) is a journal or a monograph. 
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
