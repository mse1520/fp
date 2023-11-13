import curryRange from '@internal/curryRange';
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

const range: Range = curryRange((start: number, end: number, step: number) => takeAll(rangeL(start, end, step)));

export default range;