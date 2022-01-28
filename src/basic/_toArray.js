import _identity from './_identity.js';
import _mapL from '../lazy/_mapL.js';
import _takeAll from './_takeAll.js';

function _toArray(iterator) {
  return _takeAll(_mapL(iterator, _identity));
}

export default _toArray;