import {
  _concat, _concatC, _concatL, _curry, _curryRight, _delay, _filterL, _flat, _flatC, _flatDeep, _flatDeepC, _flatDeepL,
  _flatL, _flatMapC, _forEach, _forEachC, _forEachL, _go, _groupBy, _identity, _last, _map, _mapL, _mapObject, _push,
  _pushC, _pushL, _range, _rangeL, _reduce, _take, _takeAll, _takeAllC, _takeC, _takeL, _takeUntil, _takeUntilC, _takeUntilL,
  _takeWhile, _takeWhileC, _takeWhileL, _tap, _unshift, _unshiftL
} from '../src/index.js';

_go(
  // _rangeL(10),
  _range(10),
  // _takeAll,
  console.log
);