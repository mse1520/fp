import _curryRight from '../basic/_curryRight.js';
import _concatL from './_concatL.js';

function _pushL(iterator, args) {
  return _concatL(iterator, [args]);
}

export default _curryRight(_pushL);