'use strict';

import sum from '../src/sum';

test('returns: 3', () => {
  const actual = sum(1, 2);
  const expected = 3;
  expect(actual).toEqual(expected);
});
