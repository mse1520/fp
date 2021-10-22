const _curryRight = require('./_curryRight.js');

const _go = require('./_go.js');

function _tap(func, ...funcs) {
  return arg => (_go(func(arg), ...funcs), arg);
}

module.exports = _tap;