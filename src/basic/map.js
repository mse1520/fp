import curryRight from './curryRight.js';
import takeAll from './takeAll.js';

function map(iterator, predicate) {
  return takeAll(mapL(iterator, predicate));
}

export default curryRight(map);