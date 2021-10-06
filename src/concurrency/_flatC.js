import _curry1AndOption from '../basic/_curry1AndOption.js';
import _takeAll from '../basic/_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flatC(iterator, depth = 1) {
  return _takeAll(_flatL([...iterator], depth));
}

export default _curry1AndOption(_flatC);