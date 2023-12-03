import curryRight from '@basic/curryRight';
import reduceC from './reduceC';

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

const groupByC: GroupBy = curryRight(<T, K extends keyof any>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => K) =>
  reduceC(iterable, (acc, cur, index) => {
    const key = predicate(cur, index);
    if (!(key in acc)) acc[key] = [];
    acc[key].push(cur);

    return acc;
  }, {}));

export default groupByC;