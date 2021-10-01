const _go = require('./_go.js');

function _pipe(func, ...funcs) {
  return (...args) => _go(func(...args), ...funcs);
}

module.exports = _pipe;