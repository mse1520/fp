import _reduce from './_reduce';

function _tap(func: Function, ...funcs: Function[]) {
  return (arg: any) => (_reduce(funcs, (acc, func) => func(acc), func(arg)), arg);
}

export default _tap;