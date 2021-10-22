import _curryRight from '../basic/_curryRight.js';
import _concatL from '../lazy/_concatL.js';
import _takeAllC from './_takeAllC.js';

function _concatC(iterator, others) {
  return _takeAllC(_concatL(iterator, others));
}

export default _curryRight(_concatC);