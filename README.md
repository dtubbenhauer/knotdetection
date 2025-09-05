# Code and Erratum for *Rational Khovanov homology detects alternating links with probability zero*

We collected a bit of data and other things relevant for the paper *Rational Khovanov homology detects alternating links with probability zero*
<a href="https://example.com">(Coming soon)</a> on this page.

An Erratum for the paper *Rational Khovanov homology detects alternating links with probability zero* can be found at the [bottom of the page](#erratum).

## Contact

If you find any errors in the paper *Rational Khovanov homology detects alternating links with probability zero* **please email us**:

[dtubbenhauer@gmail.com](mailto:dtubbenhauer@gmail.com?subject=[GitHub]%web-reps)

[victor.l.zhang@unsw.edu.au](mailto:victor.l.zhang@unsw.edu.au?subject=[GitHub]%web-reps)

Same goes for any errors related to this page.

## Interactive webpage

It is much more fun to see the data in interactive plots: [Click](https://dustbringer.github.io/web--knot-invariant-comparison/stats/homology)

On that side one can find all the comparison statistics and plots.

## Files in this repository

### Invariants
The invariants used are available under `/invariants`. We only include the polynomials for 3-16 crossings (when applicable) due to space limitations.

A majority of the polynomials are stored in a JSON format explained in [this page](md/jones.md). Most of the files are compressed in the `.7z` format.

Other notes
- Apart from HOMFLYPT homology, the 3-16 data is all calculated from the PD notation database in [KnotInfo](https://knotinfo.org/homelinks/database_download.php)
- Naming is slightly different from the paper
  - SL3 is called `a2`
  - HFK is called  `hfk2`
  - Odd Khovanov homology is called `khodd`
- The (partial) HOMFLYPT homology data are found in
  - `partial-results-homflypt-homology.csv` - base data
  - `homflypt-homology-partial-3-13-dict.out` - data parsed into the aforementioned format. Here, missing and errored knots are given unique JSON text eg. `{"missing12x42":0}` and `{"error42":0}` respectively.
    - `12x` means 12 crossings
    - the number afterwards means nothing, it is just for uniqueness

### Jones polynomial script
Our Javascript script to calculate the Jones polynomial is available at `/scripts/evaluator`. See [this page](md/jones.md) for more details and how to run it.

## Other

To do

# Erratum

Empty so far.
