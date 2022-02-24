import _curryRight from '../basic/_curryRight.js';
import _concatL from './_concatL.js';

function _unshiftL(iterator1, iterator2) {
  return _concatL(iterator2, iterator1);
}

export default _curryRight(_unshiftL);