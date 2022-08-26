## Dublin Core Metadata Initiative Scholarly Resources Application Profile (SRAP) 

*list of authors*

The aim of the Scholarly Resources Application Profile (SRAP) proposal is to enable the description of scholarly resources, such as doctoral dissertations näitä tietojaor scientific articles, with Dublin Core Metadata Terms. The proposal is based on a) Scholarly Works Application Profile (SWAP[^1][^2]), which was developed by UKOLN with JISC funding in 2006, and b) Finnish metadata guidelines for text documents in institutional repositories[^3] (available only in Finnish). 

There is significant overlap between SRAP, UKOLN SWAP, the Finnish guidelines, and the British Library’s ETHOS specification[^4]. This is not surprising since they share the same purpose, description of scholarly resources. There are probably many local application profiles developed by universities and other institutions of higher education for the same purpose. Adding SRAP properties to the DCMI Metadata Terms will reduce duplicate effort in application profile development and maintenance in the future, and improve semantic interoperability between Dublin Core -based metadata produced by different institutions of higher education. 

The SRAP application profile proposal was prepared by a Finnish working group, but it is intended to be globally applicable. The proposal does not specify a FRBR-based or other data model, but all suggested properties are “battle-proven”, in use. The only exception is the embargo date, which was adopted from ETHOS after the working group decided it is relevant for SRAP profile. However, several properties, such as affiliation, have been used in Finland only to describe scholarly resources such as doctoral dissertations. In this proposal these properties have a broader scope appropriate for DCMI Metadata Terms properties, in addition to the more limited semantics within the SRAP context.  

This proposal also contains recommendations for SRAP-related semantic refinements to three existing Dublin Core Terms properties to make them more suitable for use in the description of scholarly resources.  

There are significant differences between this proposal and the UKOLN SWAP. Most importantly, the FRBR structure of the UKOLN SWAP profile has been removed, meaning that no FRBR dependent properties from that profile are included. Since the FRBR model is still not used in DC based resource description, including FRBR properties in the proposal would have provided little added value.

Many properties originating from SWAP have more generic semantics in SRAP in order to maximize their usability and usefulness in Dublin Core. 

When UKOLN created the 2006 version of SWAP, no standard identifiers for researchers existed. Therefore the profile could not rely on ISNI or ORCID, and advocated the use of email addresses and homepage URLs as “identifiers”. However, email addresses or homepage URIs are not very good identifiers since they are not persistent and do not identify a person in the long (or even short) term. Due to this, properties from the “Description of an agent” section of the 2006 SWAP proposal are not included herein. Instead, the SRAP proposal relies on standard identifiers, such as ISNI and ORCID, since they are persistent and facilitate access to additional metadata about the agent.  

We do not propose any new properties for agent-specific identifiers, but rely on DCMI’s draft proposal[^5] of using the XML id attribute to match identifiers with the agent names. For instance: 

    <dcterms:affiliation id="http://isni.org/isni/0000000404102071">University of Helsinki</dcterms:affiliation>    

This approach is sufficient for e.g. ISNI and ORCID (which share the same syntax) since their HTTP URIs reveal the identifier system used:

    <dcterms:editor id=https://orcid.org/0000-0002-1825-0097>Carberry, Josiah</dcterms:editor>

Roles of contributors are based on Library of Congress Relator terms and their associated codes[^6] when applicable. Contributor codes used in SWAP are provided for reference purposes.  

Note 1: All DCMI Metadata Terms URIs are suggestions. 

Note 2: Examples are not normative and do not need to be reviewed.  

#### Domain model 

SRAP has a simple domain model which enumerates the key entities and describes in generic terms how they are related. 

Note that the definitions of properties are more restrictive in the domain model than below, because in the Dublin Core context for instance affiliation should be interpreted more broadly. 

Scholarly resource is a) a peer-reviewed (usually) document, written by an authority on the subject at hand, produced by a reputable association, or b) dissertation, thesis, mémoire, or any other document written in order to achieve an academic degree, or c) a research data set. 

NOTE Metadata elements needed for description of research data sets are not included in this version of the SRAP profile. Research data sets require complex and domain specific metadata (see for instance DDI, https://ddialliance.org/, for metadata specification intended for social science data sets). A future version of SRAP may be extended to cover also some or all domains of research data. 

Creator is a person or group which produces a scholarly resource. 

Affiliation is an organization to which the creator of the scholarly resource is affiliated or was affiliated when the resource was created. 

Editor is a person or group who prepares a scholarly resource for publication that is not primarily their own, such as by clarifying text, adding introductory or other critical matter, or technically leading an editorial staff.

Funder is a person or organization that furnished financial support for the production of the scholarly resource. 

Degree supervisor is a person under whose supervision a degree candidate develops and presents a document required to achieve an academic degree.

Opponent is a person responsible for opposing a thesis or dissertation. 

Figure 1. SRAP domain model.
Alphabetic table of elements

This table contains all the proposed new or changed element, and DC Terms elements which are essential for description of scholarly resources. In addition to the listed elements, any existing DC Terms element may also be used if and when necessary.

Name

	Identifier
	Mandatory / Repeatable
	Value
	Abstract
	http://purl.org/dc/terms/abstract
	0...1
	Free text
	Access rights
	http://purl.org/dc/terms/accessRights
	0...1
	A term from COAR vocabulary (http://vocabularies.coar-repositories.org/documentation/access_rights/). If embargo is indicated, end date or duration of embargo should be provided in Embargo date / Embargo duration. 
	Affiliation
	http://purl.org/dc/terms/affiliation
	0...1
	Name and identifier of the organization or organizations
	Contributor
	http://purl.org/dc/terms/contributor
	0...1
	Name and identifier of persons and/or organizations
	Creator 
	http://purl.org/dc/terms/creator 
	0...1
	Name and identifier of persons and/or organizations
	Date
	http://purl.org/dc/terms/date
	1
	Date according to ISO 8601-1
	Degree supervisor
	http://id.loc.gov/vocabulary/relators/dgs
	0...1
	Person
	Description
	http://purl.org/dc/terms/description 
	1
	Free text; different languages shall be provided separately (as different Description elements)
	Editor[d]
	https://id.loc.gov/vocabulary/relators/edt 
	0...1
	Name and identifier of persons 
	Embargo date[e]
	http://purl.org/spar/fabio/hasEmbargoDate
	0...1
	Date the embargo period ends, encoded in ISO 8601-1 format (YYYY-MM-DD).
	Embargo duration
	http://purl.org/spar/fabio/hasEmbargoDuration
	0...1
	A period expressed in years, months and/or days, with no end/beginning date included. 
	Format
	http://purl.org/dc/terms/format 
	1
	MIME type registered by IANA
	Funder 
	https://id.loc.gov/vocabulary/relators/fnd 
	0...1
	Name and identifier of persons and/or organizations
	Grant number
	 http://purl.org/dc/terms/grantNumber 
	0...1
	Free text
	Has Part
	http://purl.org/dc/terms/hasPart 
	0...1
	URI or other identifier of the related resource
	Identifier 
	http://purl.org/dc/terms/identifier 
	1
	URI, one for each identifier the resource has, provided separately
	Is Part Of
	http://purl.org/dc/terms/isPartOf
	0...1
	URI or other identifier of the related resource
	Language
	http://purl.org/dc/terms/language 
	1
	A code from ISO 639-2, one for each language used in the resource, provided separately
	Metadata source 
	http://purl.org/dc/terms/metadataSource
	0...1
	Name of the organization
	Opponent
	http://id.loc.gov/vocabulary/relators/opn
	0...1
	Name and identifier of the person
	Presented at[f][g][h]
	http://purl.org/dc/terms/presentedAt
	0…1
	Free text or URI
	Publisher 
	http://purl.org/dc/terms/publisher
	0...1
	Name and URI of the organization
	Related dataset 
	http://purl.org/dc/terms/relatedDataset
	0...1
	URI
	Relation 
	http://purl.org/dc/terms/relation
	0...1
	URI
	Rights 
	http://purl.org/dc/terms/rights 
	0...1
	Free text or URI of the appropriate license
	Status[i]
	http://purl.org/dc/terms/status
	0...1
	OpenAire publication status code from https://guidelines.openaire.eu/en/latest/literature/field_publicationversion.html 
	Subject 
	http://purl.org/dc/terms/subject 
	0...1
	A concept from a controlled vocabulary such as LCSH or MeSH
	Title
	http://purl.org/dc/terms/title 
	1
	Free text, titles in different languages provided separately
	Type
	http://purl.org/dc/terms/type
	0...1
	A term from COAR resource type vocabulary, http://purl.org/coar/resource_type
	

Generic elements 
Affiliation
Proposed Schema.org property: https://schema.org/affiliation 
Label: Affiliation
An organization to which an agent is or was affiliated.
Domain includes: dcterms:Agent
Recommended practice is to identify the affiliation with a URI. If this is not possible or feasible, a literal value that identifies the affiliated organization may be provided. It is also possible to give both the name and the URI.
If a name is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit. 


Editor 
Proposed MARC Relator: https://id.loc.gov/vocabulary/relators/edt


Label: Editor
A person, family, or organization contributing to a resource by revising or elucidating the content, e.g., adding an introduction, notes, or other critical matter. An editor may also prepare a resource for production, publication, or distribution..
Recommended practice is to identify the editor with a URI. If this is not possible or feasible, a literal value that identifies the editor may be provided. It is also possible to give both the name and the URI.


Embargo date 
Proposed DCMI Metadata Term: http://purl.org/dc/terms/embargoDate
Label: Embargo Date
The date when the academic publication will be made available for all users.  
Recommended practice is to describe the date, or date/time as recommended for the property Date, of which this is a subproperty.
Subproperty of: Date available (http://purl.org/dc/terms/available) 


NOTE Date available covers all resource types and news embargo, a request by a source that the information or news provided by that source not be published until a certain date or certain conditions have been met
Funder
Proposed DCMI Metadata Term: https://id.loc.gov/vocabulary/relators/fnd
Label: Funder
A person or organization that furnished financial support for the production of the resource. 
Recommended practice is to identify the funder with a URI. If this is not possible or feasible, a literal value that identifies the funder may be provided. It is also possible to give both the name and the URI.


If a name is given, it should be provided in full and in hierarchical order, starting from the largest organizational unit.  


Grant number
Proposed DCMI Metadata Term: http://purl.org/dc/terms/grantNumber
Label: Grant Number
An alpha-numeric string identifying the funding grant under which the scholarly resource was written. 
Subproperty of: Identifier


Metadata source  
Proposed DCMI Metadata Term: http://purl.org/dc/terms/metadataSource
Label: Metadata Source  
Source (database or system) of the metadata record.
Recommended practice is to specify the metadata source by means of its name or URI. It is also possible to give both the name and the URI.


SRAP: source (database or system) of the metadata record describing a scholarly resource. 
 
For metadata on scholarly resources, common sources include 
* ISI Web of Science
* Scopus
* PubMed Central
* ArXiv
* Cab Abstracts 
Since names may change over time, a URI should be used, especially when there is one based on a standard identifier. 
Note: Institutional repositories may harvest metadata from external sources. Since the source may have an impact on how the metadata can be reused, it is important to keep track of where the metadata came from. 
Presented at
Proposed DCMI Metadata Term: http://purl.org/dc/terms/presentedAt
Label: Presented at 
The conference, workshop, shareholder meeting etc. where the resource was presented. 
SRAP: Conference, workshop or other scientific event where the scholarly resource was presented. 
Recommended practice is to identify formal meetings such as conferences with a URI. If this is not possible or feasible, a literal value that identifies the meeting may be provided. It is also possible to give both the name and the URI.
Related Dataset  
Proposed DCMI Metadata Term: http://purl.org/dc/terms/relatedDataset
Label: Related Dataset
Dataset referenced in the described resource. 
SRAP: Dataset referenced in the described scholarly resource.
Recommended practice is to identify the dataset with a URI identifying either the dataset or a landing page through which the dataset is accessed.  
Subproperty of: References         (http://purl.org/dc/terms/references)


Status 
Proposed DCMI Metadata Term: http://purl.org/dc/terms/status
Label: Status 
The condition or state of the described resource.


Note: Typically used with a controlled vocabulary of statuses.


SRAP: The publication state of the described scholarly resource. 
In SRAP, the recommended best practice is to use a status from the OpenAIRE vocabulary for publication versions (https://guidelines.openaire.eu/en/latest/literature/field_publicationversion.html): 
* info:eu-repo/semantics/draft
* info:eu-repo/semantics/submittedVersion 
* info:eu-repo/semantics/acceptedVersion 
* info:eu-repo/semantics/publishedVersion 
* info:eu-repo/semantics/updatedVersion
Subproperty of: Type        (http://purl.org/dc/elements/1.1/type)
                (http://purl.org/dc/terms/type)


Note 1 OpenAIRE uses Type property for these codes. Since they are all related to the publication status of a publication, we considered that there is a need for a Type subproperty. 
Note 2 Info URIs assigned for these codes are not actionable and there is no additional information about the codes available at http://www.lse.ac.uk/library/versions (the URL produces 404 error). However, these info URIs have been used in this proposal instead of plain text terms (draft, submittedVersion, etc). 


SRAP elements 


SRAP elements are elements which are applicable only for scholarly resources; especially academic dissertations. 


Degree supervisor 
Proposed DCMI Metadata Term: http://id.loc.gov/vocabulary/relators/dgs


Label: Supervisor
A person overseeing a higher level academic degree.
Recommended practice is to identify the supervisor with a URI. If this is not possible or feasible, a literal value that identifies the supervisor may be provided. It is also possible to give both the name and the URI.


Subproperty of: Contributor (http://purl.org/dc/elements/1.1/contributor)
                (http://purl.org/dc/terms/contributor)




Opponent
Proposed DCMI Metadata Terms: http://id.loc.gov/vocabulary/relators/opn 
Label: Opponent 
A person or organization responsible for opposing a thesis or dissertation
Recommended practice is to identify the opponent with a URI. If this is not possible or feasible, a literal value that identifies the opponent may be provided. It is also possible to give both the name and the URI.


Refinements to existing DCMIMT elements


Access rights  
DCMI Metadata Term: http://purl.org/dc/terms/accessRights 
Label: Access Rights 
Current definition of this property in the DCMI Terms namespace is: 
“Information about who can access the resource or an indication of its security status.”
This is not applicable to scholarly resources. Their access rights are usually not based on security status nor do rights metadata normally specify who can access a scholarly resource. Moreover, there is no recommendation to use a controlled vocabulary. 
The following note could be added to the DCMI Terms or, alternatively, to the user guide: 
For scholarly resources, using the COAR (Confederation of Open Access Repositories) vocabulary of access rights (http://vocabularies.coar-repositories.org/documentation/access_rights/) is recommended. 
Version 1.0 of the vocabulary contains the following terms: 
* open access
* embargoed access
* restricted access
* metadata only access 
The following recommendation could be added to DCMI Metadata Terms: 


Recommended practice is to specify the access right by means of a term or its URI from a controlled vocabulary. It is also possible to give both the term and its URI.
 
Is Part Of
DCMI Metadata Term: http://purl.org/dc/terms/isPartOf
In SRAP context, this property can be used to specify host document, a related resource in which the described scholarly resource is physically or logically included. For instance, a scientific periodical in which the described article has been published.  
Recommended practice is to identify the related resource by means of a URI. If this is not possible or feasible, a string conforming to a formal identification system or a name may be provided. It is also possible to give both the name and the URI.


“Is Part Of” in DCMI Terms shall be used to provide a link (URI) from the described component part (“child”) to the host resource (“parent”). 
Note: There are no practical examples in DCMI Terms or DC User Guide on how to use this property in cases that are common for scientific publications, such as linking from an article to conference proceedings or periodicals.  User guide and/or DCMI Terms should be revised to accommodate relevant use cases. 
Type 
DCMI Metadata Term: http://purl.org/dc/terms/type
Label: Type 
The Dublin Core DCMI Type Vocabulary[^7] is general and as such not ideally suited for scholarly resources. 
A better choice for these publications is the COAR Controlled Vocabulary for Resource Type Genres[^8]. The use of this vocabulary with scholarly resources should be recommended either in DCMI Metadata Terms or in the DC User Guide. For instance: 
Recommended practice is to use a controlled vocabulary such as the DCMI Type Vocabulary or the COAR Controlled Vocabulary for Resource Type Genres.  
Examples
These examples are all non-normative and included for information purposes only. 
Affiliation 
Example 1: <dcterms:affiliation>University of Helsinki. Faculty of Theology</dcterms:affiliation>    


Example 2: <dcterms:affiliation id="http://isni.org/isni/0000000406246810">University of Helsinki. Faculty of Theology</dcterms:affiliation>   


Note 1: ISNI should be provided as a URI, not as a literal, since the literal form (0000 0004 0624 6810) is not actionable and does not indicate explicitly whether the string is ISNI, ORCID or even some other identifier that just happens to have the same syntax. 
Editor 


Example 1         <dcterms:editor>Carberry, Josiah</dcterms:editor>


Example 2         <dcterms:editor id="https://orcid.org/0000-0002-1825-0097">Carberry, Josiah</dcterms:editor>
Embargo date 
Example        <dcterms:embargoDate>2020-12-31</dcterms:embargoDate>
Funder 
Example 1         <dcterms:funder>Wellcome Trust</dcterms:funder>
Example 2          <dcterms:funder id="http://isni.org/isni/0000000404277672">Wellcome Trust</dcterms:funder>   


Metadata source 
Example 1        <dcterms:metadataSource>PubMed Central</dcterms:metadataSource> 
Example 2        <dcterms:metadataSource id="http://isni.org/isni/0000000405077840">Pubmed Central</dcterms:metadataSource>  


Presented at 
Example 1        <dcterms:presentedAt>The Web Conference 2020</dcterms:presentedAt> 
Example 2        <dcterms:presentedAt id="https://www2020.thewebconf.org">The Web Conference 2020</dcterms:presentedAt>


Note: The URI and the name may identify either a single conference or a conference series, but both the name and the URI shall identify the same thing. Example 4 is incorrect: 
Example 3        <dcterms:presentedAt id="https://www.iw3c2.org/">The Web Conference 2020</dcterms:presentedAt > 
Related dataset
Example        <dcterms:relatedDataset>http://dx.doi.org/10.17605/OSF.IO/B6KJZ</dcterms:relatedDataset>


Status
Example          <dcterms:status>info:eu-repo/semantics/acceptedVersion</dcterms:status>


Degree supervisor 


Example 1        <dcterms:supervisor>Carberrry, Josiah</dcterms:supervisor>


Example 2        <dcterms:supervisor id="https://orcid.org/0000-0002-1825-0097">Carberry, Josiah</dcterms:supervisor>


Grant number 
Example        <dcterms:grantNumber>R01GM98765401</dcterms:grantNumber>
Opponent 


Example 1         <dcterms:opponent>Ainsyut'ain, Alberŭt'ŭ</dcterms:opponent>
Example 2         <dcterms:opponent id="http://isni.org/isni/000000012281955X">Ainsyut'ain, Alberŭt'ŭ </dcterms:opponent>
Access rights 
Example 1        <dcterms:accessRight>open access</dcterms:accessRight>
Example 2         <dcterms:accessRight id="http://purl.org/coar/access_right/c_abf2">open access</dcterms:accessRight>
Is Part Of 
Example 1        <dcterms:isPartOf>https://www.thelancet.com/coronavirus<dcterms:isPartOf>
Example 2        <dcterms:isPartOf id="https://www.thelancet.com/coronavirus">COVID-19 Resource Center<dcterms:isPartOf>
Example 3        <dcterms:isPartOf id="1474-547X">Lancet (online)<dcterms:isPartOf>
Type
Example 1        <dcterms:type>journal</dcterms:type>
Example 2        <dcterms:type id="http://purl.org/coar/resource_type/c_0640">journal</dcterms:type> 




________________

[^1]: http://www.ukoln.ac.uk/repositories/digirep/index/Scholarly_Works_Application_Profile

[^2]: http://www.ariadne.ac.uk/issue/50/allinson-et-al/

[^3]: https://www.kiwi.fi/display/Julkaisuarkistopalvelut/Metadatasuositus+julkaisuarkistojen+tekstiaineistolle

[^4]: http://ethostoolkit.cranfield.ac.uk/tiki-index.php?page=The+EThOS+UKETD_DC+application+profile

[^5]: https://github.com/dcmi/pids_in_dc 

[^6]: http://id.loc.gov/vocabulary/relators.html

[^7]: https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/

[^8]: http://purl.org/coar/resource_type
