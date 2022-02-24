import _curryRight from '../basic/_curryRight.js';
import _concatL from '../lazy/_concatL.js';
import _takeAllC from './_takeAllC.js';

function _pushC(iterator, value) {
  return _takeAllC(_concatL(iterator, [value]));
}

export default _curryRight(_pushC);