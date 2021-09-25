import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';

function _map(iterator, predicate) {
  return _takeAll(_mapL(iterator, predicate));
}

export default _curryRight(_map);