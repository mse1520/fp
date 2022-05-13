import noop from './noop';

function releasePromise<T1, T2>(target: T1 | Promise<T1>, predicate: (target: T1, ...args: any[]) => T2, ...args: any[]) {
  return target instanceof Promise
    ? target.then(target => predicate(target, ...args)).catch(noop)
    : predicate(target, ...args);
}

export default releasePromise;