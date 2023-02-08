# DC SRAP meeting 23

Minutes of previous meeting approved.

## #5 unconstrained RDA properties
could use these as well as MARC relator codes

Are there RDA properties we should use?

Alastair: has a spreadsheet of properties that relate a resource to an agent-includes links to subproperties
	there are many such properties in the creative arts, and the legal area
	there is a table linking marc21 to RDA on the RDA registry site
	there are a few in RDA that are not in MARC
	for academic theses, RDA has 'has respondent' which can be defends or opposes while MARC has those separately
Juha: the documentation is only examples
Alastair: there could be a thesis in the creative arts that would use some of these 
ACTION: Alastair will pick examples and send to list; Juha will add to document; the lists will be combined; most will be related to theses
Osma: what is needed for article? Alastair: funding? 

## #6 Host Item Information
		 	 	 	 	 	
If a scholarly resource is a component part of a host document (such as an article published in a journal) SRAP should allow provision of host item information not only as a part of bibliographicCitation, but independently.

kc: 3 different problems: person find the article; sfx-like function; find journal itself

kc: what is the use case?

osma: theses in Dspace, in a publication series with issn

Jan: a related item just had an identifier, but aggregators wanted more structured information

osma: how specific is the information to the resource in hand? pagination is specific to the article, but volume and number is not unique to that article; then the journal name and issn are more general. Maybe use dct:isPartOf and link to the series with name and issn. Problem is that DC is a flat structure, can't link from article to series

kc: enumeration as a property seems to fit with DC. but doesn't give you easily parsed volume and number

Jan will share what is being done in Datacite. Includes chapters in books. 

kc: may need another issue for encoding the type of resource

jan: schemeURI is the type of identifier scheme used (e.g. issn). Looked at crossref
-> resource type, document type, volume, issue, number, first & last pages

Do examples on github issue.

osma: core question is: what is the use case?

Alastair: could have a single property with a rule for how to structure the data; but it's unlikely that we can count on the data being input consistently.

ACTION: All, create examples
