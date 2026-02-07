## Proposals implementing Usage Board discussion.
These TAPs implement some of the proposals coming out of the usage board discussion. They have reduced detail to make them more readable, but the detail that has been removed does not interact with these changes. Any new names should be considered temporary, invented to make the TAP work.

* `srapcontrib.csv` implements the [diagram](https://github.com/dcmi/dc-srap/issues/94#issuecomment-3846733369) provided by Phil, with one exception: the affiliation link goes to the OrganizationContributionShape. That shape and the affiliation shape have the same properties. That may not work, but in the original SRAP model there was one Organization shape that would be used for organizations as contributors and as affiliations.
* `srapcontrib3.csv' includes the separate shape for organization contribution. 
