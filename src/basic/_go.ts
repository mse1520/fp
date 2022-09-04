import _reduce from './_reduce';

function _go(value: any, ...funcs: Function[]) {
  return _reduce(funcs, (acc, func) => func(acc), value);
}

export default _go;