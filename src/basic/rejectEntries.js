import curryRight from './curryRight.js';
import takeAll from './takeAll.js';
import filterL from '../lazy/filterL.js';

function rejectEntries(entries, predicate) {
  return takeAll(
    filterL(entries, ([_, value], index) => !predicate(value, index))
  );
}


export default curryRight(rejectEntries);