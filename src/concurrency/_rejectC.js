import _curryRight from '../basic/_curryRight.js';
import _filterL from '../lazy/_filterL.js';
import _takeAllC from './_takeAllC.js';

function _rejectC(iterator, predicate) {
  return _takeAllC(_filterL(iterator, (value, index) => !predicate(value, index)));
}

export default _curryRight(_rejectC);