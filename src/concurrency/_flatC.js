import curryRightFlat from '../internal/curryRightFlat.js';
import _takeAll from '../basic/_takeAll.js';
import _flatL from '../lazy/_flatL.js';

function _flatC(iterator, depth = 1) {
  return _takeAll(_flatL([...iterator], depth));
}

export default curryRightFlat(_flatC);