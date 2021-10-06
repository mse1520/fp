import _curryRight from '../basic/_curryRight.js';
import _mapL from '../lazy/_mapL.js';
import _takeAllC from './_takeAllC.js';

function _mapEntriesC(entries, predicate) {
  return _takeAllC(
    _mapL(entries, ([key, value], index) => [key, predicate(value, key, index)])
  );
}

export default _curryRight(_mapEntriesC);