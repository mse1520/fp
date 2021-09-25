import _curryRight from './_curryRight.js';
import _object from './_object.js';
import _mapL from '../lazy/_mapL.js';
import _rejectEntriesL from '../lazy/_rejectEntriesL.js';

function _pick(object, keys) {
  return _object(
    _rejectEntriesL(
      _mapL(keys, key => [key, object[key]]),
      value => value === undefined
    )
  );
}

export default _curryRight(_pick);