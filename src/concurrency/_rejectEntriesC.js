import _curryRight from '../basic/_curryRight.js';
import _filterL from '../lazy/_filterL.js';
import _takeAllC from './_takeAllC.js';

function _rejectEntriesC(entries, predicate) {
  return _takeAllC(
    _filterL(entries, ([_, value], index) => !predicate(value, index))
  );
}

export default _curryRight(_rejectEntriesC);