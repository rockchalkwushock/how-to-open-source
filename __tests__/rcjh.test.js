import { rcjh } from '../src';

test('returns: ROCK CHALK JAYHAWK, KU!', () => {
  const actual = rcjh();
  const expected = 'ROCK CHALK JAYHAWK, KU!';
  expect(actual).toEqual(expected);
});
