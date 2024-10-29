// uses CommonJS under the hood , every file is module(by default)
// modeuls - encapsulated code (only minimum share)

const names = require('./4-names');
const sayHi = require('./5-utils')
console.log(names)
const data = require('./6-alternative');
require('./7-mindgranade');
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)
