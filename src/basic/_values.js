import _takeAll from './_takeAll.js';
import _valuesL from '../lazy/_valuesL.js';

function _values(object) {
  return _takeAll(_valuesL(object))
}

export default _values;