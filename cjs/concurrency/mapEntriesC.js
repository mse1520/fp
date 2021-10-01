const curryRight = require('../basic/curryRight.js');

const mapL = require('../lazy/mapL.js');

const takeAllC = require('./takeAllC.js');

function mapEntriesC(entries, predicate) {
  return takeAllC(mapL(entries, ([key, value], index) => [key, predicate(value, index)]));
}

module.exports = curryRight(mapEntriesC);