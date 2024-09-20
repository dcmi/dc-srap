# Rioxx example 3

This is based on [Example 3](https://www.rioxx.net/profiles/v3-0-final/#heading3) from the Rioxx 3.0 specification. This represents a preprint of an academic paper that was subsequently published in a journal. The paper also comes with an accompanying data set.

## Challenges

* Rioxx structure for related links is tricky
  * Linking to PDF files https://github.com/dcmi/dc-srap/issues/62
* Indicating version https://github.com/dcmi/dc-srap/issues/61
* `rioxxterms:record_public_release_date` has no equivalent in SRAP, but this is housekeeping metadata, so probably out of scope (similar to "date accessioned" in DSpace)

## SRAP metadata

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.
@prefix bibo:    <http://purl.org/ontology/bibo/> .
@prefix foaf:    <http://xmlns.com/foaf/0.1/>.
@prefix marcrel: <http://id.loc.gov/vocabulary/relators/>.
@prefix schema: <http://schema.org/>.

ex:document
  dct:description "YouTube has been implicated in..." ;
  dct:language "en" ;
  dct:publisher [
    a foaf:Organization ;
    foaf:name "Springer" ;
    dct:identifier <https://isni.org/isni/0000000460111909>
  ] ;
  # Rioxx example uses dc:source to indicate the ISNI of the containing publication series; SRAP uses isPartOf
  dct:isPartOf [
    a bibo:Periodical ;
    bibo:issn "0039-7857"
  ] ;
  dct:title "Technologically scaffolded atypical cognition: the case of YouTube’s recommender system" ;
  dct:dateAccepted "2020-05-27" ;
  dct:creator [
    a foaf:Person ;
    foaf:name "Alfano, Mark" ;
    dct:identifier <https://viaf.org/viaf/8232163464412905680007>
  ] ;
  dct:creator [
    a foaf:Person ;
    foaf:name "Fard, Amir Ebrahimi"
  ] ;
  dct:creator [
    a foaf:Person ;
    foaf:name "Carter, J. Adam" ;
    dct:identifier <http://orcid.org/0000-0002-1222-8331>, <https://isni.org/isni/0000000452130579>
  ] ;
  dct:creator [
    a foaf:Person ;
    foaf:name "Clutton, Peter"
  ] ;
  dct:creator [
    a foaf:Person ;
    foaf:name "Klein, Colin"
  ] ;
  dct:issued "2021-12" ;
  # SRAP has no record_public_release_date property
  # <rioxxterms:record_public_release_date>2020-06-11</rioxxterms:record_public_release_date>
  dct:type <https://purl.org/coar/resource_type/c_2df8fbb1> ;
  schema:funding [
    a schema:Grant ;
    schema:identifier "DP190101507" ;
    schema:funder [
      a foaf:Organization ;
      foaf:name "Australian Research Council" ;
      dct:identifier <https://ror.org/05mmh0f86>
    ]
  ] ;
  schema:funding [
    a schema:Grant ;
    schema:identifier "61387" ;
    schema:funder [
      a foaf:Organization ;
      foaf:name "John Templeton Foundation" ;
      dct:identifier <https://ror.org/035tnyy05>
    ]
  ] ;
  # local repository identifier / URL of landing page
  # <dc:identifier>https://eprints.gla.ac.uk/217807/</dc:identifier>
  dct:identifier <https://eprints.gla.ac.uk/217807/> ;
  # local repository persistent identifier
  # <dc:relation rel="cite-as">https://oai.core.ac.uk/oai:eprints.gla.ac.uk:217807</dc:relation>
  dct:identifier <https://oai.core.ac.uk/oai:eprints.gla.ac.uk:217807> ;

  # TODO: link to PDF file

  # external relations
  dct:relation <https://doi.org/10.1007/s11229-020-02724-x> ;  # journal article, see below
  dct:relation <https://doi.org/10.15129/589f7af3-26b3-4a93-b042-fbc8100fc977> .  # dataset, see below

# more information about the external relations

# the published journal article is the Version of Record
<https://doi.org/10.1007/s11229-020-02724-x>
  dct:type <https://purl.org/coar/resource_type/c_6501> ;  # journal article
  srap:version <https://purl.org/coar/version/c_970fb48d4fbd8a85> .  # VoR

# the dataset
<https://doi.org/10.15129/589f7af3-26b3-4a93-b042-fbc8100fc977>
  dct:type <https://purl.org/coar/resource_type/c_ddb1> .  # dataset

```

## Visualization

Created from the above Turtle data using [RDF Sketch](https://sketch.zazuko.com/)

![image](https://github.com/user-attachments/assets/a91b8f50-5128-4c11-bb1e-f26cbbe2d40b)

