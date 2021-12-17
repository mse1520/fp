import {
  _concat, _concatC, _concatL, _curry, _curryRight, _delay, _filterL, _flat, _flatC, _flatDeep, _flatDeepC, _flatDeepL,
  _flatL, _flatMapC, _forEach, _forEachC, _forEachL, _go, _groupBy, _identity, _last, _map, _mapL, _mapObject, _pipe, _push,
  _pushC, _pushL, _range, _rangeL, _reduce, _replace, _replaceAll, _take, _takeAll, _takeAllC, _takeC, _takeL, _takeUntil, _takeUntilC, _takeUntilL,
  _takeWhile, _takeWhileC, _takeWhileL, _tap, _unshift, _unshiftL
} from '../src/index.js';
import { toQueryString } from '../src/utility.js';

// _go 사용법
(() => {
  const add1 = data => data + 1;
  const add2 = data => data + 2;
  const add3 = data => data + 3;

  const result = _go(
    1,
    add1,
    add2,
    add3
  );

  console.log(`_go: ${result}`); // 7
})();

// _pipe 사용법
(() => {
  const add1 = data => data + 1;
  const add2 = data => data + 2;
  const add3 = data => data + 3;

  const result = _pipe(
    add1,
    add2,
    add3
  );

  console.log(`_pipe: ${result(1)}`); // 7
})();