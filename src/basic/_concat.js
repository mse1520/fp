import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _concatL from '../lazy/_concatL.js';

function _concat(iterator, others) {
  return _takeAll(_concatL(iterator, others));
}

export default _curryRight(_concat);