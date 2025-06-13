# Scholarly Resources Application Profile: A Proposal

## Introduction

The Scholarly Resources Application Profile (SRAP) working group has developed the application profile as a DC Tabular Application Profile (DCTAP). The DCTAP makes use of RDF-defined classes and properties from a small number of vocabularies: Dublin Core Terms (DCT), Bibliographic Ontology (BIBO), and Schema.org. 

The DCTAP contains the detail of classes, properties and shapes of SRAP. The general structure of the profile is as follows:

![][image1]

Part I of this document explains the selection of classes and properties from non-DCT vocabularies. Part II enumerates the properties that are desired in SRAP but were not to be found in existing vocabularies.

# Part I: Non-DCT Classes and Properties

## Non-DCT Classes Used in SRAP

### bibo:Periodical, bibo:Journal, bibo:Book

These classes are used for the relative DCTAP shapes. Detailed resource types are selected from the COAR vocabulary of types as values of the dcterms:type property.

**Recommendation:** Nothing to do, all is well.

### Person

In SRAP, srap:Person, very similar to foaf:Person and schema:Person, is the RDF class defined for the shape "Person." The shape includes the property srap:role which takes an identified value from the Library of Congress Relators vocabulary. (This is also what BIBO uses.) In FOAF, foaf:Person is subclassed to foaf:Agent. (Note that in schema.org, schema:Person is subclassed to schema:Thing and schema:Person and schema:Organization are expected values of schema:agent.). 

This class is needed to represent affiliation relationships.

**Recommendation:**  
Three alternatives:

1. add the RDF class dcterms:Person as a subclass of dcterms:Agent.  
   * This is similar to foaf:Person, which is subclassed to foaf:Agent  
   * We could state that dcterms:Person is also an instance of dcterms:AgentClass  
2. add the RDF class dcterms:Person (not subclassed to dcterms:Agent).  
   * This similar to schema:Person, which is subclassed to schema:Thing

Also, add the following properties:

1. dcterms:name (similar to foaf:name)  
   * domainIncludes: dcterms:Person, dcterms:Organization (see below)  
2. dcterms:affiliation (similar to schema:affiliation)  
   * domainIncludes: dcterms:Person  
   * rangeIncludes: dcterms:Organization

**Discussion**: In DCMT, the Agent class is defined as "​​A resource that acts or has the power to act." A Person class that is subclassed to dcterms:Agent implies that members of that class are always considered potential actors. There is a subtle difference between having the power to act and not implying action. Think of a statement like: "Mary is Joe's cousin" or "Mary has a head cold." The person "Mary" can act, but these statements do not describe actions. The question is whether all persons in all situations (that could be described in DCMT) are logically considered Agents, based on this definition. 

### Organization

In SRAP, srap:Organization, very similar to foaf:Organization and schema:Organization, is the RDF class defined for the shape "Organization." The shape includes the property srap:role which takes an identified value from the Library of Congress Relators vocabulary. (This is what BIBO uses.) In FOAF, foaf:Organization is subclassed to foaf:Agent.  (Note that in schema.org, schema:Person is subclassed to schema:Thing, and schema:Person and schema:Organization are expected values of schema:agent.). 

This is needed to represent affiliation relationships.

**Recommendation:**  
Three alternatives:

1. add the RDF class dcterms:Organization as a subclass of dcterms:Agent.  
   * This is similar to foaf:Organization, which is subclassed to foaf:Agent  
   * We could state that dcterms:Organization is also an instance of dcterms:AgentClass  
2. add the RDF class dcterms:Organization not subclassed to dcterms:Agent  
   * This is similar to schema:Organization, which is subclassed to schema:Thing

**Discussion**: In DCMT, the Agent class is defined as "A resource that acts or has the power to act." AgentClass class is defined as "A group of agents." An Organization class that is subclassed to dcterms:AgentClass implies that members of that class are always considered a group of potential actors. The question is whether all organizations in all situations (that could be described in DCMT) are logically considered Agents, based on this definition, and whether dcterms:Agent or dcterms:AgentClass are best as superclass to Organization.

### Grant

* SRAP uses srap:funding as the property that has the SRAP Grant shape as its value shape  
* SRAP uses srap:Grant as a class on the SRAP Grant shape  
* SRAP Grant shape uses srap:funder as the property that takes a string or an identifier for the funding agency.


**Recommendation:**   
Add the following to BIBO:

* bibo:Grant class (like schema:Grant)  
* bibo:funding property (like schema:funding)  
  * domain: ?? perhaps not needed  
  * range(Includes?): bibo:Grant  
* bibo:funder property (like schema:funder)  
  * domain: bibo:Grant  
  * range(Includes?): foaf:Organization, or dcterms:Organization if defined (see above)

### SRAPResource

Without this class the SRAP profile has no declaration of its primary semantics as a description of scholarly resources. This class also creates a human-understandable provenance to the SRAPResource shape in the TAP to RDF entities 

* other similar classes in other vocabularies/schemas:  
  * BIBO \- bibo:AcademicArticle subclassed to "bibo:Article", but there is no way to indicate that a book, book section, or any other classes include the concept of "Academic".  
  * schema.org \- has schema:ScholarlyArticle and schema:MedicalScholarlyArticle. There is nothing similar for books or other information types, e.g. datasets.  
  * FaBiO \- "[ScholarlyWork](https://sparontologies.github.io/fabio/current/fabio.html#d4e6036)", a subclass of frbr:Work (using [https://vocab.org/frbr/core](https://vocab.org/frbr/core)). \[kc: it isn't clear to me how this is to be used. SW is one of the work types, which includes types like biography, examination paper, instructional work.\] Note that FaBiO uses FRBR concepts of Work, Expression, Manifestation, and Item in the way defined in FRBR, so this is implicit in the vocabulary.  
  * COAR resource types as SKOS concepts (e.g. journal article, magazine article…) don't designate whether a resource is scholarly or not (except for theses which are implicitly scholarly)

**Recommendation:**   
Add a new class ScholarlyResource to BIBO. 

* The existing BIBO classes AcademicArticle and Thesis would become subclasses of ScholarlyResource.  
* The class should be defined in a broad way to include resources other than documents, including e.g. scholarly data sets and research software.

## Properties

### Found in BIBO

Since these properties are already in BIBO, SRAP can use them directly. No changes needed.

#### bibo:eissn

#### bibo:isbn

#### bibo:issn

#### bibo:issue

#### bibo:pageEnd

#### bibo:pageStart

#### bibo:presentedAt

#### bibo:volume

### Found elsewhere

Although these properties can be used from existing vocabularies, the board should consider whether any of these should be added to DCTerms or BIBO. 

#### foaf:name

* see proposal under Person (above)

#### schema:affiliation

* see proposal under Person (above)

#### schema:funder

* see proposal under Grant (above)

#### schema:funding

* see proposal under Grant (above)

#### schema:url

* **Recommendation**: add bibo:url property, similar to schema:url  
  * domain: can be left open?  
  * TAP: "URL where the electronic resource (e.g., a file) or a part of it can be retrieved."  
  * profile: "This property SHOULD be used to provide the online download location for the resource."

### Not found anywhere

#### srap:accessibilityStatement

This is needed to inform potential users of accessibility features.  
**Recommendation:**

* Add accessibilityStatement either to BIBO or DCTerms.

#### srap:dateRetracted

The status of "retracted" is important for the integrity of scholarly publishing.   
**Recommendation:**

* Add dateRetracted to DCTerms. Alternatively, add this date to BIBO.

#### srap:embargoDateRange

The embargo date range should be used by repositories to avoid issuing a work that is under embargo.  
**Recommendation:** 

* Add embargoDateRange to BIBO, unless this is determined to be suitable for DCTerms. (value is EDTF)

#### srap:scholarlyUnit

The scholarly unit where the activities were undertaken is commonly indicated in academic repositories using the dcterms:contributor property, but that seems to be too general for this purpose. There are also LOC and RDA vocabularies of contributor roles, but this kind of "happened within" role doesn't exist in either vocabulary.  
**Recommendation:**

* Add scholarlyUnit to BIBO, defined as a subproperty of dcterms:contributor.

#### srap:project

Project identifiers are issued by government and commercial entities and are increasingly included in scholarly work metadata.   
**Recommendation:**

* This is a specific type of identifier and could be defined as a subproperty of dcterms:identifier. Add project to DCTerms. Alternatively, add this property to BIBO. BIBO uses dcterms:identifier, so a BIBO property could be defined as a subproperty of dcterms:identifier. (Note: to make this specifically an identifier, it may make sense to rename it: projectID.)

#### srap:role

Role is a property used in the Person and the Organization shapes in SRAP. It defines the role of an agent in relation to the scholarly work. The role property takes an identifier for a role from an authoritative list.There are some specific roles defined in BIBO but those are not sufficient. SRAP recommends that role identifiers be taken from the [Library of Congress list of relators](https://id.loc.gov/vocabulary/relators).  
**Recommendation:**

* Add a role property to BIBO as an object property.

#### srap:versionType

Scholarly works can exist in different versions, any of which may be stored in a repository. SRAP recommends that the version type be taken from the [COAR version vocabulary](http://purl.org/coar/version/).  
**Recommendation:**

* Add a version type property to BIBO as an object property.

## Other things to think about

**Recommendation:**

* BIBO should consider adopting domainIncludes and rangeIncludes, similar to dcterms and schema.

[image1]: <data:image/png;base64,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>
