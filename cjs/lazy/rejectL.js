const curryRight = require('../basic/curryRight.js');

const filterL = require('../lazy/filterL.js');

function rejectL(iterator, predicate) {
  return filterL(iterator, (value, index) => !predicate(value, index));
}

module.exports = curryRight(rejectL);