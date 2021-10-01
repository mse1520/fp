import curryRight from '../basic/curryRight.js';
import filterL from '../lazy/filterL.js';
import takeAllC from './takeAllC.js';

function rejectEntriesC(entries, predicate) {
  return takeAllC(
    filterL(entries, ([_, value], index) => !predicate(value, index))
  );
}

export default curryRight(rejectEntriesC);