import curryRight from '@basic/curryRight';
import reduceC from './reduceC';

interface GroupBy {
  <T>(predicate: (value: Awaited<T>, index: number) => keyof any): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => keyof any): any;
  <T>(predicate: ((value: Awaited<T>, index: number) => keyof any)[]): (iterable: Iterable<T>) => any;
  <T>(iterable: Iterable<T>, predicate: ((value: Awaited<T>, index: number) => keyof any)[]): any;
}

interface Predicate<T> {
  (value: Awaited<T>, index: number): keyof any;
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param predicate Function to execute on each element of iterable.
 * @returns the composed aggregate object.
 */
const groupByC: GroupBy = curryRight(<T>(iterable: Iterable<T>, predicate: Predicate<T> | Predicate<T>[]) => {
  let preds = !(predicate instanceof Array) ? [predicate] : predicate;

  return reduceC(iterable, (acc, cur, idx) => {
    let temp = acc;

    for (let i = 0; i < preds.length; i++) {
      const pred = preds[i];
      const key = pred(cur, idx);

      if (i === preds.length - 1) {
        if (!(key in temp)) temp[key] = [];
        temp[key].push(cur);
        continue;
      }

      if (!(key in temp)) temp[key] = {};
      temp = temp[key];
    }

    return acc;
  }, {});
});

export default groupByC;