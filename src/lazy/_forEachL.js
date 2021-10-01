import _curryRight from '../basic/_curryRight.js';
import _mapL from './_mapL.js';

function _forEachL(iterator, predicate) {
  return _mapL(iterator, (value, index) => (predicate(value, index), value));
}

export default _curryRight(_forEachL);