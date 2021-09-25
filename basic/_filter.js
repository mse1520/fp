import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _filterL from '../lazy/_filterL.js';

function _filter(iterator, predicate) {
  return _takeAll(_filterL(iterator, predicate));
}

export default _curryRight(_filter);