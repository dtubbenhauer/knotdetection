import fs from "fs";
import readline from "readline";

import { createBar } from "./scripts/helper/bar";
import timer, { profiler, timerPrint } from "./modules/timer"; // time it and print
import { performance } from "perf_hooks";

const nPrimeKnots = [
  1, 1, 2, 3, 7, 21, 49, 165, 552, 2176, 9988, 46972, 253293, 1388705,
];

let nPrimeKnotsCumulative = [
  1, 2, 4, 7, 14, 35, 84, 249, 801, 2977, 12965, 59937, 313230, 1701935,
];

import { jones } from "./modules/jones/jones";

const myKnot = JSON.parse("[[4,2,5,1],[8,6,1,5],[6,3,7,4],[2,7,3,8]]");
console.log(jones(myKnot));
