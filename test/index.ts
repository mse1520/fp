import reduce from '@basic/reduce';
import { curry, curryRight, delay, filter, filterL, forEach, forEachC, forEachL, go, head, identity, last, map, mapC, mapL, pipe, range, rangeL, reduceC, take, takeAll, takeAllC, takeC, takeL, tap } from '../src';

const testC = (key: string, func: Function, time = 500) => {
  console.time(key);
  return go(
    rangeL(5),
    mapL(delay(time)),
    func,
    (v: any) => console.log(key, v),
    () => console.timeEnd(key)
  );
};

(async () => {

  // identity
  (() => {
    const data = 'data!!';
    const result = identity(data);

    console.log('identity', result);
  })();

  // delay
  await (async () => {
    const value = await delay(Promise.resolve('data!!'), 500);

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
  // (() => {
  //   const data = [1, 2, 3, 4, 5];

  //   console.log('------- tap --------');
  //   go(
  //     data,
  //     tap(
  //       filter((v: number) => v % 2),
  //       (v: any) => console.log(v)
  //     ),
  //     reject((v: number) => v % 2),
  //     (v: any) => console.log(v)
  //   );
  //   console.log('------- tap --------');
  // })();

  // takeL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeL(data, 3);

    console.log('takeL', ...result);
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

})();