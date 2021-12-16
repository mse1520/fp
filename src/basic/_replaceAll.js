import _curryRight from './_curryRight.js';
import _join from './_join.js';
import _split from './_split.js';

function _replaceAll(str, separator, replacement) {
  return _join(_split(str, separator), replacement);
}

export default _curryRight(_replaceAll);