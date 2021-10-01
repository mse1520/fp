import _curryRight from './_curryRight.js';

function _split(str, separator) {
  return str.split(separator);
};

export default _curryRight(_split);