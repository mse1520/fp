import _curryRight from './_curryRight.js';

function _split(str, separator) {
  return typeof str === 'string' ? str.split(separator) : '';
}

export default _curryRight(_split);