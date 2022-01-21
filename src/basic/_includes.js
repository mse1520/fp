import _curryRight from './_curryRight.js';
import _toArray from './_toArray.js';

function _includes(iterator, value) {
  return _toArray(iterator).includes(value);
}

export default _curryRight(_includes);