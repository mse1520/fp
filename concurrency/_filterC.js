import _curryRight from '../basic/_curryRight.js';
import _filterL from '../lazy/_filterL.js';
import _takeAllC from './_takeAllC.js';

function _filterC(iterator, predicate) {
  return _takeAllC(_filterL(iterator, predicate));
}

export default _curryRight(_filterC);