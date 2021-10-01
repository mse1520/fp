import curryRight from './curryRight.js';
import takeAll from './takeAll.js';
import filterL from '../lazy/filterL.js';

function reject(iterator, predicate) {
  return takeAll(filterL(iterator, (value, index) => !predicate(value, index)));
}

export default curryRight(reject);