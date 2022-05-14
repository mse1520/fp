import catchNoop from './catchNoop';

function releasePromise<T, U>(target: T | Promise<T>, predicate: (target: T, ...args: any[]) => U, ...args: any[]) {
  return target instanceof Promise
    ? catchNoop(target.then(target => predicate(target, ...args)))
    : predicate(target, ...args);
}

export default releasePromise;