type SyncTarget<T> = T extends Promise<infer V> ? Promise<V> : T;
type SyncPredicateTarget<T> = T extends Promise<infer V> ? Awaited<V> : T;

const sync = <T, U>(target: SyncTarget<T>, predicate: (target: SyncPredicateTarget<T>, ...args: any[]) => U, ...args: any[]) =>
  target instanceof Promise
    ? target.then(target => predicate(target, ...args))
    : predicate(target as SyncPredicateTarget<T>, ...args);

export default sync;