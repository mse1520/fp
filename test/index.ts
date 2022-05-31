import _curry from '@basic/_curry';
import _curryRight from '@basic/_curryRight';
import _delay from '@basic/_delay';
import _filter from '@basic/_filter';
import _forEach from '@basic/_forEach';
import _go from '@basic/_go';
import _head from '@basic/_head';
import _identity from '@basic/_identity';
import _map from '@basic/_map';
import _range from '@basic/_range';
import _reduce from '@basic/_reduce';
import _reject from '@basic/_reject';
import _take from '@basic/_take';
import _takeAll from '@basic/_takeAll';
import _mapC from '@concurrency/_mapC';
import _takeAllC from '@concurrency/_takeAllC';
import _takeC from '@concurrency/_takeC';
import _filterL from '@lazy/_filterL';
import _forEachL from '@lazy/_forEachL';
import _mapL from '@lazy/_mapL';
import _rangeL from '@lazy/_rangeL';
import _rejectL from '@lazy/_rejectL';
import _takeL from '@lazy/_takeL';

(async () => {
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

  // _takeAll
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _takeAll(_filterL(data, v => v % 2));

    console.log('_takeAll', result);
  })();

  // _head
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _head(data);

    console.log('_head', result);
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

  // _reject
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _reject(data, v => v % 2);

    console.log('_reject', result);
  })();

  // _reduce
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _reduce(data, (acc, cur) => acc + cur);

    console.log('_reduce', result);
  })();

  // _go
  (() => {
    const data = [1, 2, 3, 4, 5];
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

  // _delay
  await (async () => {
    const value = await _delay('data!!', 1000);

    console.log('_delay', value);
  })();

  // _takeL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _takeL(data, 3);

    console.log('_takeL', ...result);
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

  // _rejectL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _rejectL(data, v => v % 2);

    console.log('_rejectL', ...result);
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

  // _takeC
  await (async () => {


    console.log('------- _takeC --------');
    await testC('_take', _take(Infinity));
    await testC('_takeC', _takeC(Infinity));
    console.log('------- _takeC --------');
  })();

  // _takeAllC
  (() => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- _takeAllC --------');
    console.log('_takeC', _takeC(data, 3));
    console.log('_takeAllC', _takeAllC(data));
    console.log('------- _takeAllC --------');
  })();

  // _mapC
  await (async () => {
    console.log('------- _mapC --------');
    await testC('_map', _map((v: number) => v + 1));
    await testC('_mapC', _mapC((v: number) => v + 1));
    console.log('------- _mapC --------');
  })();
})();

function testC(key: string, func: Function, delay = 500) {
  console.time(key);
  return _go(
    _rangeL(5),
    _mapL(_delay(delay)),
    func,
    (v: any) => console.log(key, v),
    () => console.timeEnd(key)
  );
}