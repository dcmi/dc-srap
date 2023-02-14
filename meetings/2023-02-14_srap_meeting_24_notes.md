
Scribe: Tom

Karen: Are we intending to make it possible to describe 
journal articles in Dublin Core. It will eventually get to 
the Usage Board. Then the issue of SRAP as an application 
profile versus SRAP as an XML format which, to me, is out 
of scope because Dublin Core is in RDF. If they use in XML, 
it is up to them, but it is an RDF environment.

Osma: This started with need to use flat DC metadata in 
DSpace. One thing unclear to me: How flat shoudl we try to 
make this? Historically, has been pretty much flat except 
for agendas. Not sure whether that is something we should 
try to do, or get more detailed. We should be able to 
model chapters, journals.

Tom: SWAT...

Karen: In DCTAP discussions: vocabulary can be flat and model 
can have more structure. Simple to have structure reside in 
application profile even if vocabulary.

Karen Coyle to Everyone (Feb 14, 2023, 16:11)
https://www.dublincore.org/specifications/dublin-core/collection-description/collection-ap-summary/

Juha: From my perspective, biggest problem with SWAP was 
its use of FRBR, with separate records for entities.

Karen: Bibframe and Fabio have separate records. 

Juha: Bibframe puts Work and Expression together.

Karen: Still have three entities. There will be library 
systems that support Bibframe.

Juha: Do not know if they are supporting Work and 
Manifestation records but you can use Bibframe as 
environment: Folio... First question is whether Dublin 
Core is flat. For efficient tool, we need structure.

Karen: Suggest looking at using DCTAP for SRAP because 
it really does define application profiles. You can have 
as much structure as you want in the profile - does not 
have to be in the vocabulary.

Juha: How do you suggest we proceed?

Karen: Awhile ago I put a DCTAP in Github. [Karen 
shares screen.] Tom, do you agree?

Tom: @@@@

Karen: DCTAP lets you define "shapes". Separate 
structures for everything that you need to say 
something about in your metadata. Knowing that you 
can go this way - to truly describe your application 
profile in a way you can apply - gets us around 
problem of "person and affiliation".

Tom: @@@@

Osma: Best if we can define to be as useful as 
possible, avoid redundant information, which means 
defining entities. I think using DCTAP approach makes 
alot of sense. 

Tom: @@@@

Juha: Karen, can you do this?

Karen: I can redo this from scratch. Will simplify 
as much as possible. But at some point we need to define 
entities.

Juha: Worried about adding things like Journals. So many 
potential entities. 

Karen: We have dct:isPartOf. Whether we want to describe 
journals themselves separately is a different question.
Also, in future: what is a scholarly resource?

Juha: When we updated ISO 690:21, citations, had such 
discussions. With SRAP, good understanding of "typical" 
scholarly resources.

Karen: Conference proceedings? Cannot exclude because 
very much cited.

Juha: Yes.

Karen: Also, there are plenty of citation formats.

Juha: Yes, about 8,000. 

Karen: I'm thinking Bibtex, CiteSeer, CrossRef.

Juha: SRAP tries to cover those elements that are 
typical when citing scientific articles. We do not need 
to [model] everything or will never finish.

Karen: Those examples are question simple: ten to 
twenty data elements each. What are we doing that is 
different?

Juha: We wanted to provide tool for describing 
masters theses. Would like to summarize: Karen will 
update.

Osma: How does this relate to what we have?

Tom: @@@ Model independently of CSV.

Juha: Agree we are doing application profiles, but when 
it comes to XML version, could be separated. NLF could 
work on this.

Karen: DCTAP that generates XML?

Osma: We will soon update from DSpace 5 to 7, which 
has a more modern metadata model.

Juha: Will be relevant to many other parties but 
for our group would be relevant only if there are things 
not easily implementable in XML.

---------------------------------------------------------
Use of unconstrainted RDA properties

Juha: Have added properties. Role selection. Suggest 
we leave it at that. 

Tom: What is the namespace?

Osma: https://www.rdaregistry.info/Elements/u/ .
I think this is officially part of RDA.

Karen: I think it is owned by ALA. 

Osma: There is a companion Github repo which 
says it is maintained by RDA.

Juha: Trivial to add new code lists if necessary.

---------------------------------------------------------

Juha: Osma wanted to see use cases, so here are two (see 
agenda). Metadata provided in SRAP record has to provide 
component parts.

Karen: What about automatic linking? 

Juha: Requires a persistent identifier.

Karen: SFX creates them out of citations. If there 
is no identifier, can still search using author, etc.
SRAP is only for eJournals?

Juha: If you want to help people locate, in some 
cases PID is only thing necessary and things like 
issue number, etc, are redundant. 

Provide in structured form, or is text enough?

Osma: We have examples of things that have that 
structure - would be sad if we had to squeeze all 
of that into a single field. Also, data model 
affects UI for data entry - making it easy to enter 
data - so better to have separate fields. Issue number, 
volume number. If had to enter as single string, would 
not be done consistently.

Karen: Volume, issue, pagination. Cannot be run 
together. Also because one of main uses is pulling 
it into citation software.

Juha: Agree that this information needs to be 
structured.

Osma: What Jan showed last time was interesting 
because DataCite has this covered. Can you share 
that draft?

Jan: Yes - also useful from our point of view.

Juha: Can provide some information about ISO 690.

Karen: Everyone has Volume, etc. Does it make sense 
to make DC properties for these? We could have a DCTAP 
that could offer a choice between Schema.org, BIBO.
Anna wanted us to show mappings.

Tom: Perhaps you mean defining a specific profile - PLUS
a context document describing how SRAP relates to other
models, how its properties map.

Jan: That would be interesting to the DataCite community 
too - people using different things.

---------------------------------------------------------

Karen: There is a Github issue about enumeration. 
Shouldbn't be too difficult. 

Osma: If we can describe how to convert to Bibtex.
