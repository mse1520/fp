import curryRange from '@internal/curryRange';
import _rangeL from '@lazy/_rangeL';
import _takeAll from './_takeAll';

interface Range {
  (end: number): number[] | Promise<number[]>;
  (start: number, end: number): number[] | Promise<number[]>;
  (start: number, end: number, step: number): number[] | Promise<number[]>;
}

function range(start: number, end: number, step: number) {
  return _takeAll(_rangeL(start, end, step));
}

const _range: Range = curryRange(range);

export default _range;