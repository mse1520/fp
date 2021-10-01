const curryRight = require('./curryRight.js');

const takeAll = require('./takeAll.js');

const filterL = require('../lazy/filterL.js');

function rejectEntries(entries, predicate) {
  return takeAll(filterL(entries, ([_, value], index) => !predicate(value, index)));
}

module.exports = curryRight(rejectEntries);