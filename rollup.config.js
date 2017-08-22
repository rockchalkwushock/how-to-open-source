/* @flow */
import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import flow from 'rollup-plugin-flow'
import gzip from 'rollup-plugin-gzip'
import uglify from 'rollup-plugin-uglify'

import pkg from './package.json'

// Plugin options objects.
const opts = {
  // Pass exact config needed for rollup to build cjs.
  babel: {
    exclude: 'node_modules/**',
    babelrc: false, // will not look at local .babelrc
    presets: [['env', { loose: true, modules: false }]],
    plugins: ['external-helpers']
  },
  flow: { pretty: true },
  gzip: { minSize: 1000 }
}

// Configuration for outputting CJS & Browser Modules.
export default {
  input: 'src/index.js',
  plugins: [
    flow(opts.flow),
    babel(opts.babel),
    uglify(),
    gzip(opts.gzip),
    cleanup()
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'how-to-open-source'
    }
  ]
}
