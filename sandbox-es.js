/* eslint-disable no-console */

import { rcjh, sum } from './package/es';

const result1 = rcjh();
const result2 = sum(2, 2);

console.log(`
  ${result1}
  ${result2}
`);
