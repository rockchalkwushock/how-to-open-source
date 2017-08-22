/**
 * Many thanks to the developers of glamorous
 * for understanding how to test the build!
 * https://github.com/paypal/glamorous/blob/master/dist-test/index.js
 */

import assert from 'assert'
import { hasExports, isObject } from './utils'

/**
 * ES6 Import declarations for library:
 *
 * Because there are no 'default' exports from library,
 * must import 'all' as a named object.
 *
 * '../' reads directly from "main" in package.json
 */
import * as cjsImport from '../'
import * as esImport from '../es'
import * as umdImport from '../dist/how-to-open-source'

/**
 * CommonJS require declarations for library.
 *
 * No need to do this with ES Modules.
 */
const cjsRequire = require('../')
const umdRequire = require('../dist/how-to-open-source')

if (process.env.JEST_ENV !== 'post-build') {
  test('CJS build works with ES imports', () => {
    assert(isObject(cjsImport) && hasExports(cjsImport))
  })
  test('ES build works with ES imports', () => {
    assert(isObject(esImport) && hasExports(esImport))
  })
  test('UMD build works with ES imports', () => {
    assert(isObject(umdImport) && hasExports(umdImport))
  })
  test('CJS build works with CJS require', () => {
    assert(isObject(cjsRequire) && hasExports(cjsRequire))
  })
  test('UMD build works with CJS require', () => {
    assert(isObject(umdRequire) && hasExports(umdRequire))
  })
}
