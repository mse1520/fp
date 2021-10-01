const curryRight = require('./curryRight.js');

const takeAll = require('./takeAll.js');

const mapL = require('../lazy/mapL.js');

function mapEntries(entries, predicate) {
  return takeAll(mapL(entries, ([key, value], index) => [key, predicate(value, index)]));
}

module.exports = curryRight(mapEntries);