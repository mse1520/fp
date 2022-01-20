import _head from './_head.js';
import _replace from './_replace.js';
import _toUpperCase from './_toUpperCase.js';

function _toUpperCaseFirst(str) {
  return _replace(str, /^./, _toUpperCase(_head(str)));
}

export default _toUpperCaseFirst;