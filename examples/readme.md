# SRAP examples

## Rioxx1
A conversion of  [Rioxx1](rioxx1.xml) in XML to [SRAP in RDF](example1.ttl)
Challenges:
* The `rel` section of Rioxx goes into more detail than the rest of the record. So the main record has a link to the handle (https://spiral.imperial.ac.uk/handle/10044/1/76123) while the `rel` section links to the actual pdf (https://spiral.imperial.ac.uk/bitstream/10044/1/76123/2/POP19-AR-58732_accepted.pdf). These are both just `dct:identifier`s in SRAP. 


