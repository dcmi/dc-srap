## Proposals implementing Usage Board discussion at issue #94
These TAPs implement some of the proposals coming out of the usage board discussion. They have reduced detail to make them more readable, but the detail that has been removed does not interact with these changes. Any new names should be considered temporary, invented to make the TAP work.

* [srapcontrib.csv](srapcontrib.csv) implements the [diagram](https://github.com/dcmi/dc-srap/issues/94#issuecomment-3846733369) provided by Phil, with one exception: the affiliation link goes to the OrganizationContributionShape. That shape and the affiliation shape have the same properties. That may not work, but in the original SRAP model there was one Organization shape that would be used for organizations as contributors and as affiliations.
* [srapcontrib3.csv](srapcontrib3.csv) includes the separate shape for organization contribution.
* The file [srapcontributors.csv](srapcontributors.csv) attempts to follow the [diagram](https://github.com/dcmi/dc-srap/issues/94#issuecomment-3878558125) that links SRAPResource to PersonShape and OrganizationShape, and those to the Contributor shape; and in addition has links from the contributor shape to PersonShape and OrganizationShape.
* [srapcontribution2.csv](srapcontribution2.csv) is a reduced TAP, using mostly only rows needed for the example. This table makes use of bf:contribution with sub-shapes Agent, Role, and Affiliation.

## SRAP flat ##
* [srapflat.csv](srapflat.csv) is a reduction of SRAP to a flat file. It does not include properties that are in shapes the SRAP DCTAP, such as `role`. Properties like `dct:contributor` are listed as taking literal values although they presumably could take IRIs or BNODES. Those would presume a related vocabulary file. It would also be possible to encode both a literal and an IRI by repeating the property in many cases, but with the caveat that the solution requires stable maintenance of the order of the fields in the record or dataset.

Background files that list the Finnish repo vocabulary and a comparison with SRAP are in the [finnVoc](finnVoc) folder.

## SRAP Diagrams
* [Main shape view](srapfull.png) is the main resource shape of this [SRAP DCTAP](../docs/srap.csv), with relationships to subshapes. The subshapes are empty boxes which are filled in in the [sub-shape diagram](rest.png)
