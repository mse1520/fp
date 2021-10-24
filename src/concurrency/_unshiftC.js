import _curryRight from '../basic/_curryRight.js';
import _concatL from '../lazy/_concatL.js';
import _takeAllC from './_takeAllC.js';

function _unshiftC(iterator, args) {
  return _takeAllC(_concatL(args, [iterator]));
}

export default _curryRight(_unshiftC);