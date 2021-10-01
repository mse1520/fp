import curryRight from './curryRight.js';
import takeAll from './takeAll.js';
import filterL from '../lazy/filterL.js';

function filter(iterator, predicate) {
  return takeAll(filterL(iterator, predicate));
}

export default curryRight(filter);