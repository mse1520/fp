import _takeAll from '../basic/_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flatDeepC(iterator) {
  return _takeAll(_flatL([...iterator], Infinity));
}

export default _flatDeepC;