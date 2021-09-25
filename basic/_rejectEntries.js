import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _filterL from '../lazy/_filterL.js';

function _rejectEntries(entries, predicate) {
  return _takeAll(
    _filterL(entries, ([_, value], index) => !predicate(value, index))
  );
}


export default _curryRight(_rejectEntries);