import {
  chunk, chunkC, chunkL, curry, curryRight, deepFlat, deepFlatL, delay, entries, entriesL, filter, filterC, filterL, flat, flatL, flatMap, flatMapL, forEach,
  forEachC, forEachL, fromEntries, fromEntriesC, go, groupBy, groupByC, head, identity, isArray, isIterable, isString, join, joinC, keys, keysL, last, map,
  mapC, mapL, noop, pipe, range, rangeL, reduce, reduceC, reject, rejectC, rejectL, sortBy, sortByC, take, takeAll, takeAllC, takeC, takeL, takeUntil,
  takeUntilC, takeUntilL, takeWhile, takeWhileC, takeWhileL, tap, toIterator, values, valuesL
} from '../src';

const testC = (key: string, func: Function, data?: any, time = 500) => {
  console.time(key);
  return go(
    !data ? rangeL(5) : data,
    mapL(delay(time)),
    func,
    (v: any) => console.log(key, v),
    () => console.timeEnd(key)
  );
};

(async () => {

  // isString
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- isString --------');
    console.log(isString(num));
    console.log(isString(str));
    console.log(isString(arr));
    console.log('------- isString --------');
  })();

  // isArray
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- isArray --------');
    console.log(isArray(num));
    console.log(isArray(str));
    console.log(isArray(arr));
    console.log('------- isArray --------');
  })();

  // isIterable
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- isIterable --------');
    console.log(isIterable(num));
    console.log(isIterable(str));
    console.log(isIterable(arr));
    console.log('------- isIterable --------');
  })();

  // toIterator
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- toIterator --------');
    console.log(toIterator(num).next());
    console.log(toIterator(str).next());
    console.log(toIterator(arr).next());
    console.log('------- toIterator --------');
  })();

  // noop
  (() => {
    console.log('noop', noop());
  })();

  // identity
  (() => {
    const data = 'data!!';
    const result = identity(data);

    console.log('identity', result);
  })();

  // delay
  await (async () => {
    const value = await delay('data!!', 500);

    console.log('delay', value);
  })();

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
    const result: number[] = take(data, 3);

    console.log('take', result);
  })();

  // takeAll
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = takeAll(filterL(data, v => v % 2));

    console.log('takeAll', result);
  })();

  // takeWhile
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = takeWhile(data, v => v < 4);

    console.log('takeWhile', result);
  })();

  // takeUntil
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = takeUntil(data, v => v > 3);

    console.log('takeUntil', result);
  })();

  // chunk
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[][] = chunk(data, 2);

    console.log('chunk', result);
  })();

  // head
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number = head(data);

    console.log('head', result);
  })();

  // last
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number = last(data);

    console.log('last', result);
  })();

  // range
  (() => {
    console.log('------- range --------');
    console.log(range(10));
    console.log(range(0, 10));
    console.log(range(0, 10, 2));
    console.log(range(-10));
    console.log(range(0, -10));
    console.log(range(0, -10, 2));
    console.log('------- range --------');
  })();

  // map
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = map(data, v => v + 1);

    console.log('map', result);
  })();

  // forEach
  (() => {
    const data = [1, 2, 3];

    console.log('------- forEach --------');
    const result: number[] = forEach(data, v => console.log(v + 1));
    console.log(result);
    console.log('------- forEach --------');
  })();

  // filter
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = filter(data, v => v % 2);

    console.log('filter', result);
  })();

  // reject
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = reject(data, v => v % 2);

    console.log('reject', result);
  })();

  // reduce
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number = reduce(data, (acc: number, cur) => acc + cur);

    console.log('reduce', result);
  })();

  // go
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: string[] = go(
      data,
      filterL((v: number) => v % 2),
      map((v: number) => v.toString())
    );

    console.log('go', result);
  })();

  // pipe
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: (data: number[]) => string[] = pipe(
      filterL((v: number) => v % 2),
      map((v: number) => v.toString())
    );

    console.log('pipe', result(data));
  })();

  // tap
  (() => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- tap --------');
    go(
      data,
      tap(
        filter((v: number) => v % 2),
        (v: any) => console.log(v)
      ),
      reject((v: number) => v % 2),
      (v: any) => console.log(v)
    );
    console.log('------- tap --------');
  })();

  // groupBy
  (() => {
    const data = [
      { arg1: '그룹A', arg2: '그룹A', arg3: '그룹A' },
      { arg1: '그룹A', arg2: '그룹A', arg3: '그룹A' },
      { arg1: '그룹A', arg2: '그룹A', arg3: '그룹B' },
      { arg1: '그룹A', arg2: '그룹A', arg3: '그룹B' },
      { arg1: '그룹A', arg2: '그룹A', arg3: '그룹B' },
      { arg1: '그룹A', arg2: '그룹A', arg3: '그룹C' },
      { arg1: '그룹A', arg2: '그룹B', arg3: '그룹A' },
      { arg1: '그룹A', arg2: '그룹B', arg3: '그룹C' },
      { arg1: '그룹A', arg2: '그룹C', arg3: '그룹C' },
      { arg1: '그룹B', arg2: '그룹A', arg3: '그룹A' },
      { arg1: '그룹B', arg2: '그룹B', arg3: '그룹A' },
      { arg1: '그룹C', arg2: '그룹B', arg3: '그룹A' },
    ];

    const result1 = groupBy(data, v => v.arg1);
    const result2 = groupBy(data, [v => v.arg1, v => v.arg2, v => v.arg3]);
    console.log('------- groupBy --------');
    console.log(result1);
    console.log(result2);
    console.log('------- groupBy --------');
  })();

  // join
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: string = join(data, ',');

    console.log('join', result);
  })();

  // entries
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result: Record<string, number> = entries(data);
    console.log('entries', result);
  })();

  // fromEntries
  (() => {
    const data = [
      ['arg1', 1],
      ['arg2', 2],
    ];

    const result: Record<string, number> = fromEntries(data);
    console.log('fromEntries', result);
  })();

  // keys
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result: string[] = keys(data);
    console.log('keys', result);
  })();

  // values
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result: number[] = values(data);
    console.log('values', result);
  })();

  // flat
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

    console.log('------- flat --------');
    console.log(flat(data));
    console.log(flat(data, 2));
    console.log('------- flat --------');
  })();

  // deepFlat
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
    const result: number[] = deepFlat(data);

    console.log('deepFlat', result);
  })();

  // flatMap
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = flatMap(data, v => [v, v * 2]);

    console.log('flatMap', result);
  })();

  // sortBy
  (() => {
    const data = [2, 5, 3, 1, 4];
    const result1: number[] = sortBy(data, (a, b) => a - b);
    const result2: number[] = sortBy(data, (a, b) => b - a);
    const result3: number[] = sortBy(data, () => 0);

    console.log('------- sortBy --------');
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log('------- sortBy --------');
  })();

  // takeL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeL(data, 3);

    console.log('takeL', ...result);
  })();

  // takeWhileL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeWhileL(data, v => v < 4);

    console.log('takeWhileL', ...result);
  })();

  // takeUntilL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeUntilL(data, v => v > 3);

    console.log('takeUntilL', ...result);
  })();

  // chunkL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = chunkL(data, 2);

    console.log('chunkL', ...result);
  })();

  // rangeL
  (() => {
    console.log('------- rangeL --------');
    console.log(...rangeL(10));
    console.log(...rangeL(0, 10));
    console.log(...rangeL(0, 10, 2));
    console.log(...rangeL(-10));
    console.log(...rangeL(0, -10));
    console.log(...rangeL(0, -10, 2));
    console.log('------- rangeL --------');
  })();

  // mapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = mapL(data, (v: number) => v + 1);

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
    console.log(...result);
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

  // entriesL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = entriesL(data);
    console.log('entriesL', ...result);
  })();

  // keysL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = keysL(data);
    console.log('keysL', ...result);
  })();

  // valuesL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = valuesL(data);
    console.log('valuesL', ...result);
  })();

  // flatL
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

    console.log('------- flatL --------');
    console.log(...flatL(data));
    console.log(...flatL(data, 2));
    console.log('------- flatL --------');
  })();

  // deepFlatL
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
    const result = deepFlatL(data);

    console.log('deepFlatL', ...result);
  })();

  // flatMapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = flatMapL(data, v => [v, v * 2]);

    console.log('flatMapL', ...result);
  })();

  // takeC
  await (async () => {
    console.log('------- takeC --------');
    await testC('take', take(Infinity));
    await testC('takeC', takeC(Infinity));
    console.log('------- takeC --------');
  })();

  // takeAllC
  await (async () => {
    console.log('------- takeAllC --------');
    await testC('takeAll', takeAll);
    await testC('takeAllC', takeAllC);
    console.log('------- takeAllC --------');
  })();

  // takeWhileC
  await (async () => {
    console.log('------- takeWhileC --------');
    await testC('takeWhile', takeWhile((v: number) => v < 4));
    await testC('takeWhileC', takeWhileC((v: number) => v < 4));
    console.log('------- takeWhileC --------');
  })();

  // takeUntilC
  await (async () => {
    console.log('------- takeUntilC --------');
    await testC('takeUntil', takeUntil((v: number) => v > 3));
    await testC('takeUntilC', takeUntilC((v: number) => v > 3));
    console.log('------- takeUntilC --------');
  })();

  // chunkC
  await (async () => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- chunkC --------');
    await testC('chunk', chunk(2));
    await testC('chunkC', chunkC(2));
    console.log('------- chunkC --------');
  })();

  // mapC
  await (async () => {
    console.log('------- mapC --------');
    await testC('map', map((v: number) => v + 1));
    await testC('mapC', mapC((v: number) => v + 1));
    console.log('------- mapC --------');
  })();

  // filterC
  await (async () => {
    console.log('------- filterC --------');
    await testC('filter', filter((v: number) => v % 2));
    await testC('filterC', filterC((v: number) => v % 2));
    console.log('------- filterC --------');
  })();

  // rejectC
  await (async () => {
    console.log('------- rejectC --------');
    await testC('reject', reject((v: number) => v % 2));
    await testC('rejectC', rejectC((v: number) => v % 2));
    console.log('------- rejectC --------');
  })();

  // forEachC
  await (async () => {
    console.log('------- forEachC --------');
    await testC('forEach', forEach(identity));
    await testC('forEachC', forEachC(identity));
    console.log('------- forEachC --------');
  })();

  // reduceC
  await (async () => {
    console.log('------- reduceC --------');
    await testC('reduce', reduce((acc: number, cur: number) => acc + cur));
    await testC('reduceC', reduceC((acc: number, cur: number) => acc + cur));
    console.log('------- reduceC --------');
  })();

  // groupByC
  await (async () => {
    const data = [
      ['arg1', 1],
      ['arg2', 1],
      ['arg3', 2],
      ['arg4', 2],
      ['arg5', 3],
    ];

    console.log('------- groupByC --------');
    await testC('groupBy', groupBy(([, v]: [string, number]) => v), data);
    await testC('groupByC', groupByC(([, v]: [string, number]) => v), data);
    console.log('------- groupByC --------');
  })();

  // joinC
  await (async () => {
    console.log('------- joinC --------');
    await testC('join', join(','));
    await testC('joinC', joinC(','));
    console.log('------- joinC --------');
  })();

  // fromEntriesC
  await (async () => {
    const data = [
      ['arg1', 1],
      ['arg2', 2],
      ['arg3', 3],
      ['arg4', 4],
      ['arg5', 5],
    ];

    console.log('------- fromEntriesC --------');
    await testC('fromEntries', fromEntries, data);
    await testC('fromEntriesC', fromEntriesC, data);
    console.log('------- fromEntriesC --------');
  })();

  // sortByC
  await (async () => {
    const data = [2, 5, 3, 1, 4];

    console.log('------- sortByC --------');
    await testC('sortBy', sortBy((a: number, b: number) => a - b), data);
    await testC('sortByC', sortByC((a: number, b: number) => a - b), data);
    console.log('------- sortByC --------');
  })();

})();
