import curryRight from './curryRight.js';
import reduce from './reduce.js';

function join(iterator, separator) {
  return reduce(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

export default curryRight(join);