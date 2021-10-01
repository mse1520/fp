const curryRight = require('../basic/curryRight.js');

const mapL = require('../lazy/mapL.js');

const takeAllC = require('./takeAllC.js');

function forEachC(iterator, predicate) {
  return takeAllC(mapL(iterator, (value, index) => (predicate(value, index), value)));
}

module.exports = curryRight(forEachC);