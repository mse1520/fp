import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _concatL from '../lazy/_concatL.js';

function _concat(iterator1, iterator2) {
  return _takeAll(_concatL(iterator1, iterator2));
}

export default _curryRight(_concat);