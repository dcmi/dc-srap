# SRAP example: Preprint with dataset

This example shows how to represent a preprint article. It is based on [Example 3](https://www.rioxx.net/profiles/v3-0-final/#heading3) from the Rioxx 3.0 specification. This academic paper that was subsequently published in a journal. The paper also comes with an accompanying data set.

## SRAP Turtle

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.
@prefix bibo:    <http://purl.org/ontology/bibo/> .
@prefix marcrel: <http://id.loc.gov/vocabulary/relators/>.

ex:document
  a bibo:AcademicArticle ;
  dct:description "YouTube has been implicated in..." ;
  dct:language "en" ;
  dct:publisher [
    a srap:Organization ;
    srap:name "Springer" ;
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
    a srap:Person ;
    srap:name "Alfano, Mark" ;
    dct:identifier <https://viaf.org/viaf/8232163464412905680007>
  ] ;
  dct:creator [
    a srap:Person ;
    srap:name "Fard, Amir Ebrahimi"
  ] ;
  dct:creator [
    a srap:Person ;
    srap:name "Carter, J. Adam" ;
    dct:identifier <http://orcid.org/0000-0002-1222-8331>, <https://isni.org/isni/0000000452130579>
  ] ;
  dct:creator [
    a srap:Person ;
    srap:name "Clutton, Peter"
  ] ;
  dct:creator [
    a srap:Person ;
    srap:name "Klein, Colin"
  ] ;
  dct:issued "2021-12" ;
  # SRAP has no record_public_release_date property
  # <rioxxterms:record_public_release_date>2020-06-11</rioxxterms:record_public_release_date>
  dct:type <https://purl.org/coar/resource_type/c_2df8fbb1> ;
  srap:funding [
    a srap:Grant ;
    dct:identifier "DP190101507" ;
    srap:funder [
      a srap:Organization ;
      srap:name "Australian Research Council" ;
      dct:identifier <https://ror.org/05mmh0f86>
    ]
  ] ;
  srap:funding [
    a srap:Grant ;
    dct:identifier "61387" ;
    srap:funder [
      a srap:Organization ;
      srap:name "John Templeton Foundation" ;
      dct:identifier <https://ror.org/035tnyy05>
    ]
  ] ;
  # local repository identifier / URL of landing page
  # <dc:identifier>https://eprints.gla.ac.uk/217807/</dc:identifier>
  srap:url <https://eprints.gla.ac.uk/217807/> ;
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
  a bibo:AcademicArticle ;
  dct:type <https://purl.org/coar/resource_type/c_6501> ;  # journal article
  srap:version <https://purl.org/coar/version/c_970fb48d4fbd8a85> .  # VoR

# the dataset
<https://doi.org/10.15129/589f7af3-26b3-4a93-b042-fbc8100fc977>
  a srap:SRAPResource ;
  dct:type <https://purl.org/coar/resource_type/c_ddb1> .  # dataset

```
