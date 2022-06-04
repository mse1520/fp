import _curry from '@basic/_curry';
import _curryRight from '@basic/_curryRight';
import _deepFlat from '@basic/_deepFlat';
import _delay from '@basic/_delay';
import _entries from '@basic/_entries';
import _filter from '@basic/_filter';
import _flat from '@basic/_flat';
import _flatMap from '@basic/_flatMap';
import _forEach from '@basic/_forEach';
import _go from '@basic/_go';
import _groupBy from '@basic/_groupBy';
import _head from '@basic/_head';
import _identity from '@basic/_identity';
import _keys from '@basic/_keys';
import _last from '@basic/_last';
import _map from '@basic/_map';
import _object from '@basic/_object';
import _pipe from '@basic/_pipe';
import _range from '@basic/_range';
import _reduce from '@basic/_reduce';
import _reject from '@basic/_reject';
import _take from '@basic/_take';
import _takeAll from '@basic/_takeAll';
import _tap from '@basic/_tap';
import _values from '@basic/_values';
import _filterC from '@concurrency/_filterC';
import _forEachC from '@concurrency/_forEachC';
import _mapC from '@concurrency/_mapC';
import _objectC from '@concurrency/_objectC';
import _reduceC from '@concurrency/_reduceC';
import _rejectC from '@concurrency/_rejectC';
import _takeAllC from '@concurrency/_takeAllC';
import _takeC from '@concurrency/_takeC';
import _deepFlatL from '@lazy/_deepFlatL';
import _entriesL from '@lazy/_entriesL';
import _filterL from '@lazy/_filterL';
import _flatL from '@lazy/_flatL';
import _flatMapL from '@lazy/_flatMapL';
import _forEachL from '@lazy/_forEachL';
import _keysL from '@lazy/_keysL';
import _mapL from '@lazy/_mapL';
import _rangeL from '@lazy/_rangeL';
import _rejectL from '@lazy/_rejectL';
import _takeL from '@lazy/_takeL';
import _valuesL from '@lazy/_valuesL';

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

  // _pipe
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: (data: number[]) => string[] = _pipe(
      _filterL((v: number) => v % 2),
      _map((v: number) => v.toString())
    );

    console.log('_pipe', result(data));
  })();

  // _tap
  (() => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- _tap --------');
    _go(
      data,
      _tap(
        _filter((v: number) => v % 2),
        (v: any) => console.log(v)
      ),
      _reject((v: number) => v % 2),
      (v: any) => console.log(v)
    );
    console.log('------- _tap --------');
  })();

  // _last
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _last(data);

    console.log('_last', result);
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
    const value = await _delay('data!!', 500);

    console.log('_delay', value);
  })();

  // _flat
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

    console.log('------- _flat --------');
    console.log(_flat(data));
    console.log(_flat(data, 2));
    console.log('------- _flat --------');
  })();

  // _deepFlat
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
    const result = _deepFlat(data);

    console.log('_deepFlat', result);
  })();

  // _flatMap
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _flatMap(data, v => [v, v * 2]);

    console.log('_flatMap', result);
  })();

  // _keys
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = _keys(data);
    console.log('_keys', result);
  })();

  // _values
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = _values(data);
    console.log('_values', result);
  })();

  // _entries
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = _entries(data);
    console.log('_entries', result);
  })();

  // _object
  (() => {
    const data: [string, number][] = [['arg1', 1], ['arg2', 2]];
    const result = _object(data);
    console.log('_object', result);
  })();

  // _groupBy
  (() => {
    const data: [string, number][] = [['arg1', 1], ['arg2', 1], ['arg3', 2]];
    const result = _groupBy(data, ([, v]) => v);
    console.log('_groupBy', result);
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

  // _flatL
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

    console.log('------- _flatL --------');
    console.log(..._flatL(data));
    console.log(..._flatL(data, 2));
    console.log('------- _flatL --------');
  })();

  // deepFlatL
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
    const result = _deepFlatL(data);

    console.log('_deepFlatL', ...result);
  })();

  // _flatMapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _flatMapL(data, v => [v, v * 2]);

    console.log('_flatMapL', ...result);
  })();

  // _keysL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = _keysL(data);
    console.log('_keysL', ...result);
  })();

  // _valuesL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = _valuesL(data);
    console.log('_valuesL', ...result);
  })();

  // _entriesL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = _entriesL(data);
    console.log('_entriesL', ...result);
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

  // _forEachC
  await (async () => {
    console.log('------- _forEachC --------');
    await testC('_forEach', _forEach(_identity));
    await testC('_forEachC', _forEachC(_identity));
    console.log('------- _forEachC --------');
  })();

  // _filterC
  await (async () => {
    console.log('------- _filterC --------');
    await testC('_filter', _filter((v: number) => v % 2));
    await testC('_filterC', _filterC((v: number) => v % 2));
    console.log('------- _filterC --------');
  })();

  // _rejectC
  await (async () => {
    console.log('------- _rejectC --------');
    await testC('_reject', _reject((v: number) => v % 2));
    await testC('_rejectC', _rejectC((v: number) => v % 2));
    console.log('------- _rejectC --------');
  })();

  // _reduceC
  await (async () => {
    console.log('------- _reduceC --------');
    await testC('_reduce', _reduce((acc: number, cur: number) => acc + cur));
    await testC('_reduceC', _reduceC((acc: number, cur: number) => acc + cur));
    console.log('------- _reduceC --------');
  })();

  // _objectC
  await (async () => {
    function test(key: string, func: Function) {
      console.time(key);
      return _go(
        _rangeL(5),
        _mapL((v: number) => [`arg${v}`, v]),
        _mapL(_delay(500)),
        func,
        (v: any) => console.log(key, v),
        () => console.timeEnd(key)
      );
    }

    console.log('------- _objectC --------');
    await test('_object', _object);
    await test('_objectC', _objectC);
    console.log('------- _objectC --------');
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