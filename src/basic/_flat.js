import _curry1AndOption from './_curry1AndOption.js';
import _takeAll from './_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flat(iterator, depth = 1) {
  return _takeAll(_flatL(iterator, depth));
}

export default _curry1AndOption(_flat);