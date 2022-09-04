import _curryRight from './_curryRight';

interface Delay {
  (time: number): <T>(value: T) => Promise<T>;
  <T>(value: T, time: number): Promise<T>;
}

function delay<T>(value: T, time: number): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(value), time));
}

const _delay: Delay = _curryRight(delay);

export default _delay;