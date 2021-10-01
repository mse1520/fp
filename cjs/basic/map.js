const curryRight = require('./curryRight.js');

const takeAll = require('./takeAll.js');

function map(iterator, predicate) {
  return takeAll(mapL(iterator, predicate));
}

module.exports = curryRight(map);