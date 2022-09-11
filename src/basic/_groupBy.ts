import curryRight from './curryRight';
import reduce from './reduce';

interface GroupBy {
  <T>(predicate: (value: T, index: number) => string | number): (iterable: Iterable<T | Promise<T>>) => { [key: string]: T[] };
  <T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => string | number): { [key: string]: T[] };
}

function groupBy<T>(iterable: Iterable<T | Promise<T>>, predicate: (value: T, index: number) => string | number) {
  return reduce<T, { [key: string]: T[]; }>(iterable, (acc, cur, index) => {
    const key = predicate(cur, index);
    if (acc[key] === undefined) acc[key] = [];
    acc[key].push(cur);

    return acc;
  }, {});
}

const _groupBy: GroupBy = curryRight(groupBy);

export default _groupBy;