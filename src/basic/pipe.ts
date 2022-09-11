import reduce from './reduce';

/**
 * Returns a function whose return value is passed as a parameter to the next function.
 * @param value The first function.
 * @param funcs Listed functions that will receive arguments.
 * @returns A function that receives the parameters of the first function.
 */
function pipe(func: Function, ...funcs: Function[]) {
  return (...args: any[]) => reduce(funcs, (acc, func) => func(acc), func(...args));
}

export default pipe;