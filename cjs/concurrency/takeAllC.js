const take = require('../basic/take.js');

function takeAllC(iterator) {
  return take([...iterator], Infinity);
}

;
module.exports = takeAllC;