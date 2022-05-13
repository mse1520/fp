import _curryRight from '@basic/_curryRight';
import _forEach from '@basic/_forEach';
import _map from '@basic/_map';
import _take from '@basic/_take';
import _takeAll from '@basic/_takeAll';
import _forEachL from '@lazy/_forEachL';
import _mapL from '@lazy/_mapL';

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