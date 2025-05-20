# SRAP example: Book chapter

This example shows how to represent a book chapter in SRAP. It is based on this citation:

> Lach, P. (2024). Centering our Values: A Framework for Digital Humanities in the Library. In *Digital Humanities in the Library: Challenges and Opportunities for Subject Specialists*, Revised Second Edition (pp. 43–68). Association of College and Research Libraries. https://doi.org/10.17613/t8eh-p365


Original Dublin Core XML:

```
<dct:contributor>Hartsell-Gundy, Arianne</dct:contributor> 

<dct:contributor>Braunstein, Laura</dct:contributor> 

<dct:contributor>Golomb, Liorah</dct:contributor> 

<dct:contributor>Golomb, Liorah</dct:contributor> 

<dct:creator>Lach, Pamella</dct:creator> 

<dct:date>2024</dct:date> 

<dct:type> http://purl.org/coar/resource_type/c_3248</dct:type> 

<dct:description>This book chapter calls for academic libraries to be values-centered, as much as user-centered, when engaging in digital humanities work. Taking as its case study the growth of digital humanities at San Diego State University (SDSU), particularly
 the DH Center in SDSU Library, this chapter demonstrates how being intentional about the values that guide our work helps build equitable partnerships, meet community needs, manage institutional challenges, engage in critical digital inquiry, and strive toward
 ethical praxis.</dct:description> 

<dct:identifier>https://doi.org/10.17613/t8eh-p365</dct:identifier> 

<dct:identifier>oai:invenio-dev.hcommons-staging.org:bnrkq-k6p71</dct:identifier> 

<dct:identifier>hclegacy-pid:hc:65301</dct:identifier> 

<dct:identifier>hclegacy-record-id:1000360-83719</dct:identifier> 

<dct:language>eng/dct:language> 

<dct:publisher>Association of College and Research Libraries</dct:publisher> 

<dct:isPartOf>https://works.hcommons.org/communities/kcommons</dct:isPartOf> 

<dct:relation>https://doi.org/10.17613/thhxw-mbt65</dct:relation> 

<dct:rights>info:eu-repo/semantics/openAccess</dct:rights> 

<dct:rights>Creative Commons Attribution Non Commercial Share Alike 4.0 International</dct:rights> 

<dct:rights>https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode</dct:rights> 

<dct:subject>Digital humanities centers</dct:subject> 

<dct:subject>Values</dct:subject>

<dct:subject>Libraries</dct:subject> 

<dct:subject>Digital humanities</dct:subject> 

<dct:title>Centering our Values: A Framework for Digital Humanities in the Library</dct:title> 
```

# SRAP Turtle

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.
@prefix bibo:    <http://purl.org/ontology/bibo/> .

ex:bookChapter
  dct:type <http://purl.org/coar/resource_type/c_3248> ; # COAR resource type: book part
  dct:language "en" ; # language expressed as IETF BCP 47 language tag
  dct:contributor "Hartsell-Gundy, Arianne" ;
  dct:contributor "Braunstein, Laura" ;
  dct:contributor "Golomb, Liorah" ;
  dct:creator "Lach, Pamella" ;
  dct:publisher [
    a srap:Organization ;
    srap:name "Association of College and Research Libraries"
  ] ;
  dct:title "Centering our Values: A Framework for Digital Humanities in the Library" ;
  dct:issued "2024" ;
```

