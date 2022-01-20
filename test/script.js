import {
  _concat, _concatC, _concatL, _curry, _curryRight, _delay, _filter, _filterL, _flat, _flatC, _flatDeep, _flatDeepC, _flatDeepL,
  _flatL, _flatMapC, _forEach, _forEachC, _forEachL, _go, _groupBy, _head, _identity, _join, _last, _map, _mapL, _mapObject, _pipe, _push,
  _pushC, _pushL, _range, _rangeL, _reduce, _replace, _replaceAll, _split, _take, _takeAll, _takeAllC, _takeC, _takeL, _takeUntil, _takeUntilC, _takeUntilL,
  _takeWhile, _takeWhileC, _takeWhileL, _tap, _toUpperCase, _toUpperCaseFirst, _unshift, _unshiftL
} from '../src/index.js';
import { toQueryString, ipFormatter, intFormatter, floatFormatter } from '../src/utility.js';

console.log('----------basic---------');
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

  console.log('_go:', result); // 7
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

  console.log('_pipe:', result(1)); // 7
})();

// _curry 사용법
(() => {
  let add = (a, b, c) => `a: ${a}, b: ${b}, c:${c}`;
  add = _curry(add);

  console.log('------- _curry --------');
  console.log(add(1, 2, 3));
  console.log(add(1, 2)(3));
  console.log(add(1)(2, 3));
  console.log(add(1)(2)(3));
  console.log('------- _curry --------');
})();

// _curryRight 사용법
(() => {
  let add = (a, b, c) => `a: ${a}, b: ${b}, c:${c}`;
  add = _curryRight(add);

  console.log('------- _curryRight --------');
  console.log(add(1, 2, 3));
  console.log(add(2, 3)(1));
  console.log(add(3)(1, 2));
  console.log(add(3)(2)(1));
  console.log('------- _curryRight --------');
})();

// _map 사용법
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _map(data, v => v + 1);

  console.log('_map:', result);
})();

// _filter 사용법
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _filter(data, v => v % 2);

  console.log('_filter:', result);
})();

// _reduce 사용법
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _reduce(data, (acc, val) => acc + val);

  console.log('_reduce:', result);
})();

// _take 사용법
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _take(data, 3);

  console.log('_take:', result);
})();

// _takeAll 사용법
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _takeAll(data);

  console.log('_takeAll:', result);
})();

// _identity 사용법
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _identity(data);

  console.log('_identity:', result);
})();

// _range 사용법
(() => {
  console.log('_range:', _range(5));
  console.log('_range:', _range(-5));
  console.log('_range:', _range(5, 10));
  console.log('_range:', _range(10, 5));
  console.log('_range:', _range(0, 5, 2));
})();

// _split 사용법
(() => {
  console.log('_split:', _split('1-2-3', '-'));
})();

// _toUpperCase 사용법
(() => {
  console.log('_toUpperCase:', _toUpperCase('abc'));
})();

// _toUpperCaseFirst 사용법
(() => {
  console.log('_toUpperCase:', _toUpperCaseFirst('abc'));
})();

console.log('----------Utility---------');
// ipFormatter 사용법
(() => {
  document.querySelector('#ip-formatter').addEventListener('input', e => {
    e.target.value = ipFormatter(e.target.value);
  });

  console.log('Utility ipFormatter:', ipFormatter('12323.23.23ddd.22223.23'));
  console.log('Utility ipFormatter:', ipFormatter('12323.23.23ddd2222323'));
})();

// floatFormatter 사용법
(() => {
  document.querySelector('#num-formatter').addEventListener('input', e => {
    e.target.value = floatFormatter(e.target.value);
  });

  console.log('Utility floatFormatter:', floatFormatter('+++---.12323.23.23ddd.22223.23'));
  console.log('Utility floatFormatter:', floatFormatter('---+12323.'));
})();

// intFormatter 사용법
(() => {
  document.querySelector('#int-formatter').addEventListener('input', e => {
    e.target.value = intFormatter(e.target.value);
  });

  console.log('Utility intFormatter:', intFormatter('+++---.12323.23.23ddd.22223.23'));
})();