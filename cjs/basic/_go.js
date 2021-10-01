const _reduce = require('./_reduce.js');

function go(first, ...args) {
  return _reduce(args, (accumulate, func) => func(accumulate), first);
}

module.exports = go;