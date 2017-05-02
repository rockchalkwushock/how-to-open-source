const npsUtils = require('nps-utils');

// npsUtils has these deps native to the package.
// no need to yarn add -D any of these packages.
const concurrent = npsUtils.concurrent;
const crossEnv = npsUtils.crossEnv;
const rimraf = npsUtils.rimraf;
const series = npsUtils.series;

module.exports = {
  scripts: {
    bithound: {
      description: 'Sends repository info to bithound for processing.',
      script: 'bithound check git@github.com:rockchalkwushock/how-to-open-source.git',
    },
    build: {
      description: 'Building in production environment.',
      default: `${crossEnv('NODE_ENV=production')} rollup -c`,
      andTest: {
        description: 'Run production build & test the output bundles.',
        script: series.nps('build', 'test.build'),
      },
      dev: {
        description: 'Building in development environment.',
        script: `${crossEnv('NODE_ENV=development')} rollup -c`,
      },
    },
    commit: {
      description: 'Run commitizen-cli.',
      script: 'git-cz',
    },
    flow: {
      description: 'Type-check code base.',
      script: 'flow check',
    },
    library: {
      description: 'Generate tarball file & open',
      default: series.nps('library.pack', 'library.open'),
      open: {
        description: 'Open the tarball file',
        script: 'open how-to-open-source-1.1.0.tgz',
      },
      pack: {
        description: 'Package the build for local use',
        script: 'npm pack',
      },
    },
    lint: {
      default: {
        description: 'Perform lint check on selected code.',
        script: 'eslint src',
      },
      fix: {
        description: 'Perform lint check on selected code & fix all errors.',
        script: 'eslint src --fix',
      },
    },
    clean: {
      description: 'Clean project directory of generated directories & files.',
      script: series(
        rimraf('coverage'),
        rimraf('dist'),
        rimraf('es'),
        rimraf('lib'),
        rimraf('package'),
        rimraf('*.tgz')
      ),
    },
    reportCoverage: {
      description: 'Send coverage information to third party.',
      script: 'codecov',
    },
    release: {
      description: 'We automate releases with semantic-release. This should only be run on travis',
      script: series(
        'semantic-release pre',
        'npm publish',
        'semantic-release post'
      ),
    },
    sandbox: {
      description: 'Run all sandbox scripts.',
      default: series.nps('sandbox.cjs', 'sandbox.es'),
      cjs: {
        description: 'Run commonjs code.',
        script: 'babel-node sandbox-cjs.js',
      },
      es: {
        description: 'Run es2015 code.',
        script: `babel-node sandbox-es.js`,
      },
    },
    test: {
      description: 'Test code base.',
      default: 'jest __tests__/*pre.test.js --config .jestConfig.json',
      build: {
        description: 'Test end product.',
        script: 'jest __tests__/*.post.test.js --config .jestConfig.json',
      },
      coverage: {
        description: 'Generate coverage on code base.',
        script: series.nps('test --coverage'),
      },
      watch: {
        description: 'Watch tests.',
        script: series.nps('test --watch'),
      }
    },
    validate: {
      description: 'Validate code by linting, type-checking.',
      default: concurrent.nps('lint', 'flow'),
      withCoverage: {
        description: 'Validate & generate coverage.',
        script: concurrent.nps('validate', 'test.coverage'),
      },
      withTests: {
        description: 'Validate with testing',
        script: concurrent.nps('validate', 'test'),
      },
    },
  },
};
