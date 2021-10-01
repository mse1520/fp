import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _mapL from '../lazy/_mapL.js';

function _map(iterator, predicate) {
  return _takeAll(_mapL(iterator, predicate));
}

export default _curryRight(_map);