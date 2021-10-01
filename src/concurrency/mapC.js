import curryRight from '../basic/curryRight.js';
import mapL from '../lazy/mapL.js';
import takeAllC from './takeAllC.js';

function mapC(iterator, predicate) {
  return takeAllC(mapL(iterator, predicate));
};

export default curryRight(mapC);