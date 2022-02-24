import _reduce from './_reduce.js';

function _go(arg, ...funcs) {
  return _reduce(funcs, (acc, func) => func(acc), arg);
}

export default _go;