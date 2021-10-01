import _curryRight from './_curryRight.js';
import _object from './_object.js';
import _mapL from '../lazy/_mapL.js';
import _entriesL from '../lazy/_entriesL.js';

function _mapObject(object, predicate) {
  return _object(_mapL(
    _entriesL(object),
    ([key, value], index) => [key, predicate(value, index)]
  ));
};

export default _curryRight(_mapObject);