import passParam from '@internal/passParam';
import go from './go';

/**
 * This function returns a function that receives the return value of the function as an argument of the next function, 
 * and this function returns the received argument value as it is.
* @param func The first function.
 * @param funcs Listed functions.
 * @returns A function that receives the parameters of the first function.
 */
const tap = (func: (...args: any[]) => any, ...funcs: Function[]) => <T>(arg: T, ...args: any[]): T => (go(passParam(arg, func, ...args), ...funcs), arg);

export default tap;