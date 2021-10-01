import _curryRight from './_curryRight.js';
import _object from './_object.js';
import _mapL from '../lazy/_mapL.js';
import _filterL from '../lazy/_filterL.js';

function _pick(object, keys) {
  return _object(_filterL(
    _mapL(keys, key => [key, object[key]]),
    ([_, value]) => !(value === undefined))
  );
}

export default _curryRight(_pick);