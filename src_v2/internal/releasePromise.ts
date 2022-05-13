import noop from './noop';

function releasePromise<T, U>(target: T | Promise<T>, predicate: (target: T, ...args: any[]) => U, ...args: any[]) {
  return target instanceof Promise
    ? target.then(target => predicate(target, ...args)).catch(noop)
    : predicate(target, ...args);
}

export default releasePromise;