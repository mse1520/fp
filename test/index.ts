import { curry, curryRight, filterL, map, mapL, range, rangeL, take, takeAll, takeL } from '../src';

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
    const result: number[] = take(data, 3);

    console.log('take', result);
  })();

  // takeAll
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = takeAll(filterL(data, v => v % 2));

    console.log('takeAll', result);
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

    console.log('map:', result);
  })();

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

})();