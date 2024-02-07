import go from '@basic/go';
import rangeL from './rangeL';
import mapL from './mapL';
import takeWhileL from './takeWhileL';
import toIterator from '@basic/toIterator';
import takeL from './takeL';
import takeAllC from '@concurrency/takeAllC';
import curryRight from '@basic/curryRight';

interface ChunkL {
  /**
   * Creates a Generator with n elements taken from the beginning. Elements are taken until predicate returns falsey.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Generator
   */
  <T>(iterable: Iterable<T>, length: number): Generator<Awaited<T>[] | Promise<Awaited<T>[]>, void>;
  <T>(length: number): (iterable: Iterable<T>) => Generator<Awaited<T>[] | Promise<Awaited<T>[]>, void>;
}

const chunkL: ChunkL = curryRight(<T>(iterable: Iterable<T>, length: number) => {
  const iter = toIterator(iterable);

  return go(
    rangeL(Infinity),
    mapL(() => go(
      iter,
      takeL(length),
      takeAllC,
    )),
    takeWhileL((v: T[]) => v.length),
  );
});

export default chunkL;