import curryRight from '../basic/curryRight.js';
import mapL from '../lazy/mapL.js';
import takeAllC from './takeAllC.js';

function forEachC(iterator, predicate) {
  return takeAllC(
    mapL(iterator, (value, index) => (predicate(value, index), value))
  );
}

export default curryRight(forEachC);