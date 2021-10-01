import curryRight from '../basic/curryRight.js';
import filterL from '../lazy/filterL.js';

function rejectL(iterator, predicate) {
  return filterL(iterator, (value, index) => !predicate(value, index));
}

export default curryRight(rejectL);