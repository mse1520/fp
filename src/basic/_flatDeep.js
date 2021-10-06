import _takeAll from './_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flatDeep(iterator) {
  return _takeAll(_flatL(iterator, Infinity));
}

export default _flatDeep;