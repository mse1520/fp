import _curryRight from '../basic/_curryRight.js';
import _mapL from './_mapL.js';
import _flatL from './_flatL.js';

function _flatMapL(iterator, predicate) {
  return _flatL(_mapL(iterator, predicate));
}

export default _curryRight(_flatMapL);