import _curry from '@basic/_curry';
import _curryRight from '@basic/_curryRight';
import _filter from '@basic/_filter';
import _forEach from '@basic/_forEach';
import _go from '@basic/_go';
import _head from '@basic/_head';
import _identity from '@basic/_identity';
import _map from '@basic/_map';
import _range from '@basic/_range';
import _reduce from '@basic/_reduce';
import _take from '@basic/_take';
import _takeAll from '@basic/_takeAll';
import _filterL from '@lazy/_filterL';
import _forEachL from '@lazy/_forEachL';
import _mapL from '@lazy/_mapL';
import _rangeL from '@lazy/_rangeL';
import _takeL from '@lazy/_takeL';

// _curry
(() => {
  const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
  const curring = _curry(add);

  console.log('------- _curry --------');
  console.log(curring(1, 2, 3));
  console.log(curring(1, 2)(3));
  console.log(curring(1)(2, 3));
  console.log(curring(1)(2)(3));
  console.log('------- _curry --------');
})();

// _curryRight
(() => {
  const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
  const curring = _curryRight(add);

  console.log('------- _curryRight --------');
  console.log(curring(1, 2, 3));
  console.log(curring(2, 3)(1));
  console.log(curring(3)(1, 2));
  console.log(curring(3)(2)(1));
  console.log('------- _curryRight --------');
})();

// _take
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _take(data, 5);

  console.log('_take', result);
})();

// _head
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _head(data);

  console.log('_head', result);
})();

// _takeAll
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _takeAll(_filterL(data, v => v % 2));

  console.log('_takeAll', result);
})();

// _map
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _map(data, v => v + 1);

  console.log('_map:', result);
})();

// _forEach
(() => {
  const data = [1, 2, 3];

  console.log('------- _forEach --------');
  const result = _forEach(data, v => console.log(v + 1));
  console.log(result);
  console.log('------- _forEach --------');
})();

// _filter
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _filter(data, v => v % 2);

  console.log('_filter', result);
})();

// _reduce
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _reduce(data, (acc, cur) => acc + cur);

  console.log('_reduce', result);
})();

// _go
(() => {
  const data = [1, 2, Promise.resolve(3), 4, 5];
  const result = _go(
    data,
    _filterL((v: number) => v % 2),
    _map((v: number) => v.toString())
  );

  console.log('_go', result);
})();

// _identity
(() => {
  const data = 'data!!';
  const result = _identity(data);

  console.log('_identity', result);
})();

// _range
(() => {
  console.log('------- _range --------');
  console.log(_range(10));
  console.log(_range(0, 10));
  console.log(_range(0, 10, 2));
  console.log(_range(-10));
  console.log(_range(0, -10));
  console.log(_range(0, -10, 2));
  console.log('------- _range --------');
})();

// _mapL
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _mapL(data, v => v + 1);

  console.log('------- _mapL --------');
  console.log(result.next());
  console.log(result.next());
  console.log(...result);
  console.log('------- _mapL --------');
})();

// _forEachL
(() => {
  const data = [1, 2, 3];

  console.log('------- _forEachL --------');
  const result = _forEachL(data, v => console.log(v + 1));
  result.next();
  result.next();
  console.log(result);
  console.log('------- _forEachL --------');
})();

// _filterL
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _filterL(data, v => v % 2);

  console.log('_filterL', ...result);
})();

// _takeL
(() => {
  const data = [1, 2, 3, 4, 5];
  const result = _takeL(data, 3);

  console.log('_takeL', ...result);
})();

// _rangeL
(() => {
  console.log('------- _rangeL --------');
  console.log(..._rangeL(10));
  console.log(..._rangeL(0, 10));
  console.log(..._rangeL(0, 10, 2));
  console.log(..._rangeL(-10));
  console.log(..._rangeL(0, -10));
  console.log(..._rangeL(0, -10, 2));
  console.log('------- _rangeL --------');
})();