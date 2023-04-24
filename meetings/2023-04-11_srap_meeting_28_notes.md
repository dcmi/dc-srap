# DC SRAP meeting 28

Time: 2023-04-11, 15:00-16:00 UTC
Place: Zoom, https://helsinki.zoom.us/j/67426809443?pwd=QmJEdjY0dXFkMC9VWjNnSGx6cFlRdz09

Present: Alasdair, Karen, Freddy, Osma

## 1. Opening of the meeting

Alasdair opened the meeting.

## 2. Appointment of the minute-taker

Osma will take the minutes.

## 3. Approval of the agenda

Draft agenda approved.

## 4. Minutes of previous meeting

2023-03-28, number 27. [Draft](https://github.com/dcmi/dc-srap/blob/main/meetings/2023-03-28.srap_meeting_27.md) on GitHub from Karen – circulated by Alasdair with the agenda

## 5. Enumeration

GitHub issue: https://github.com/dcmi/dc-srap/issues/28

Since the last meeting:

Defer further discussions until Jan is available

## 6. SRAP as a DCTAP profile (Karen)

The latest version: https://github.com/dcmi/dc-srap/blob/main/profile/srap.csv 

Since the last meeting:

Juha has aligned the two versions of the profile. The TAP now has all properties from the original version

## 7. Related dataset / code (Karen)

Since the last meeting:

Karen has re-opened issue #9 for further discussion

Are related resources including data sets and code adequately covered by dct:references and dct:source?
Do the proposed terms offer greater specificity?

Osma/Karen: Looking at DataCite…they have (in the data paper example) an element relatedItem which can be used to link from a Dataset to a closely related journal article or other paper. It's the inverse of what we would need here.

Karen: relatedDataset seems to add only information about the type of object

Osma: Agree that having a specific property just to be able to express the type doesn't add much. But the relationship between a paper and a dataset seems more specific than just dct:references or dct:relation.

Osma: A typical example is a machine learning paper that links to code on GitHub and published models on a file sharing platform.

Karen: Archaeologists publish papers that link to thousands of photographs.

Alasdair: dct:relation doesn't say what, how or why it's related. We need to go a bit further

Karen: The data type is an aspect of the resource. There may be other reasons for coining subproperties for the relationship. It could be "based on" but it needs to be more specific.

Osma: We're interested in a situation where the paper and the dataset are published roughly simultaneously by roughly the same people.

Alasdair: What about an article that debunks bad research by using the dataset that was published earlier by others?

Karen: I see that as a citation

Alasdair: So we want to limit this to the situation where the raw data is published alongside the paper?

Karen: We look at things that need to be cataloged as they are received

Osma: We seem to be agreeing on the meaning of the property but can't come up with a good name for it!

Alasdair: I can ask a friend

## 8. WG 16 Report to SC4, May 2023 meeting

Juha has prepared a report on the work of SRAP-WG and circulated to the group

Decision: Discuss when Juha is available again

## 9. AOB

Karen may be travelling during the next meeting (25 Apr)

Osma can chair the next meeting if necessary.

## 10. Closure of the meeting

Alasdair closed the meeting.
