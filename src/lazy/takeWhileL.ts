import nop from '@internal/nop';
import passParam from '@internal/passParam';

const takeWhileL = function* (iterable: any, predicate: any) {
  let index = -1;

  for (const value of iterable) {
    const cond = passParam(value, (value: any) => (index++, predicate(value, index)), index);

    if (cond instanceof Promise)
      yield cond.then(cond => cond ? value : Promise.reject(nop));

    if (!cond) break;

    yield value;
  }
};

export default takeWhileL;