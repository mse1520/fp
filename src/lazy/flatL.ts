import last from '@basic/last';
import catchNoop from '@internal/catchNoop';
import curryFlat from '@internal/curryFlat';
import errorNoop from '@internal/errorNoop';
import isString from '@internal/isString';
import notPromise from '@internal/notPromise';
import toIterator from '@internal/toIterator';

interface FlatL {
  /**
   * The flat() method creates a Generator with all sub-iterator concatenated into it recursively up to the specified depth.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   * @returns Generator
   */
  (): <T extends Iterable<any>>(iterable: T) => Generator<any, void>;
  (depth: number): <T extends Iterable<any>>(iterable: T) => Generator<any, void>;
  <T extends Iterable<any>>(iterable: T): Generator<any, void>;
  <T extends Iterable<any>>(iterable: T, depth: number): Generator<any, void>;
}

function isIterable(target: any): target is Iterable<any> {
  return target[Symbol.iterator];
}

function* _flatL<T extends Iterable<any>>(iterable: T, depth: number) {
  const stack = [toIterator(iterable)];
  let concur = { start: false, end: false };

  while (stack.length) {
    if (concur.start !== concur.end) throw new Error('flatL can not be used C function or Spread syntax with Promise!!');

    let next = notPromise(last(stack)).next();

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
          return Promise.reject(errorNoop);
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
}

const flatL: FlatL = curryFlat(_flatL);

export default flatL;