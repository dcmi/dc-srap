# SRAP example: Book chapter

This example shows how to represent a book chapter in SRAP. It is based on this citation:

> Lach, P. (2024). Centering our Values: A Framework for Digital Humanities in the Library. In *Digital Humanities in the Library: Challenges and Opportunities for Subject Specialists*, Revised Second Edition (pp. 43–68). Association of College and Research Libraries. https://doi.org/10.17613/t8eh-p365

# SRAP Turtle

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.
@prefix bibo:    <http://purl.org/ontology/bibo/> .

# The chapter within a book
ex:bookChapter
  dct:type <http://purl.org/coar/resource_type/c_3248> ; # COAR resource type: book part
  dct:language "en" ; # language expressed as IETF BCP 47 language tag
  dct:creator "Lach, Pamella" ;
  dct:contributor "Hartsell-Gundy, Arianne" ;
  dct:contributor "Braunstein, Laura" ;
  dct:contributor "Golomb, Liorah" ;
  dct:publisher [
    a srap:Organization ;
    srap:name "Association of College and Research Libraries"
  ] ;
  dct:title "Centering our Values: A Framework for Digital Humanities in the Library" ;
  dct:format "application/pdf" ;
  dct:issued "2024" ;
  dct:subject "Digital humanities centers"@en ;
  dct:subject "Values"@en ;
  dct:subject "Libraries"@en ;
  dct:description """This book chapter calls for academic libraries to be values-centered, as much as user-centered, when engaging in digital humanities work. Taking as its case study the growth of digital humanities at San Diego State University (SDSU), particularly the DH Center in SDSU Library, this chapter demonstrates how being intentional about the values that guide our work helps build equitable partnerships, meet community needs, manage institutional challenges, engage in critical digital inquiry, and strive toward ethical praxis."""@en ;
  dct:relation <https://doi.org/10.17613/thhxw-mbt65> ;  # DOI: newest version
  dct:isPartOf ex:book ;
  dct:issued "2024" ;
  dct:identifier <https://doi.org/10.17613/t8eh-p365> ;  # DOI: this version
  dct:license "Creative Commons Attribution Non Commercial Share Alike 4.0 International" ;
  dct:license <https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode> ;
  dct:rights <info:eu-repo/semantics/openAccess> .

# The book which the above chapter is a part of
ex:book
  dct:type <http://purl.org/coar/resource_type/c_2f33> ;  # COAR resource type: book
  dct:title "Digital Humanities in the Library: Challenges and Opportunities for Subject Specialists" ;
  bibo:isbn "9798892555548" .  
```
