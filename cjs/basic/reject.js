const curryRight = require('./curryRight.js');

const takeAll = require('./takeAll.js');

const filterL = require('../lazy/filterL.js');

function reject(iterator, predicate) {
  return takeAll(filterL(iterator, (value, index) => !predicate(value, index)));
}

module.exports = curryRight(reject);