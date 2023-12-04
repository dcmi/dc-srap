## The citation:

```
Zaim, Sevim, Jun Heng Chong, Vissagan Sankaranarayanan, and Amer Harky.
COVID-19 and multiorgan response. In: Current problems in cardiology 45,
no. 8 (2020): 100618. Available at:  10.1016/j.cpcardiol.2020.100618
```

## SRAP
This uses a two-part structure, with the article information in one structure and the journal information in another. In this way, the journal "record" is reusable.

```
A:
dct:creator "Sevim Zaim"
dct:creator "Jun Heng Chong"
dct:creator "Vissagan Sankaranarayanan"
dct:creator "Amer Harky"
dct:title "COVID-19 and multiorgan response."
dct:dateSubmitted "2019-02-02"
dct:partOf _:B
dct:type bibo:academicArticle
bibo:volume "45"
bibo:issue "8"
dct:date "2020"
bibo:pageStart "100618"

_:B
dct:type bibo:journal
bibo:journal "Current problems in cardiology"
dct:identifier kkkkkk
```

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
