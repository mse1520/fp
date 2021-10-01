import _curryRight from '../basic/_curryRight.js';
import _filterL from '../lazy/_filterL.js';

function _rejectEntriesL(entries, predicate) {
  return _filterL(entries, ([_, value], index) => !predicate(value, index));
}

export default _curryRight(_rejectEntriesL);