import _curryRight from './_curryRight.js';

function _delay(value, time) {
  return new Promise(resolve => setTimeout(() => resolve(value), time));
}

export default _curryRight(_delay);