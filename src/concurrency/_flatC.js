import _flatL from '../lazy/_flatL.js';
import _takeAllC from './_takeAllC.js';

function _flatC(iterator) {
  return _takeAllC(_flatL(iterator));
}

export default _flatC;