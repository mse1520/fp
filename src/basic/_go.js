import _reduce from './_reduce.js';

function _go(arg, ...funcs) {
  return _reduce(funcs, (accumulate, func) => func(accumulate), arg);
}

export default _go;