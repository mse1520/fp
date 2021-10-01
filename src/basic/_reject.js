import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _filterL from '../lazy/_filterL.js';

function _reject(iterator, predicate) {
  return _takeAll(_filterL(iterator, (value, index) => !predicate(value, index)));
}

export default _curryRight(_reject);