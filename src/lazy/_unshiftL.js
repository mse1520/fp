import _curryRight from '../basic/_curryRight.js';
import _concatL from './_concatL.js';

function _unshiftL(iterator, args) {
  return _concatL(args, [iterator]);
}

export default _curryRight(_unshiftL);