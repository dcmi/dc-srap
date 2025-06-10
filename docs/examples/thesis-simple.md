# SRAP example: Simple thesis

This example shows how to represent a Master's thesis using SRAP. It is based on the following citation:

> Ramsay, Mark F. 1999. Longitudinal study of spatial learning in the PDAPP mouse. Master's thesis, University of Edinburgh. https://hdl.handle.net/1842/39891

## SRAP Turtle

```
@prefix ex:      <http://example.org/>.
@prefix srap:    <http://example.org/srap/>.  # placeholder namespace for new properties
@prefix dct:     <http://purl.org/dc/terms/>.

ex:simpleThesis
  dct:creator "Ramsay, Mark F." ;
  dct:contributor "Morris, R. G. M. (Richard G. M.)" ; # LCNAF preferred form of name for academic supervisor
  dct:title "Longitudinal study of spatial learning in the PDAPP mouse" ;
  dct:abstract "Dementia is a psychiatric disorder of old age. Alzheimer's Disease (AD) is the most common form, accounting for 50-70% of all cases." ; # abbreviated from full abstract
  dct:description "Signature redacted" ;
  dct:language "en-GB" ;
  dct:dateSubmitted "1998" ;
  dct:dateAccepted "1999" ;
  dct:issued "2023-02-23" ;
  dct:publisher "University of Edinburgh" ;
  srap:scholarlyUnit "Edinburgh Medical School" ;
  dct:subject "Alzheimer's disease" ; # LCSH preferred form for subject
  dct:subject "Amyloid beta-protein precursor" ; # LCSH preferred form for subject
  dct:format "application/pdf" ;
  dct:identifier	<https://hdl.handle.net/1842/39891> ; # IRI for the thesis
  srap:url "https://era.ed.ac.uk/bitstream/handle/1842/39891/RamsayMF_1999_redux.pdf" ; # URL for download of PDF document
  dct:type coar:c_bdcc . # COAR resource type for master's thesis
```
