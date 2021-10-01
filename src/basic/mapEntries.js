import curryRight from './curryRight.js';
import takeAll from './takeAll.js';
import mapL from '../lazy/mapL.js';

function mapEntries(entries, predicate) {
  return takeAll(
    mapL(entries, ([key, value], index) => [key, predicate(value, index)])
  );
}

export default curryRight(mapEntries);