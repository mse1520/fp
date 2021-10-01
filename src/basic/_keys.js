import _takeAll from './_takeAll.js';
import _keysL from '../lazy/_keysL.js';

function _keys(object) {
  return _takeAll(_keysL(object));
}

export default _keys;