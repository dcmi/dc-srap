# Rioxx1 to SRAP

A conversion of  [Rioxx1](rioxx1.xml) in XML to [SRAP in RDF](example1.ttl)
Challenges:
* The `rel` section of Rioxx goes into more detail than the rest of the record. So the main record has a link to the handle (https://spiral.imperial.ac.uk/handle/10044/1/76123) while the `rel` section links to the actual pdf (https://spiral.imperial.ac.uk/bitstream/10044/1/76123/2/POP19-AR-58732_accepted.pdf). These are both just `dct:identifier`s in SRAP. 

## Rioxx1.xml

<?xml version='1.0' encoding='UTF-8'?>
<rioxx xsi:schemaLocation="http://www.rioxx.net/schema/v3.0/rioxx/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:rioxxterms="http://docs.rioxx.net/schema/v3.0/rioxxterms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <dc:description>The kinematic lower bound for the single scattering of neutrons produced in deuterium-tritium (DT) fusion reactions produces a backscatter edge in the measured neutron spectrum. The energy spectrum of backscattered neutrons is dependent on the scattering ion velocity distribution. As the neutrons preferentially scatter in the densest regions of the capsule, the neutron backscatter edge presents a unique measurement of the hydrodynamic conditions in the dense DT fuel. It is shown that the spectral shape of the edge is determined by the scattering rate weighted fluid velocity and temperature of the dense DT fuel layer during neutron production. In order to fit the neutron spectrum, a model for the various backgrounds around the backscatter edge is developed and tested on synthetic data produced from hydrodynamic simulations of OMEGA implosions. It is determined that the analysis could be utilized on current inertial confinement fusion experiments in order to measure the dense fuel properties.</dc:description>
    
    <dc:language>en</dc:language>
    
    <dc:source>1070-664X</dc:source>
    
    <dc:title>Neutron backscatter edge: A measure of the hydrodynamic properties of the dense DT fuel at stagnation in ICF experiments</dc:title>
    
    <dcterms:dateAccepted>2019-12-01</dcterms:dateAccepted>

    <rioxxterms:creator
            first-named-author="true">
        <rioxxterms:name>Crilly, A. J.</rioxxterms:name>
        <rioxxterms:id>https://orcid.org/0000-0002-0429-9332</rioxxterms:id>
    </rioxxterms:creator>

    <rioxxterms:creator>
        <rioxxterms:name>Appelbe, B. D.</rioxxterms:name>
    </rioxxterms:creator>

    <rioxxterms:creator>
        <rioxxterms:name>Mannion, O. M.</rioxxterms:name>
        <rioxxterms:id>https://orcid.org/0000-0001-8029-5109</rioxxterms:id>
    </rioxxterms:creator>

    <rioxxterms:creator>
        <rioxxterms:name>Forrest, C. J.</rioxxterms:name>
    </rioxxterms:creator>

    <rioxxterms:creator>
        <rioxxterms:name>Gopalaswamy, V.</rioxxterms:name>
        <rioxxterms:id>https://orcid.org/0000-0002-8013-9314</rioxxterms:id>
    </rioxxterms:creator>

    <rioxxterms:creator>
        <rioxxterms:name>Walsh, C. A.</rioxxterms:name>
        <rioxxterms:id>https://orcid.org/0000-0002-6639-3543</rioxxterms:id>
    </rioxxterms:creator>

    <rioxxterms:creator>
        <rioxxterms:name>Chittenden, J. P.</rioxxterms:name>
    </rioxxterms:creator>

    <rioxxterms:publication_date>2020-01-03</rioxxterms:publication_date>
   
    <rioxxterms:publisher>
        <rioxxterms:name>AIP</rioxxterms:name>
        <rioxxterms:id>https://isni.org/isni/0000000405564665"</rioxxterms:id>
    </rioxxterms:publisher>
    
    <rioxxterms:record_public_release_date>2020-01-20</rioxxterms:record_public_release_date>
    
    <dc:type>http://purl.org/coar/resource_type/c_2df8fbb1</dc:type>

    <rioxxterms:grant
            funder_name="Engineering and Physical Sciences Research Council"
            funder_id="https://ror.org/0439y7842">
        EP/P010288/1
    </rioxxterms:grant>
    
    <rioxxterms:grant
            funder_name="Lawrence Livermore National Laboratory"
            funder_id="https://ror.org/041nk4h53">
        B618573
    </rioxxterms:grant>

    <dc:identifier>https://spiral.imperial.ac.uk/handle/10044/1/76123</dc:identifier>

    <dc:relation
            rel="item"
            type="application/pdf"
            coar_version="https://purl.org/coar/version/c_ab4af688f83e57aa"
            coar_type="https://purl.org/coar/resource_type/c_6501"
            deposit_date="2010-01-20"
            resource_exposed_date="2020-01-20"
            access_rights="https://purl.org/coar/access_right/c_abf2"
            license_ref="https://creativecommons.org/licenses/by-nc-nd/4.0">
            https://spiral.imperial.ac.uk/bitstream/10044/1/76123/2/POP19-AR-58732_accepted.pdf
    </dc:relation>

    <dc:relation rel="cite-as">http://hdl.handle.net/10044/1/76123</dc:relation>
    
    <rioxxterms:ext_relation
            rel="cite-as"
            coar_type="http://purl.org/coar/resource_type/c_6501"
            coar_version="http://purl.org/coar/version/c_970fb48d4fbd8a8">
        https://doi.org/10.1063/1.5128830
    </rioxxterms:ext_relation>
</rioxx>

## SRAP.ttl

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> . 
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix bibo: <http://purl.org/ontology/bibo/> .
@prefix schema: <https://schema.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix srap: <http://example.com/srap/>  .

<abcd> dct:description "long description here" ;
	dct:language "en" ;
	dct:title "Neutron backscatter edge: A measure of the hydrodynamic properties of the dense DT fuel at stagnation in ICF experiments" ;
	dct:source "1070-664X" ;
	dct:creator _:b1 ;
	dct:creator _:b2 ;
	dct:creator _:b3 ;
	dct:publisher _:b4 ;
	dct:type <http://purl.org/coar/resource_type/c_2df8fbb1> ;   # research article
	dct:type <https://purl.org/coar/resource_type/c_6501> ;  # journal article
	dct:date "2020-01-20" ;
	schema:funding _:b5 ;
	dct:identifier <https://spiral.imperial.ac.uk/handle/10044/1/76123> ;
        dct:rights <https://purl.org/coar/access_right/c_abf2> ;   # open access
	dct:license <https://creativecommons.org/licenses/by-nc-nd/4.0> ;
	dct:format <https://www.iana.org/assignments/media-types/application/pdf>
.

_:b1 a foaf:Person ;
	foaf:name "Crilly, A. J." ;
	dct:identifier <https://orcid.org/0000-0002-0429-9332> .

_:b2 a foaf:Person ;
        foaf:name "Appelbe, B. D." .

_:b3 a foaf:Person ;
        foaf:name "Mannion, O. M." ;
        dct:identifier <https://orcid.org/0000-0001-8029-5109> .

_:b4 a foaf:Organization ;
	foaf:name "AIP" ;
	dct:identifier <https://isni.org/isni/0000000405564665> ;
	srap:role <http://id.loc.gov/vocabulary/relators/pbl> .

_:b5 a schema:Grant ;
	schema:funder "Lawrence Livermore Laboratory" ;
	schema:funder <https://ror.org/0439y7842> ;
	schema:identifier "EP/P010288/1" .


