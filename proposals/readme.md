## Proposals implementing Usage Board discussion at issue #94
These TAPs implement some of the proposals coming out of the usage board discussion. They have reduced detail to make them more readable, but the detail that has been removed does not interact with these changes. Any new names should be considered temporary, invented to make the TAP work.

* [srapcontrib.csv](srapcontrib.csv) implements the [diagram](https://github.com/dcmi/dc-srap/issues/94#issuecomment-3846733369) provided by Phil that has Person and Organization shapes, and PersonContribution and OrganizationContribution shapes. One difference from the diagram is that the Affiliation link here goes to the the Organization shape, not the OrganizationContribution Shape. The Affiliation is linked directly to the identity of the organization, not the organization as contributor that has a role.

  -  [Full diagram](https://github.com/user-attachments/files/27159353/srapcontrib-diagram.pdf)

  Highlight:
   ```
  SRAPResource --> PersonShape --> PersonContributionShape
  SRAPResourcce --> OrganizationShape --> OrganizationContributionShape
  ```
* [srapcontrib3.csv](srapcontrib3.csv) includes the separate shape for Affiliation with a name and an identifier. The PersonContribution uses (an as yet un-created) property srap:affiliation that links to this AffiliationShape. (No, I don't remember where this came up, so perhaps it isn't needed.)

  
* The file [srapcontributors.csv](srapcontributors.csv) attempts to follow the [diagram](https://github.com/dcmi/dc-srap/issues/94#issuecomment-3878558125). The relevant shapes are Person, Organization, and Contribution. The flow is from SRAPResource to Contribution; then a dct:contributor property in the Contribution shape has a valueShape of either Person or Organization.
    - [Full diagram](https://github.com/user-attachments/files/27159428/srapcontributors-diagram.pdf)
    - The TAP also has dct:creator and dct:contributor that link to Person and Organization. These rows will need to be removed if we decide that the model is to be:
```
SRAPResource --> contributionShape --> Person or Organization shape
```
* [srapcontribution2.csv](srapcontribution2.csv) is a reduced TAP, using mostly only rows needed for the example. This table makes use of bf:contribution with sub-shapes Agent, Role, and Affiliation.
    - [Diagram](https://github.com/user-attachments/files/27159548/srapcontribution2-diagram.pdf)

## SRAP flat ##
* [srapflat.csv](srapflat.csv) is a reduction of SRAP to a flat file. It does not include properties that are in shapes the SRAP DCTAP, such as `role`. Properties like `dct:contributor` are listed as taking literal values although they presumably could take IRIs or BNODES. Those would presume a related vocabulary file. It would also be possible to encode both a literal and an IRI by repeating the property in many cases, but with the caveat that the solution requires stable maintenance of the order of the fields in the record or dataset.
    - [Diagram](https://github.com/user-attachments/files/27159693/srapflat-diagram.pdf)
Background files that list the Finnish repo vocabulary and a comparison with SRAP are in the [finnVoc](finnVoc) folder.

## SRAP Diagrams
* [Main shape view](srapfull.png) is the main resource shape of this [SRAP DCTAP](../docs/srap.csv), with relationships to subshapes. The subshapes are empty boxes which are filled in in the [sub-shape diagram](rest.png)
