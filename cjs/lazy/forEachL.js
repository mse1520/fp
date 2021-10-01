const curryRight = require('../basic/curryRight.js');

const mapL = require('./mapL.js');

function forEachL(iterator, predicate) {
  return mapL(iterator, (value, index) => (predicate(value, index), value));
}

module.exports = curryRight(forEachL);