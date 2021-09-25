import _curryRight from '../basic/_curryRight.js';
import _mapL from './_mapL.js';

function _mapEntriesL(entries, predicate) {
  return _mapL(entries, ([key, value], index) => [key, predicate(value, index)]);
}

export default _curryRight(_mapEntriesL);