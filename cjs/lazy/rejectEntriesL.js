const curryRight = require('../basic/curryRight.js');

const filterL = require('../lazy/filterL.js');

function rejectEntriesL(entries, predicate) {
  return filterL(entries, ([_, value], index) => !predicate(value, index));
}

module.exports = curryRight(rejectEntriesL);