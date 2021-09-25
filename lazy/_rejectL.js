import _curryRight from '../basic/_curryRight.js';
import _filterL from '../lazy/_filterL.js';

function _rejectL(iterator, predicate) {
  return _filterL(iterator, (value, index) => !predicate(value, index));
}

export default _curryRight(_rejectL);