import _reduce from './_reduce.js';

function _go(first, ...args) {
  return _reduce(args, (acc, func) => func(acc), first);
}

export default _go;