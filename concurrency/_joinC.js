import _curryRight from '../basic/_curryRight.js';
import _reduceC from './_reduceC.js';

function _joinC(iterator, separator) {
  return _reduceC(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

export default _curryRight(_joinC);