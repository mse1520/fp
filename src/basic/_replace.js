import _curryRight from './_curryRight.js';

function _replace(str, pattern, replacement) {
  return typeof str === 'string' ? str.replace(pattern, replacement) : '';
}

export default _curryRight(_replace);