# how-to-open-source

[![Travis](https://img.shields.io/travis/rockchalkwushock/how-to-open-source.svg?branch=master&style=flat-square)](https://travis-ci.org/rockchalkwushock/how-to-open-source)
[![Codecov](https://img.shields.io/codecov/c/github/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://codecov.io/gh/rockchalkwushock/how-to-open-source)
[![Code Climate](https://img.shields.io/codeclimate/github/rockchalkwushock/how-to-open-source/badges/gpa.svg?style=flat-square)](https://codeclimate.com/github/rockchalkwushock/how-to-open-source)
[![npm](https://img.shields.io/npm/v/how-to-open-source.svg?style=flat-square)](https://www.npmjs.com/package/how-to-open-source)
[![npm](https://img.shields.io/npm/dt/how-to-open-source.svg?style=flat-square)](https://www.npmjs.com/package/how-to-open-source)
[![npm](https://img.shields.io/npm/l/how-to-open-source.svg?style=flat-square)](https://www.npmjs.com/package/how-to-open-source)
[![David](https://img.shields.io/david/dev/rockchalkwushock/how-to-open-source.svg?style=flat-square)](https://github.com/rockchalkwushock/how-to-open-source)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)


## Purpose

This module is meant as a learning/training tool for those interested in publishing their own open source project to the NPM Registry. It is also here for those wishing to learn how to contribute to open source projects. It is purely a learning and training tool at this point and holds no real purpose as a dependency to any production based application.

## Documentation

Please refer to the [wiki](https://github.com/rockchalkwushock/how-to-open-source/wiki)

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

## Contributing

Please visit [CONTRIBUTING.md](https://github.com/rockchalkwushock/how-to-open-source/blob/master/CONTRIBUTING.md)

## License

[MIT](https://github.com/rockchalkwushock/how-to-open-source/blob/master/LICENSE)

## Acknowledgments

Many thanks to [@kentcdodds](https://github.com/kentcdodds) for the great tutorial and [@bebraw](https://github.com/bebraw) for sending me the link to a chapter from his book [Authoring Packages](https://survivejs.com/webpack/packages/authoring/).
