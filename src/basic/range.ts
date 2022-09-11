import curryRange from '@internal/curryRange';
import notPromise from '@internal/notPromise';
import rangeL from '@lazy/rangeL';
import takeAll from './takeAll';

interface Range {
  /**
   * Create a flexibly-numbered array of integers.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param {number} start he start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   */
  (end: number): number[];
  (start: number, end: number): number[];
  (start: number, end: number, step: number): number[];
}

function _range(start: number, end: number, step: number) {
  return notPromise(takeAll(rangeL(start, end, step)));
}

const range: Range = curryRange(_range);

export default range;