# SRAP example: Journal article

This example shows how to represent a journal article in SRAP. It is based on this citation:

> Zaim, Sevim, Jun Heng Chong, Vissagan Sankaranarayanan, and Amer Harky. COVID-19 and multiorgan response. In: Current problems in cardiology 45, no. 8 (2020): 100618. Available at:  [10.1016/j.cpcardiol.2020.100618](https://doi.org/10.1016/j.cpcardiol.2020.100618)

## SRAP Turtle
This uses a two-part structure, with the article information in one structure and the journal information in another. In this way, the journal "record" is reusable.
The journal ISSNs have been looked up from the [ISSN Portal](https://portal.issn.org), all other information comes from the citation above.

```
@prefix ex:      <http://example.org/> .
@prefix dct:     <http://purl.org/dc/terms/> .
@prefix bibo:    <http://purl.org/ontology/bibo/> .

ex:article
a bibo:AcademicArticle ;
dct:creator "Sevim Zaim" ;
dct:creator "Jun Heng Chong" ;
dct:creator "Vissagan Sankaranarayanan" ;
dct:creator "Amer Harky" ;
dct:title "COVID-19 and multiorgan response." ;
dct:dateSubmitted "2019-02-02" ;
dct:date "2020" ;
dct:partOf _:B ;
bibo:volume "45" ;
bibo:issue "8" ;
bibo:pageStart "100618" ;
dct:identifier <https://doi.org/10.1016/j.cpcardiol.2020.100618> .

ex:journal
a bibo:Journal ;
dct:title "Current problems in cardiology" ;
bibo:issn "0146-2806" ;
bibo:eissn "1535-6280" .
```
