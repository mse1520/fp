import _curryRight from '../basic/_curryRight.js';
import _takeAll from '../basic/_takeAll.js';
import _mapL from '../lazy/_mapL.js';
import _flatL from '../lazy/_flatL.js';

function _flatMapC(iterator, predicate) {
  return _takeAll(_flatL([..._mapL(iterator, predicate)]));
}

export default _curryRight(_flatMapC);