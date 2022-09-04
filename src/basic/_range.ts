import curryRange from '@internal/curryRange';
import notPromise from '@internal/notPromise';
import _rangeL from '@lazy/_rangeL';
import _takeAll from './_takeAll';

interface Range {
  (end: number): number[];
  (start: number, end: number): number[];
  (start: number, end: number, step: number): number[];
}

function range(start: number, end: number, step: number) {
  return notPromise(_takeAll(_rangeL(start, end, step)));
}

const _range: Range = curryRange(range);

export default _range;