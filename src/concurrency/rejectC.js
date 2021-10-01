import curryRight from '../basic/curryRight.js';
import filterL from '../lazy/filterL.js';
import takeAllC from './takeAllC.js';

function rejectC(iterator, predicate) {
  return takeAllC(filterL(iterator, (value, index) => !predicate(value, index)));
}

export default curryRight(rejectC);