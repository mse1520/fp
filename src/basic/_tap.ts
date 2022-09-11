import reduce from './reduce';

function _tap(func: Function, ...funcs: Function[]) {
  return (arg: any) => (reduce(funcs, (acc, func) => func(acc), func(arg)), arg);
}

export default _tap;