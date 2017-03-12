# how-to-open-source
[![travis build](https://img.shields.io/travis/rockchalkwushock/how-to-open-source/master/style-flat--squared-green.svg?style=flat-square)](https://travis-ci.com/rockchalkwushock/how-to-open-source)
[![Codecov branch](https://img.shields.io/codecov/c/rockchalkwushock/rockchalkwushock/how-to-open-source/master.svg?style=flat-square)](https://codecov.io/gh/rockchalkwushock/how-to-open-source)
[![David](https://img.shields.io/david/strongloop/express.svg?style=flat-square)](https://david-dm.org/rockchalkwushock/how-to-open-source)
[![David](https://img.shields.io/david/dev/strongloop/express.svg?style=flat-square)](https://david-dm.org/rockchalkwushock/how-to-open-source)
[![PR's Welcome](https://img.shields.io/badge/PR's-Welcome-green.svg?style=flat-square)](https://github.com/rockchalkwushock/how-to-open-source/pulls)
[![Twitter Follow](https://img.shields.io/twitter/follow/RockChalkDev.svg?style=social&label=Follow&style=flat-square)](https://twitter.com/RockChalkDev)
[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Star&style=flat-square)](https://github.com/rockchalkwushock/how-to-open-source/stargazers)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)


## Purpose
This module is meant as a learning/training tool for those interested in publishing their own open source project to the NPM Registry. It is also here for those wishing to learn how to contribute to open source projects. It is purely a learning and training tool at this point and holds no real purpose as a dependency to any production based application.

## Documentation
Please refer to the [wiki](https://github.com/rockchalkwushock/how-to-open-source/wiki)


## Installation
```bash
$ npm install --save how-to-open-source
$ npm i -S how-to-open-source
## or
$ yarn add how-to-open-source
```
## Usage
_CommonJS_
```javascript
const rcjh = require('how-to-open-source').rcjh;

const result = rcjh();

console.log(result); // 'ROCK CHALK JAYHAWK, KU!'
```

_ES6_
```javascript
import { rcjh } from 'how-to-open-source';

const result = rcjh();

console.log(result); // 'ROCK CHALK JAYHAWK, KU!'
```

## Contributing
