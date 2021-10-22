const _reduce = require('./_reduce.js');

function _go(arg, ...funcs) {
  return _reduce(funcs, (accumulate, func) => func(accumulate), arg);
}

module.exports = _go;