const curryRight = require('./curryRight.js');

const takeAll = require('./takeAll.js');

const filterL = require('../lazy/filterL.js');

function filter(iterator, predicate) {
  return takeAll(filterL(iterator, predicate));
}

module.exports = curryRight(filter);