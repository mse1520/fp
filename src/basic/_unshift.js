import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _concatL from '../lazy/_concatL.js';

function _unshift(iterator1, iterator2) {
  return _takeAll(_concatL(iterator2, iterator1));
}

export default _curryRight(_unshift);