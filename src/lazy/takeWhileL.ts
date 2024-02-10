import curryRight from '@basic/curryRight';
import toIterator from '@basic/toIterator';
import catchNoop from '@internal/catchNoop';
import nop from '@internal/nop';
import passParam from '@internal/passParam';

interface TakeWhileL {
  /**
   * Creates a Generator with n elements taken from the beginning. Elements are taken until predicate returns falsey.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param predicate the function invoked per iteration.
   * @returns Generator
   */
  <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any): Generator<T, void>;
  <T>(predicate: (value: Awaited<T>, index: number) => any): (iterable: Iterable<T>) => Generator<T, void>;
}

const takeWhileL: TakeWhileL = curryRight(function* <T>(iterable: Iterable<T>, predicate: (value: Awaited<T>, index: number) => any) {
  const iter = toIterator(iterable);
  let prev: Promise<any> = Promise.resolve();
  let index = -1;
  let next: IteratorResult<any, any>;

  while (!(next = iter.next()).done) {
    const value = next.value;
    const cond = passParam(value, (value: any) => (index++, predicate(value, index)));

    if (cond instanceof Promise) {
      prev = catchNoop(prev
        .then(() => cond)
        .then(cond => cond ? value : Promise.reject(nop)));
      yield prev
      continue;
    }

    if (!cond) break;

    yield value;
  }
});

export default takeWhileL;