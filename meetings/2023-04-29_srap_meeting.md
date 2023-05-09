	 	 	 	 	 	
DC SRAP meeting 29

Time: 2023-04-25, 15:00-16:00 UTC

Place: Zoom, https://helsinki.zoom.us/j/67426809443?pwd=QmJEdjY0dXFkMC9VWjNnSGx6cFlRdz09
1. Opening of the meeting
2. Appointment of the minutes taker
3. Approval of the agenda
4. Minutes of previous meeting
2022-04-11, number 28. A draft has been sent to the list and saved to GitHub by Osma.

5. SRAP and ISO TC46/SC4/WG16 (Sam)
Message from Sam Oh to the SRAP mailing list on 2023-04-21:

I would like to attend the next SRAP meeting since I have a concern regarding the future ISO work of SRAP. I am the chair of ISO TC46/SC4 (Technical Interoperability) where the SRAP will be standardized if that is the desire of the DCMI community. Since Juha is retiring, we need to find someone who can be the convenor and project leader of SC4/WG16 (Dublin Core).

Questions for discussion:

Do we 	want/expect SRAP, after it has been finalized and published as an 	Application Profile within the Dublin Core project, to be 	standardized in ISO TC46/SC4/WG16?

If so, who 	would represent SRAP in WG16?

Osma: this would be published on the dc site, not as an ISO standard. But there may be some new terms. Would the ISO standard follow the changes? Or just on a 5-year cycle

Sam: I can be convenor of the working group; or it can be re-opened later when needed

Alastair: how does this group relate to the usage board?

Sam: Usage board has final authority

Osma: we are making use of DCTAP; could that be an ISO standard?

kc: have not agreed to formalize dctap vocabulary

sam: advantage is that some countries require ISO standards

osma: has ISO standard for DC made a difference in uptake?

sam: thinking to close down WG16 for now; can re-open as needed

kc: how does srap become a dc profile? How is it endorsed? 

osma: would like to see this in the specifications menu on the web site

kc: will there be other APs? 

alastair: this is different because it is being done within dcmi

kc: srap including seriality generally; should we be looking at the broad concepts?

osma: srap provides a focus for deciding

6. Enumeration

GitHub issue: https://github.com/dcmi/dc-srap/issues/28

On previous calls, we have discussed the need for fields and structures to express volume, number etc. in a way that is compatible with widely used formats and tooling. We have looked at how e.g. schema.org, DataCite and ISO 690:2021 express this kind of information. Is it possible now to make some progress on defining the elements we need for SRAP?

kc: should we also be looking at citation software needs? most software just does volume and number; is that enough? documentation will need to address the other cases

7. Related dataset

GitHub issue: https://github.com/dcmi/dc-srap/issues/9

On the previous call (28), we discussed the need and the name for a property that links a SRAP resource (e.g. a paper or thesis) to a data set that is published at (roughly) the same time by (roughly) the same people. For example, the data set that a paper was based on, or that was a byproduct of the research. The proposed property name “relatedDataset” didn’t feel right, because it encodes the type of the object (Dataset) into the property name, when it would be better to use RDF types/classes instead to encode type information.

8. SRAP as a DCTAP profile

The latest version: https://github.com/dcmi/dc-srap/blob/main/profile/srap.csv

9. Any other business

ACTION: come up with examples for Nishad #31

10. Closure of the meeting
