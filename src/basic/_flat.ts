import curryFlat from '@internal/curryFlat';
import _flatL from '@lazy/_flatL';
import takeAll from './takeAll';

interface Flat {
  (): <T extends Iterable<any>>(iterable: T) => any[] | Promise<any[]>;
  (depth: number): <T extends Iterable<any>>(iterable: T) => any[] | Promise<any[]>;
  <T extends Iterable<any>>(iterable: T): any[] | Promise<any[]>;
  <T extends Iterable<any>>(iterable: T, depth: number): any[] | Promise<any[]>;
}

function flat<T extends Iterable<any>>(iterable: T, depth: number) {
  return takeAll(_flatL(iterable, depth));
}

const _flat: Flat = curryFlat(flat);

export default _flat;