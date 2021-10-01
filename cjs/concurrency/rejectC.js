const curryRight = require('../basic/curryRight.js');

const filterL = require('../lazy/filterL.js');

const takeAllC = require('./takeAllC.js');

function rejectC(iterator, predicate) {
  return takeAllC(filterL(iterator, (value, index) => !predicate(value, index)));
}

module.exports = curryRight(rejectC);