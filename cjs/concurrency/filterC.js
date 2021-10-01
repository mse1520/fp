const curryRight = require('../basic/curryRight.js');

const filterL = require('../lazy/filterL.js');

const takeAllC = require('./takeAllC.js');

function filterC(iterator, predicate) {
  return takeAllC(filterL(iterator, predicate));
}

module.exports = curryRight(filterC);