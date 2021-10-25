const _curryRight = require('./_curryRight.js');

function _delay(value, time) {
  return new Promise(resolve => setTimeout(() => resolve(value), time));
}

module.exports = _curryRight(_delay);