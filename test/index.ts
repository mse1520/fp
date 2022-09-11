import curry from '@basic/curry';
import curryRight from '@basic/curryRight';
import _deepFlat from '@basic/_deepFlat';
import _delay from '@basic/_delay';
import _entries from '@basic/_entries';
import filter from '@basic/filter';
import _flat from '@basic/_flat';
import flatMap from '@basic/flatMap';
import forEach from '@basic/forEach';
import _go from '@basic/_go';
import _groupBy from '@basic/_groupBy';
import head from '@basic/head';
import _identity from '@basic/_identity';
import _join from '@basic/_join';
import _keys from '@basic/_keys';
import _last from '@basic/_last';
import map from '@basic/map';
import _object from '@basic/_object';
import _pipe from '@basic/_pipe';
import _range from '@basic/_range';
import _reduce from '@basic/_reduce';
import reject from '@basic/reject';
import take from '@basic/take';
import takeAll from '@basic/takeAll';
import _tap from '@basic/_tap';
import _values from '@basic/_values';
import filterC from '@concurrency/filterC';
import _forEachC from '@concurrency/forEachC';
import mapC from '@concurrency/mapC';
import _objectC from '@concurrency/_objectC';
import _reduceC from '@concurrency/_reduceC';
import _rejectC from '@concurrency/_rejectC';
import takeAllC from '@concurrency/takeAllC';
import takeC from '@concurrency/takeC';
import _deepFlatL from '@lazy/_deepFlatL';
import _entriesL from '@lazy/_entriesL';
import filterL from '@lazy/filterL';
import _flatL from '@lazy/_flatL';
import flatMapL from '@lazy/flatMapL';
import forEachL from '@lazy/forEachL';
import _keysL from '@lazy/_keysL';
import mapL from '@lazy/mapL';
import _rangeL from '@lazy/_rangeL';
import rejectL from '@lazy/rejectL';
import takeL from '@lazy/takeL';
import _valuesL from '@lazy/_valuesL';

(async () => {
  // curry
  (() => {
    const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
    const curring = curry(add);

    console.log('------- curry --------');
    console.log(curring(1, 2, 3));
    console.log(curring(1, 2)(3));
    console.log(curring(1)(2, 3));
    console.log(curring(1)(2)(3));
    console.log('------- curry --------');
  })();

  // curryRight
  (() => {
    const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
    const curring = curryRight(add);

    console.log('------- curryRight --------');
    console.log(curring(1, 2, 3));
    console.log(curring(2, 3)(1));
    console.log(curring(3)(1, 2));
    console.log(curring(3)(2)(1));
    console.log('------- curryRight --------');
  })();

  // take
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = take(data, 5);

    console.log('take', result);
  })();

  // takeAll
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeAll(filterL(data, v => v % 2));

    console.log('takeAll', result);
  })();

  // head
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = head(data);

    console.log('head', result);
  })();

  // map
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = map(data, v => v + 1);

    console.log('map:', result);
  })();

  // forEach
  (() => {
    const data = [1, 2, 3];

    console.log('------- forEach --------');
    const result = forEach(data, v => console.log(v + 1));
    console.log(result);
    console.log('------- forEach --------');
  })();

  // filter
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = filter(data, v => v % 2);

    console.log('filter', result);
  })();

  // reject
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = reject(data, v => v % 2);

    console.log('reject', result);
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
      filterL((v: number) => v % 2),
      map((v: number) => v.toString())
    );

    console.log('_go', result);
  })();

  // _pipe
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: (data: number[]) => string[] = _pipe(
      filterL((v: number) => v % 2),
      map((v: number) => v.toString())
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
        filter((v: number) => v % 2),
        (v: any) => console.log(v)
      ),
      reject((v: number) => v % 2),
      (v: any) => console.log(v)
    );
    console.log('------- _tap --------');
  })();

  // _join
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = _join(data, ',');

    console.log('_join', result);
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

  // flatMap
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = flatMap(data, v => [v, v * 2]);

    console.log('flatMap', result);
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

  // takeL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeL(data, 3);

    console.log('takeL', ...result);
  })();

  // mapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = mapL(data, v => v + 1);

    console.log('------- mapL --------');
    console.log(result.next());
    console.log(result.next());
    console.log(...result);
    console.log('------- mapL --------');
  })();

  // forEachL
  (() => {
    const data = [1, 2, 3];

    console.log('------- forEachL --------');
    const result = forEachL(data, v => console.log(v + 1));
    result.next();
    result.next();
    console.log(result);
    console.log('------- forEachL --------');
  })();

  // filterL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = filterL(data, v => v % 2);

    console.log('filterL', ...result);
  })();

  // rejectL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = rejectL(data, v => v % 2);

    console.log('rejectL', ...result);
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

  // flatMapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = flatMapL(data, v => [v, v * 2]);

    console.log('flatMapL', ...result);
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

  // takeC
  await (async () => {
    console.log('------- takeC --------');
    await testC('take', take(Infinity));
    await testC('takeC', takeC(Infinity));
    console.log('------- takeC --------');
  })();

  // takeAllC
  (() => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- takeAllC --------');
    console.log('takeC', takeC(data, 3));
    console.log('takeAllC', takeAllC(data));
    console.log('------- takeAllC --------');
  })();

  // mapC
  await (async () => {
    console.log('------- mapC --------');
    await testC('map', map((v: number) => v + 1));
    await testC('mapC', mapC((v: number) => v + 1));
    console.log('------- mapC --------');
  })();

  // _forEachC
  await (async () => {
    console.log('------- _forEachC --------');
    await testC('forEach', forEach(_identity));
    await testC('_forEachC', _forEachC(_identity));
    console.log('------- _forEachC --------');
  })();

  // filterC
  await (async () => {
    console.log('------- filterC --------');
    await testC('filter', filter((v: number) => v % 2));
    await testC('filterC', filterC((v: number) => v % 2));
    console.log('------- filterC --------');
  })();

  // _rejectC
  await (async () => {
    console.log('------- _rejectC --------');
    await testC('reject', reject((v: number) => v % 2));
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
        mapL((v: number) => [`arg${v}`, v]),
        mapL(_delay(500)),
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
    mapL(_delay(delay)),
    func,
    (v: any) => console.log(key, v),
    () => console.timeEnd(key)
  );
}