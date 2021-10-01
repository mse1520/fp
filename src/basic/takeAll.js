import take from './take.js';

function takeAll(iterator) {
  return take(iterator, Infinity);
};

export default takeAll;