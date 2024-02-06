import go from '@basic/go';
import rangeL from './rangeL';
import mapL from './mapL';
import take from '@basic/take';
import takeWhileL from './takeWhileL';
import toIterator from '@basic/toIterator';

const chunkL = <T>(iterable: Iterable<T>, length: number) => {
  const iter = toIterator(iterable);

  return go(
    rangeL(Infinity),
    mapL(() => take(iter, length)),
    takeWhileL((v: T[]) => v.length),
  );
};

export default chunkL;