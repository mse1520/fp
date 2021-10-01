import _keysL from '../lazy/_keysL.js';
import _takeAllC from './_takeAllC.js';

function _keysC(object) {
  return _takeAllC(_keysL(object));
}

export default _keysC;