# SRAP example: Book

This example shows how to represent a book in SRAP. It is based on this citation:

> European Commission: Directorate-General for Research and Innovation. (2020). *Citizen Science : elevating research and innovation through societal engagement.* Publications Office of the European Union. https://data.europa.eu/doi/10.2777/624713.

## SRAP Turtle

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.
@prefix bibo:    <http://purl.org/ontology/bibo/> .

ex:book
  dct:type <http://purl.org/coar/resource_type/c_2f33> ;  # COAR resource type: book
  dct:language "en" ; # language expressed as IETF BCP 47 language tag
  dct:creator [
    a srap:Organization ;
    srap:name "European Commission. Directorate-General for Research and Innovation."
  ] ;
  dct:publisher [
    a srap:Organization ;
    srap:name "Publications Office of the European Union"
  ] ;
  dct:subject "citizen science" ;
  dct:title "Citizen Science : elevating research and innovation through societal engagement" ;
  dct:issued "2020" ;
  dct:description "Citizen science can be described as the voluntary participation of non-professional scientists in research and innovation at different stages of the process and at different levels of engagement, from shaping research agendas and policies, to gathering, processing and analysing data, and assessing the outcomes of research. Active engagement with citizens and society has the potential to improve research and its outcomes and reinforce societal trust in science. It can increase - relevance and effectiveness by ensuring that R&I aligns with needs, expectations and values of society - creativity and quality by enlarging the collective capabilities, the scope of research and the quantity and quality of data - transparency, science literacy and confidence of the public in research." ;
  bibo:isbn "9789276208044" .
```
