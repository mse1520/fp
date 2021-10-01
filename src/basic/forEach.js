import curryRight from './curryRight.js';
import takeAll from './takeAll.js';
import mapL from '../lazy/mapL.js';

function forEach(iterator, predicate) {
  return takeAll(
    mapL(iterator, (value, index) => (predicate(value, index), value))
  );
}


export default curryRight(forEach);