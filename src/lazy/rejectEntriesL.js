import curryRight from '../basic/curryRight.js';
import filterL from '../lazy/filterL.js';

function rejectEntriesL(entries, predicate) {
  return filterL(entries, ([_, value], index) => !predicate(value, index));
}

export default curryRight(rejectEntriesL);