DC SRAP meeting 24

Time: 2023-02-14, 15:00-16:00 UTC, 17.00-18.00 CET

Place: Zoom, https://helsinki.zoom.us/j/66651804340?pwd=ZnpWNzBOYlIraTE3SnNzeEd4ZjYyUT09 

---------------------------------------------------------
1. Opening of the meeting

---------------------------------------------------------
2. Appointment of the minutes taker (Juha will act as the chair until 16:00)

---------------------------------------------------------
3. Approval of the agenda

---------------------------------------------------------
4. Draft minutes of previous meeting 

2022-01-31, number 23 
https://docs.google.com/document/d/1suupaTzP0-n4RmBLjgptiII0UvYrJmGjLE3IWjRJhSA/edit

---------------------------------------------------------
5. Scope of the SRAP work (Karen)

There are needs that are getting confounded:
-    the need for more detail in DCterms to describe journal articles
-    the need for an application profile, SRAP, for scholarly resources, which will use some terms from DC terms and some from other vocabularies
-    the need for an XML version of the SRAP AP

If we don't clarify the separation between these our job will be much more difficult. And I assume that if SRAP is a DCterms application profile it must be at its basis an RDF AP, although an XML version of that AP is surely possible.

My primary interest is in the first bullet above - making sure that people can minimally describe jour-nal articles within the DC terms space. I think that is something that has been lacking. A few added terms could solve that, IMO. The second bullet point could be achieved with a DCTAP (https://dcmi.github.io/dctap/TAPprimer.html). 

The third is outside of DC's interest, also IMO.


---------------------------------------------------------
6. Usage of unconstrained RDA properties  

Some properties discussed in the previous meeting have been added to the draft profile. Most of them are MARC relators; only one (reviser) is from RDA.-

More properties to add? Keep in mind that we are only providing examples. Some new candidates have been added to the draft profile. 

Other code lists to consider? 

---------------------------------------------------------
7 Host item information 

GitHub issue: https://github.com/dcmi/dc-srap/issues/28

What are the use cases?

Use case 1: Locating the component part within the host 

With digital resources, the resource can usually be retrieved with URI (PID or URL). If so, it might seem that providing host item information is not necessary. However, if the URI becomes non-functional, knowing for instance the volume and issue in which the article was published can be essential. URI can be provided in this element as well, in order to support use case 2. 

SRAP should allow the users to provide full and accurate host item information. For serial articles, this might include journal title, ISSN, volume, part, issue and page numbers. Page numbers may be replaced by logical components of the text (chapter x, paragraph y instead of page x-y).

Excluded:

Host item information does not need to be structured, since it is intended for human readers. Machine understandable data would be very complex, given the diversity of component parts that may be relevant for SRAP host documents.  

Use case 2: Support for creating citations 

Host item information in a SRAP record should contain all the elements needed for creating sufficiently full bibliographic citation when the resource is a component part such as an article in a journal, chapter in a book or presentation in conference proceedings. 

Specification should not limit the language used  

Excluded

Machine readability not required, so the information can be provided in a single property as a text string. 

Issues 

There are about 8000 different citation guidelines, and there is a lot of variety in how the host item information should be provided and what the data elements and their order should be. 

We cannot specify a rule for how to structure the data, since the structure is dependent on citation guidelines used. 

The easiest solution is to recommend use of ISO 690:2021, and provide some examples from it.The standard does not require certain layout, but it specifies data elements relevant in this context, and provides examples of how citations may look like. 

For instance: 

American Journal of Science. Series 5, vol. 15, no. 88. 1928. pp. 287-296. Available from: https://doi.org/10.2475/ajs.s5-15.88.287

Silva Fennica, vol. 54(2), p. 2. Available from: https://doi.org/10.14214/sf.10362.

MARC format has similar elements but different layout: 

Horizon. Vol. 17, no. 98 (Feb. 1948), p. 78-159. ISSN 0262-1223

---------------------------------------------------------
8. Any other business

---------------------------------------------------------
9. Closure of the meeting

