/* @flow */
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import conditional from 'rollup-plugin-conditional';
import filesize from 'rollup-plugin-filesize';
import flow from 'rollup-plugin-flow';
import gzip from 'rollup-plugin-gzip';
import multidest from 'rollup-plugin-multi-dest';
import uglify from 'rollup-plugin-uglify';

// Environment Check.
const isProd = process.env.NODE_ENV === 'production';
// Plugin options objects.
const opts = {
  // Pass exact config needed for rollup to build cjs.
  babel: {
    exclude: 'node_modules/**',
    babelrc: false, // will not look at local .babelrc
    presets: [['env', { loose: true, modules: false }]],
    plugins: ['external-helpers'],
  },
  flow: { pretty: true },
  gzip: { minSize: 1000 },
  uglify: {
    compress: {
      pure_getters: true,
      unsafe: true,
      warnings: false,
      screw_ie8: false,
    },
    mangle: {
      screw_ie8: false,
    },
    output: {
      screw_ie8: false,
    },
  },
};

export default {
  entry: 'src/index.js',
  moduleName: 'how-to-open-source',
  format: 'es', // runs 'es' format by default if no format provided.
  dest: 'es/index.js', // where to output
  plugins: [
    flow(opts.flow), // strips flow syntax.
    multidest([
      {
        format: 'cjs',
        dest: 'lib/index.js',
        plugins: [flow(opts.flow), babel(opts.babel)],
      },
      {
        format: 'umd',
        dest: 'dist/how-to-open-source.js',
        plugins: [flow(opts.flow), babel(opts.babel)],
      },
      {
        format: 'umd',
        dest: 'dist/how-to-open-source.min.js',
        plugins: [flow(opts.flow), babel(opts.babel), uglify(opts.uglify)],
      },
    ]),
    gzip(opts.gzip),
    conditional(!isProd, [filesize()]),
    cleanup(), // remove whitespace, comments, console.logs, debuggers.
  ],
};
