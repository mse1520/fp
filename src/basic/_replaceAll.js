import _curryRight from './_curryRight.js';
import _reduce from './_reduce.js';
import _split from './_split.js';

function _replaceAll(str, pattern, replacement) {
  return _reduce(_split(str, pattern), (accumulate, value) => `${accumulate}${replacement}${value}`);
}

export default _curryRight(_replaceAll);