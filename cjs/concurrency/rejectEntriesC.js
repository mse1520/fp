const curryRight = require('../basic/curryRight.js');

const filterL = require('../lazy/filterL.js');

const takeAllC = require('./takeAllC.js');

function rejectEntriesC(entries, predicate) {
  return takeAllC(filterL(entries, ([_, value], index) => !predicate(value, index)));
}

module.exports = curryRight(rejectEntriesC);