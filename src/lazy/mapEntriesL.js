import curryRight from '../basic/curryRight.js';
import mapL from './mapL.js';

function mapEntriesL(entries, predicate) {
  return mapL(entries, ([key, value], index) => [key, predicate(value, index)]);
}

export default curryRight(mapEntriesL);