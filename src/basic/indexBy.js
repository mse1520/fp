import curryRight from './curryRight.js';
import reduce from './reduce.js';

function indexBy(iterator, predicate) {
  return reduce(iterator, (object, value, index) => (object[predicate(value, index)] = value, object), {});
}

export default curryRight(indexBy);