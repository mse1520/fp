import curryRight from '../basic/curryRight.js';
import take from '../basic/take.js';

function takeC(iterator, predicate) {
  return take([...iterator], predicate);
}

export default curryRight(takeC);