import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _concatL from '../lazy/_concatL.js';

function _push(iterator, args) {
  return _takeAll(_concatL(iterator, [args]));
}

export default _curryRight(_push);