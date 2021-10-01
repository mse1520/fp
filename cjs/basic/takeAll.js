const take = require('./take.js');

function takeAll(iterator) {
  return take(iterator, Infinity);
}

;
module.exports = takeAll;