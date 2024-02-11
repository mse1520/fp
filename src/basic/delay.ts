import curryRight from './curryRight';

interface Delay {
  (time: number): <T>(value: T) => Promise<Awaited<T>>;
  <T>(value: T, time: number): Promise<Awaited<T>>;
}

/**
 * Invokes func after wait milliseconds.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param value return value after delay.
 * @param time The number of milliseconds to delay invocation.
 * @returns Promise
 */
const delay: Delay = curryRight(<T>(value: T, time: number): Promise<T> => new Promise(resolve => setTimeout(() => resolve(value), time)));

export default delay;