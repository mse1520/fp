import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _concatL from '../lazy/_concatL.js';

function _push(iterator, value) {
  return _takeAll(_concatL(iterator, [value]));
}

export default _curryRight(_push);