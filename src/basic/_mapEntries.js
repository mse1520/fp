import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _mapL from '../lazy/_mapL.js';

function _mapEntries(entries, predicate) {
  return _takeAll(
    _mapL(entries, ([key, value], index) => [key, predicate(value, key, index)])
  );
}

export default _curryRight(_mapEntries);