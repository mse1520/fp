import reduce from './reduce';

/**
 * Executes a function whose return value is passed as a parameter to the next function.
 * @param value The first parameter to run the function
 * @param funcs Listed functions that will receive arguments
 * @returns The result of executing all functions
 */
const go = <T = any>(value: any, ...funcs: Function[]): T => reduce(funcs, (acc, func) => func(acc), value);

export default go;