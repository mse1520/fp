import releasePromise from '../internal/releasePromise.js';
import take from './take.js';

function head(iterator) {
  return releasePromise(take(iterator, 1), ([value]) => value);
}

export default head;