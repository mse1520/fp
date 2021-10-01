import _curryRight from './_curryRight.js';
import _takeAll from './_takeAll.js';
import _mapL from '../lazy/_mapL.js';

function _forEach(iterator, predicate) {
  return _takeAll(
    _mapL(iterator, (value, index) => (predicate(value, index), value))
  );
}


export default _curryRight(_forEach);