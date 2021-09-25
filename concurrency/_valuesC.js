import _valuesL from '../lazy/_valuesL.js';
import _takeAllC from './_takeAllC.js';

function _valuesC(object) {
  return _takeAllC(_valuesL(object))
}

export default _valuesC;