## The citation:

```
Zaim, Sevim, Jun Heng Chong, Vissagan Sankaranarayanan, and Amer Harky.
COVID-19 and multiorgan response. In: Current problems in cardiology 45,
no. 8 (2020): 100618. Available at:  10.1016/j.cpcardiol.2020.100618
```

## SRAP
This uses a two-part structure, with the article information in one structure and the journal information in another. In this way, the journal "record" is reusable.
The journal ISSNs have been looked up from the [ISSN Portal](https://portal.issn.org), all other information comes from the citation above.

```
@prefix ex:      <http://example.org/> .
@prefix dct:     <http://purl.org/dc/terms/> .
@prefix bibo:    <http://purl.org/ontology/bibo/> .

_:A
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


_:B
a bibo:Journal ;
dct:title "Current problems in cardiology" ;
bibo:issn "0146-2806" ;
bibo:eissn "1535-6280" .
```
## Visualization

Created from the above Turtle data using [RDF Sketch](https://sketch.zazuko.com/)

![image](https://github.com/dcmi/dc-srap/assets/1132830/55c99e29-7666-47a2-9d3f-fbadc44e2952)

## Flat version

Where only a flat record format is possible, metadata creators may use models like these:

### Minimal one-shape A
```
dct:creator "Sevim Zaim"
dct:creator "Jun Heng Chong"
dct:creator "Vissagan Sankaranarayanan"
dct:creator "Amer Harky"
dct:title "COVID-19 and multiorgan response."
dct:identifier “10.1016/j.cpcardiol.2020.100618”
dct:partOf  "Current problems in cardiology. 45, no. 8 (2020): 100618"
dct:dateSubmitted "2019-02-02"
dct:type bibo:academicArticle
```
### Minimal one-shape B
```
dct:creator "Sevim Zaim"
dct:creator "Jun Heng Chong"
dct:creator "Vissagan Sankaranarayanan"
dct:creator "Amer Harky"
dct:title "COVID-19 and multiorgan response."
dct:identifier “10.1016/j.cpcardiol.2020.100618”
dct:bibliographicCitation "Current problems in cardiology." 45, no. 8 (2020): 100618
dct:dateSubmitted "2019-02-02"
dct:type bibo:academicArticle
```
### Minimal one shape C
```
dct:creator "Sevim Zaim"
dct:creator "Jun Heng Chong"
dct:creator "Vissagan Sankaranarayanan"
dct:creator "Amer Harky"
dct:bibliographicCitation "COVID-19 and multiorgan response." Current problems in cardiology. 45, no. 8 (2020): 100618
dct:identifier “10.1016/j.cpcardiol.2020.100618”
dct:dateSubmitted "2019-02-02"
dct:type bibo:academicArticle
```
