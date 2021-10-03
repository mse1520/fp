import _takeAll from './_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flat(iterator) {
  return _takeAll(_flatL(iterator));
}

export default _flat;