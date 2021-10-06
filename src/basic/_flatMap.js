import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _mapL from '../lazy/_mapL.js';
import _flatL from '../lazy/_flatL.js';

function _flatMap(iterator, predicate) {
  return _takeAll(_flatL(_mapL(iterator, predicate)));
}

export default _curryRight(_flatMap);