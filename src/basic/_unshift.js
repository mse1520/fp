import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _concatL from '../lazy/_concatL.js';

function _unshift(iterator, args) {
  return _takeAll(_concatL(args, [iterator]));
}

export default _curryRight(_unshift);