/* @flow */
/* eslint-disable no-console */

const isObject = (item: {}): boolean => {
  if (typeof item !== 'object') {
    console.error(`Item is not an object: ${typeof item}`);
    return false;
  }
  return true;
};

const hasExports = (
  item: { rcjh: () => string, sum: () => number },
): boolean => {
  const itemExports = {
    rcjh: 'function',
    sum: 'function',
  };
  const keys = Object.keys(itemExports);
  return keys.every(key => typeof item[key] === itemExports[key]);
};

export { isObject, hasExports };
