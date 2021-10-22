import {
  _concat, _concatC, _concatL, _curry, _curryRight, _filterL, _flat, _flatC, _flatDeep, _flatDeepC, _flatDeepL,
  _flatL, _flatMapC, _forEach, _forEachC, _forEachL, _go, _identity, _last, _map, _mapL, _mapObject, _push,
  _pushC, _pushL, _range, _rangeL, _take, _takeAll, _takeAllC, _takeC, _takeL, _takeUntil, _takeUntilC, _takeUntilL,
  _takeWhile, _takeWhileC, _takeWhileL
} from '../src/index.js';

function delay(value) {
  return new Promise((resolve, reject) => setTimeout(() => value < 0 ? reject('error~') : resolve(value), 1000));
}

console.time('');
_go(
  _rangeL(10),
  // delay,
  _mapL(delay),
  _forEachL(console.log),
  _pushC(['a', 'b', 'c']),
  // _takeAllC,
  console.log,
  () => console.timeEnd('')
);