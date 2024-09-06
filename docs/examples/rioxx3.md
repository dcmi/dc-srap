# Rioxx example 3

This is based on [Example 3](https://www.rioxx.net/profiles/v3-0-final/#heading3) from the Rioxx 3.0 specification.

## Challenges

* Person and Organization should be IRIs according to TAP, but here blank nodes are used instead

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
  # FIXME: SRAP has no record_public_release_date property
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
  dct:identifier <https://eprints.gla.ac.uk/217807/> .

  # TODO: dc:relation and ext:relation links

```

## Visualization

Created from the above Turtle data using [RDF Sketch](https://sketch.zazuko.com/)

![image](https://github.com/user-attachments/assets/8acb756a-195f-44f0-a981-a91ffb980046)
