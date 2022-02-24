import _curryRight from '../basic/_curryRight.js';
import _concatL from '../lazy/_concatL.js';
import _takeAllC from './_takeAllC.js';

function _unshiftC(iterator1, iterator2) {
  return _takeAllC(_concatL(iterator2, iterator1));
}

export default _curryRight(_unshiftC);