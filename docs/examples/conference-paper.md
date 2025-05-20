# SRAP example: Conference paper

This example shows how to represent a conference paper in SRAP. It is based on the following citation:

> AlOmar, Eman, Mohamed Wiem Mkaouer, and Ali Ouni. "Can Refactoring Be Self-Affirmed? An Exploratory Study on How Developers Document Their Refactoring Activities in Commit Messages." In 2019 IEEE/ACM 3rd International Workshop on Refactoring (IWoR), Montreal, QC, Canada, 2019, pp. 51-58. https://doi.org/10.1109/IWoR.2019.00017

## SRAP metadata

```
ex:A
a srap:SRAPResource ;
dct:type coar:c_5794 ;
dct:creator "Eman AlOmar" ;
dct:creator "Mohamed Wiem Mkaouer" ;
dct:creator "Ali Ouni" ;
dct:title "Can refactoring be self-affirmed? an exploratory study on how developers document their refactoring activities in commit messages." ;
dct:issued "2019" ;
bibo:pageStart "51" ;
bibo:pageEnd "58" ;
bibo:presentedAt "International Workshop on Refactoring IEEE Computer Society Association for Computing Machinery and International Conference on Software Engineering. 2019" ;
dct:partOf ex:B .

ex:B
a bibo:Proceedings ;
dct:title "Proceedings of the 2019 IEEE/ACM 3rd International Workshop on Refactoring" ;
dct:publisher "Los Alamitos CA: IEEE Computer Society Conference Publishing Services" ;
dct:identifier <https://doi.org/10.1109/IWoR47447.2019> ;
dct:type coar:c_f744 .
```
