import _curryRight from '../basic/_curryRight.js';
import _mapL from '../lazy/_mapL.js';
import _takeAllC from './_takeAllC.js';

function _forEachC(iterator, predicate) {
  return _takeAllC(
    _mapL(iterator, (value, index) => (predicate(value, index), value))
  );
}

export default _curryRight(_forEachC);