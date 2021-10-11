import curryrightFlat from '../internal/curryRightFlat.js';
import _takeAll from './_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flat(iterator, depth = 1) {
  return _takeAll(_flatL(iterator, depth));
}

export default curryrightFlat(_flat);