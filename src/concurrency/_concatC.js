import _curryRight from '../basic/_curryRight.js';
import _concatL from '../lazy/_concatL.js';
import _takeAllC from './_takeAllC.js';

function _concatC(iterator1, iterator2) {
  return _takeAllC(_concatL(iterator1, iterator2));
}

export default _curryRight(_concatC);