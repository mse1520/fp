const curryRight = require('./curryRight.js');

const takeAll = require('./takeAll.js');

const mapL = require('../lazy/mapL.js');

function forEach(iterator, predicate) {
  return takeAll(mapL(iterator, (value, index) => (predicate(value, index), value)));
}

module.exports = curryRight(forEach);