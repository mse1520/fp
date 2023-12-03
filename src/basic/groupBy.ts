import curryRight from './curryRight';
import reduce from './reduce';

interface GroupBy {
  /**
   * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate Function to execute on each element of iterable.
   * @returns the composed aggregate object.
   */
  <T, K extends keyof any>(predicate: (value: Awaited<T>, index: number) => K): (iterable: Iterable<T>) => any;
  <T, K extends keyof any>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => K): any;
}

const groupBy: GroupBy = curryRight(<T, K extends keyof any>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => K) =>
  reduce(iterable, (acc, cur, index) => {
    const key = predicate(cur, index);
    if (!(key in acc)) acc[key] = [];
    acc[key].push(cur);

    return acc;
  }, {}));

export default groupBy;