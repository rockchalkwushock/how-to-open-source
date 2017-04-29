# :tada: how-to-open-source :tada:

[![npm](https://img.shields.io/npm/v/how-to-open-source.svg?style=flat-square)](https://www.npmjs.com/package/how-to-open-source)
[![npm](https://img.shields.io/npm/l/how-to-open-source.svg?style=flat-square)](https://www.npmjs.com/package/how-to-open-source)
[![npm](https://img.shields.io/npm/dt/how-to-open-source.svg?style=flat-square)](https://www.npmjs.com/package/how-to-open-source)

[![Travis](https://img.shields.io/travis/rockchalkwushock/how-to-open-source.svg?branch=master&style=flat-square)](https://travis-ci.org/rockchalkwushock/how-to-open-source)
[![CircleCI](https://img.shields.io/circleci/project/github/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://circleci.com/gh/rockchalkwushock/how-to-open-source)
[![Codecov](https://img.shields.io/codecov/c/github/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://codecov.io/gh/rockchalkwushock/how-to-open-source)
[![Code Climate](https://img.shields.io/codeclimate/github/rockchalkwushock/how-to-open-source/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/rockchalkwushock/how-to-open-source)
[![DependencyCI](https://dependencyci.com/github/rockchalkwushock/how-to-open-source/badge?style=flat-square)](https://dependencyci.com/github/rockchalkwushock/how-to-open-source/builds/1)
[![bitHound](https://img.shields.io/bithound/code/github/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://www.bithound.io/github/rockchalkwushock/how-to-open-source)
[![Greenkeeper badge](https://badges.greenkeeper.io/rockchalkwushock/how-to-open-source.svg)](https://greenkeeper.io/)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rockchalkwushock/how-to-open-source/pulls)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![bundled with rollup](https://img.shields.io/badge/bundled%20with-rollup-orange.svg?style=flat-square)](https://github.com/rollup/rollup)
[![nps](https://img.shields.io/badge/scripts%20run%20with-nps-blue.svg?style=flat-square)](https://github.com/kentcdodds/nps)

## Purpose

This module is meant as a learning/training tool for those interested in publishing their own open source project to the NPM Registry. It is also here for those wishing to learn how to contribute to open source projects. It is purely a learning and training tool at this point and holds no real purpose as a dependency to any production based application.

## :notebook: Documentation :notebook:

> Documentation is still present in the [wiki](https://github.com/rockchalkwushock/how-to-open-source/wiki), but is under construction :100:

## Installation

There are currently no dependencies needed to run this package, although that can change with additional features so stay tuned!

```bash
$ npm install --save how-to-open-source
## or
$ yarn add how-to-open-source
```

## Usage

* _CommonJS_

```javascript
const rcjh = require('how-to-open-source').rcjh;

const result = rcjh();

console.log(result); // 'ROCK CHALK JAYHAWK, KU!'
```

* _ES6_

```javascript
import { rcjh } from 'how-to-open-source';

const result = rcjh();

console.log(result); // 'ROCK CHALK JAYHAWK, KU!'
```

## Development

All scripting is being managed through [`nps`](https://github.com/kentcdodds/nps). All the scripts for the repository and their descriptions can be found in the [`package-scripts.js`](https://github.com/rockchalkwushock/how-to-open-source/blob/master/package-scripts.js).

Scripts in the `package.json`:

```bash
yarn build
# prebuild git-hook will run first validating the code...
# Executes rollup build of all distributions in production mode

yarn commit
# precommit git-hook will run first executing scripts
# in lint-staged & validating the code...
# Executes the commitizen-cli

yarn prettier
# Executes formating of code base defined by prettier.js.

yarn start
# Executes nps command.
# used in .travis.yml to pass prefix to scripts
# i.e. yarn start test --> nps test

yarn test
# Executes testing via jest & .jestConfig
# generates coverage data.
```

## :running: Running code locally

If you are developing a cool new feature and want to see that it really does perform the way you want; follow these instructions to package the code base and run it just like you would if it was on the npm registry!

```bash
yarn build && yarn start library
# Executes bundling in production environment.
# Executes npm pack & opens the tarball file.

# In sandbox files import your feature

yarn start sandbox
# Executes cjs & es code in corresponding sandbox.js files.
```

## Contributing

Please visit [CONTRIBUTING.md](https://github.com/rockchalkwushock/how-to-open-source/blob/master/CONTRIBUTING.md)

## License

[MIT](https://github.com/rockchalkwushock/how-to-open-source/blob/master/LICENSE)

## Acknowledgments

Many thanks to [@kentcdodds](https://github.com/kentcdodds) for the great tutorial and [@bebraw](https://github.com/bebraw) for sending me the link to a chapter from his book [Authoring Packages](https://survivejs.com/webpack/packages/authoring/).
