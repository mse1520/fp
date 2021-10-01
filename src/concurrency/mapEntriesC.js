import curryRight from '../basic/curryRight.js';
import mapL from '../lazy/mapL.js';
import takeAllC from './takeAllC.js';

function mapEntriesC(entries, predicate) {
  return takeAllC(
    mapL(entries, ([key, value], index) => [key, predicate(value, index)])
  );
}

export default curryRight(mapEntriesC);