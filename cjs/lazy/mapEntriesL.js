const curryRight = require('../basic/curryRight.js');

const mapL = require('./mapL.js');

function mapEntriesL(entries, predicate) {
  return mapL(entries, ([key, value], index) => [key, predicate(value, index)]);
}

module.exports = curryRight(mapEntriesL);