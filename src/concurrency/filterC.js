import curryRight from '../basic/curryRight.js';
import filterL from '../lazy/filterL.js';
import takeAllC from './takeAllC.js';

function filterC(iterator, predicate) {
  return takeAllC(filterL(iterator, predicate));
}

export default curryRight(filterC);