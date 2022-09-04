import _go from './_go';
import _reduce from './_reduce';

function _pipe(func: Function, ...funcs: Function[]) {
  return (...args: any[]) => _reduce(funcs, (acc, func) => func(acc), func(...args));
}

export default _pipe;