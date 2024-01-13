import last from '@basic/last';
import catchNoop from '@internal/catchNoop';
import curryFlat from '@internal/curryFlat';
import isIterable from '@basic/isIterable';
import isString from '@basic/isString';
import nop from '@internal/nop';
import toIterator from '@basic/toIterator';

interface FlatL {
  /**
   * The flat() method creates a Generator with all sub-iterator concatenated into it recursively up to the specified depth.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   * @returns Generator
   */
  (): (iterable: Iterable<any>) => Generator<any, void>;
  (depth: number): (iterable: Iterable<any>) => Generator<any, void>;
  (iterable: Iterable<any>): Generator<any, void>;
  (iterable: Iterable<any>, depth: number): Generator<any, void>;
}

const flatL: FlatL = curryFlat(function* (iterable: Iterable<any>, depth: number) {
  const stack: IterableIterator<any>[] = [toIterator(iterable)];
  const concur = { start: false, end: false };

  while (stack.length) {
    if (concur.start !== concur.end) throw new Error('flatL can not be used C function or Spread syntax with Promise!!');

    const item: IterableIterator<any> = last(stack);
    const next = item.next();

    if (next.done) {
      stack.pop();
      continue;
    } else if (next.value instanceof Promise) {
      concur.start = !concur.start;
      yield catchNoop(next.value.then(value => {
        concur.end = !concur.end;
        if (stack.length <= depth && !isString(value) && isIterable(value)) {
          const _value = toIterator(value);
          stack.push(_value);
          return Promise.reject(nop);
        }

        return value;
      }));
    } else if (stack.length <= depth && !isString(next.value) && isIterable(next.value)) {
      stack.push(toIterator(next.value));
      continue;
    } else {
      yield next.value;
    }
  }
});

export default flatL;