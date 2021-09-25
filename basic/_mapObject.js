import _curryRight from './_curryRight.js';
import _object from './_object.js';
import _entriesL from '../lazy/_entriesL.js';
import _mapEntriesL from '../lazy/_mapEntriesL.js';

function _mapObject(object, predicate) {
  return _object(
    _mapEntriesL(_entriesL(object), predicate)
  );
};

export default _curryRight(_mapObject);