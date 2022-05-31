import curryRange from '@internal/curryRange';

interface RangeL {
  (end: number): Generator<number, void>;
  (start: number, end: number): Generator<number, void>;
  (start: number, end: number, step: number): Generator<number, void>;
}

function* rangeL(start: number, end: number, step: number) {
  if (step < 1) {
    console.warn('In _rangeL function, step parameter is not allowed to be less than 1!!');
    step = 1;
  }

  if (start < end) {
    while (start < end) yield start, start += step;
  } else {
    step *= -1;
    while (start > end) yield start, start += step;
  }
}

const _rangeL: RangeL = curryRange(rangeL);

export default _rangeL;