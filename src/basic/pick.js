import curryRight from './curryRight.js';
import _object from './object.js';
import mapL from '../lazy/mapL.js';
import filterL from '../lazy/filterL.js';

function pick(object, keys) {
  return _object(filterL(
    mapL(keys, key => [key, object[key]]),
    ([_, value]) => !(value === undefined))
  );
}

export default curryRight(pick);