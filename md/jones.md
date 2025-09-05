# Jones Javascript Details

The script is found at `/scripts/evaluator`

## Installation

The script runs on NodeJS using the `pnpm` package manager.
- NodeJS and `npm` (the basic package manager) can be installed by following instructions on [this website](https://nodejs.org/en/download).
  - The script was written using `node` version `v20.17.0`. Any newer version should work fine; if you want to be safe you can install any of the `v20.xx.x` versions.
- If you installed `node` using a prebuilt binary, you may also have to install `pnpm` via [this website](https://pnpm.io/installation), for example using `corepack`.
  - For those feeling this is too complicated, all the following can be done without `pnpm`, just replace `pnpm` with `npm` in all instructions that follow.

After installing, open a terminal in the `/scripts/evaluator` folder and run `pnpm install` to install the dependencies.

If you like, you can extract the list of knots `PD_3-16.txt` into `/scripts/evaluator/data` and work from there.


## Script Overview

### Running and Output
To run, edit `index.ts` and run `pnpm run r` in the `/scripts/evaluator` folder.
- By default, this calculates the jones polynomial for the figure-eight knot.

The output is a polynomial in the form of a JSON object (one on each line). For example
```
{"-2":2, "-1":-1, "0":3, "1":1, "2":7}
```
is the polynomial `2*q^-2 - q^-1 + 3 + q + 7*q^2`. This is also the form in which most the data in this repository is stored.

### What is actually being run?
The main calculation scripts are in `/scripts/evaluator/modules`
- `jones`
  - `jones.ts`: basic code assembling the Kauffman polynomial and writhe into the Jones polynomial
  - `kauffman-bracket.ts`: constituents of the main function `kauffmanBracket` which calculates what its name says
- `pd`
  - `pd.ts`: various scripts dealing with planar diagrams; including `writhe`
- `poly`
  - `poly.ts`: not-painfully-slow 1-variate polynomial implementation using js objects. Use `sortedStringify` to sort the keys; this is an easy way to check if two polynomials are the same.
  - `2-poly.ts`: parsing and sorting functions for n-variate polynomials
    - the included parsing function parses 2-variate polynomials from some form of WolframScript output
  - `parsePoly.ts`: various specialised polynomial parsing functions (into js objects)

The file `index.ts` is a gateway to a basic example.

### Algorithm Strategy
The algorithm for the Kauffman bracket essentially the same as the one explained [here](https://github.com/dtubbenhauer/quantumdata/blob/main/md/javascript-script.md) with different skein relations.
The skein relations for the Kauffman bracket can be found with an easy online search, or decoded from the `/modules/jones/kauffman-bracket.ts`.

### Memory limit!
By default, V8 (the engine used by NodeJS) has a 4GB memory allocation limit. For larger knots/graphs, more memory is needed.
In this situation, one can instead run `pnpm run ts-node-mem index.ts` to raise this limit to 16GB. If your device's memory is less than this, it will still work due to the magic of memory paging.

You can also use `ts-node-mem32` or manually change the numbers in `/scripts/evaluator/package.json`, under `scripts`.
