import curryRight from './curryRight.js';
import _object from './object.js';
import mapL from '../lazy/mapL.js';
import entriesL from '../lazy/entriesL.js';

function mapObject(object, predicate) {
  return _object(mapL(
    entriesL(object),
    ([key, value], index) => [key, predicate(value, index)]
  ));
};

export default curryRight(mapObject);