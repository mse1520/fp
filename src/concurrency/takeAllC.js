import take from '../basic/take.js';

function takeAllC(iterator) {
  return take([...iterator], Infinity);
};

export default takeAllC;