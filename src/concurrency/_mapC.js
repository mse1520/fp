import _curryRight from '../basic/_curryRight.js';
import _mapL from '../lazy/_mapL.js';
import _takeAllC from './_takeAllC.js';

function _mapC(iterator, predicate) {
  return _takeAllC(_mapL(iterator, predicate));
}

export default _curryRight(_mapC);