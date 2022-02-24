const _reduce = require('./_reduce.js');

function _go(arg, ...funcs) {
  return _reduce(funcs, (acc, func) => func(acc), arg);
}

module.exports = _go;