import _curryRight from '../basic/_curryRight.js';
import _concatL from './_concatL.js';

function _pushL(iterator, value) {
  return _concatL(iterator, [value]);
}

export default _curryRight(_pushL);