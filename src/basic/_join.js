import _curryRight from './_curryRight.js';
import _reduce from './_reduce.js';

function _join(iterator, separator) {
  return _reduce(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

export default _curryRight(_join);