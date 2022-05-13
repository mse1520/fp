import _map from '@basic/_map';
import _take from '@basic/_take';
import _takeAll from '@basic/_takeAll';
import _mapL from '@lazy/_mapL';

console.log(
  _map([1, Promise.resolve(2), 3, 4], v => v.toString())
) 