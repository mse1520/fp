import _curryRight from '../basic/_curryRight.js';
import _concatL from '../lazy/_concatL.js';
import _takeAllC from './_takeAllC.js';

function _pushC(iterator, args) {
  return _takeAllC(_concatL(iterator, [args]));
}

export default _curryRight(_pushC);