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
  <T>(predicate: (value: T, index: number) => string | number): (iterable: Iterable<T | Promise<T>>) => { [key: string]: T[] };
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => string | number): { [key: string]: T[] };
}

function _groupBy<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => string | number) {
  return reduce<T, { [key: string]: T[]; }>(iterable, (acc, cur, index) => {
    const key = predicate(cur, index);
    if (acc[key] === undefined) acc[key] = [];
    acc[key].push(cur);

    return acc;
  }, {});
}

const groupBy: GroupBy = curryRight(_groupBy);

export default groupBy;