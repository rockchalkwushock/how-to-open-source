/* eslint-disable no-console */

const rcjh = require('./package/lib').rcjh;
const sum = require('./package/lib').sum;

const result1 = rcjh();
const result2 = sum(3, 7);

console.log(result1);
console.log(result2);
