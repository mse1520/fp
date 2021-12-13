import _takeAll from './_takeAll.js';
import _rangeL from '../lazy/_rangeL.js';

function _range(...args) {
  return _takeAll(_rangeL(...args));
}

export default _range;