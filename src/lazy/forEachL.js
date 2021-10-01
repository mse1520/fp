import curryRight from '../basic/curryRight.js';
import mapL from './mapL.js';

function forEachL(iterator, predicate) {
  return mapL(iterator, (value, index) => (predicate(value, index), value));
}

export default curryRight(forEachL);