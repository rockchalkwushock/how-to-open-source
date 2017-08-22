/* @flow */
import cleanup from 'rollup-plugin-cleanup'
import flow from 'rollup-plugin-flow'
import gzip from 'rollup-plugin-gzip'

import pkg from './package.json'

const opts = {
  flow: { pretty: true },
  gzip: { minSize: 1000 }
}

// Configuration for outputting ES Modules.
export default {
  input: 'src/index.js',
  plugins: [flow(opts.flow), gzip(opts.gzip), cleanup()],
  output: {
    file: pkg.module,
    format: 'es'
  }
}
