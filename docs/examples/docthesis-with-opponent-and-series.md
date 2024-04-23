# Doctoral thesis with opponent, published in a series

Faster than real-time simulation of fluid power-driven mechatronic machines

Malysheva, Julia (2021-06-01)

Lappeenranta-Lahti University of Technology LUT

Acta Universitatis Lappeenrantaensis 960

[Original metadata](https://lutpub.lut.fi/handle/10024/162541?show=full) is available in the LUTPub DSpace repository. The SRAP metadata below is a literal translation into DCT and SRAP, preserving the order of fields as much as possible. Note that the number within the series (960) is not represented in the DSpace metadata in this case, but can be found in the [PDF publication](https://lutpub.lut.fi/bitstream/handle/10024/162541/Julia%20Malysheva%20A4.pdf?sequence=1&isAllowed=y).

## SRAP metadata

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.
@prefix bibo:    <http://purl.org/ontology/bibo/> .
@prefix foaf:    <http://xmlns.com/foaf/0.1/>.
@prefix marcrel: <http://id.loc.gov/vocabulary/relators/>.

# The online thesis we are (mainly) describing
ex:online_thesis
  dct:creator "Malysheva, Julia" ;
  dct:issued "2021-06-01" ;
  bibo:isbn "978-952-335-653-5" ; # ISBN of electronic version (this one)
  dct:identifier <https://lutpub.lut.fi/handle/10024/162541> ; # repository local URI identifier
  dct:abstract "The level of automation of mechatronic machines, such as..."@en ; # cut for brevity
  dct:extent "79 pages" ; # number of pages, a dct:SizeOrDuration instance
  dct:language "en" ; # language expressed as IETF BCP 47 language tag
  dct:publisher "Lappeenranta-Lahti University of Technology LUT"@en ;
  dct:isPartOf ex:series ; # is part of the series it has been published in
  ex:numberInSeries "960" ;  # TODO number in series - how to represent this?
  dct:relation ex:printed_thesis ; # link to the printed thesis which has a different ISBN
  dct:rights "Kaikki oikeudet pidätetään."@fi, "All rights reserved."@en ;
  dct:subject "..." ;  # actual subjects omitted for brevity
  dct:title "Faster than real-time simulation of fluid power-driven mechatronic machines"@en ;
  dct:contributor [
    foaf:name "Ellman, Asko" ;
    srap:role marcrel:opn  # official opponent at the doctoral defense, using MARC relator
  ] ;
  dct:type <http://purl.org/coar/resource_type/c_db06> ; # COAR resource type: doctoral thesis
  dct:contributor "Lappeenrannan-Lahden teknillinen yliopisto LUT"@fi, "Lappeenranta-Lahti University of Technology LUT"@en ;  # TODO should this be a resource? Typed as Organization?
  dct:contributor "School of Energy Systems"@en ;  # TODO should this be part of the above?
  dct:subject "School of Energy Systems, Mechanical Engineering" ; # TODO is this the correct field for degree program?
  dct:contributor [
    foaf:name "Ellman, Asko" ;
    srap:role marcrel:rev  # reviewer, using MARC relator
  ] ;
  dct:contributor [
    foaf:name "Pietola, Matti" ;
    srap:role marcrel:rev  # reviewer, using MARC relator
  ] ;
  dct:contributor [
    foaf:name "Handroos, Heikki" ;
    srap:role marcrel:dgs  # degree supervisor, using MARC relator
  ] .

# Printed version of the thesis, with a different ISBN
ex:printed_thesis
  bibo:isbn "978-952-335-652-8" .  # ISBN of printed version

# Series where the thesis was published in (reusable entity)
ex:series dct:title "Acta Universitatis Lappeenrantaensis" ;
  bibo:issn "1456-4491" .
```

## Visualization

Created from the above Turtle data using [RDF Sketch](https://sketch.zazuko.com/)

![image](https://github.com/dcmi/dc-srap/assets/1132830/5c73e9ad-9b39-4c8e-8d16-fcedfbe5756b)
