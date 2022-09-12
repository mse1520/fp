import curryRight from './curryRight';

interface Delay {
  /**
   * Invokes func after wait milliseconds.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param value return value after delay.
   * @param time The number of milliseconds to delay invocation.
   * @returns Promise
   */
  (time: number): <T>(value: T) => Promise<T>;
  <T>(value: T, time: number): Promise<T>;
}

function _delay<T>(value: T, time: number): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(value), time));
}

const delay: Delay = curryRight(_delay);

export default delay;