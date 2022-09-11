import curryRight from './curryRight';

interface Delay {
  (time: number): <T>(value: T) => Promise<T>;
  <T>(value: T, time: number): Promise<T>;
}

function delay<T>(value: T, time: number): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(value), time));
}

const _delay: Delay = curryRight(delay);

export default _delay;