import curryRange from '@internal/curryRange';

interface RangeL {
  (end: number): Generator<number, void>;
  (start: number, end: number): Generator<number, void>;
  (start: number, end: number, step: number): Generator<number, void>;
}

/**
 * Create a flexibly-numbered Generator of integers.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param {number} start he start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 */
const rangeL: RangeL = curryRange(function* (start: number, end: number, step: number) {
  if (step < 1) {
    console.warn('In rangeL function, step parameter is not allowed to be less than 1!!');
    step = 1;
  }

  if (start < end) {
    while (start < end) yield start, start += step;
  } else {
    step *= -1;
    while (start > end) yield start, start += step;
  }
});

export default rangeL;