import curryRight from '../basic/curryRight.js';
import reduceC from './reduceC.js';

function joinC(iterator, separator) {
  return reduceC(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

export default curryRight(joinC);