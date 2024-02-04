import catchNoop from '@internal/catchNoop';
import nop from '@internal/nop';
import passParam from '@internal/passParam';

const takeWhileL = function* (iterable: any, predicate: any) {
  let prev = Promise.resolve();
  let index = -1;

  for (const value of iterable) {
    const cond = passParam(value, (value: any) => (index++, predicate(value, index)));

    if (cond instanceof Promise) {
      prev = catchNoop(prev
        .then(() => cond)
        .then(cond => cond ? value : Promise.reject(nop)));
      yield prev
      continue;
    }

    if (!cond) break;

    yield value;
  }
};

// const resolved = Promise.resolve();
// const takeWhileL = function* takeWhileL(iter: any, f: any) {
//   let prev = resolved,
//     ok = true;
//   for (const a of iter) {
//     const _ok: any = ok && passParam(a, f);
//     if (_ok instanceof Promise) {
//       _ok.catch(noop);
//       yield (prev = prev
//         .then((_) => _ok)
//         .then((_ok) => ((ok = _ok) ? a : Promise.reject(nop))));
//       prev = prev.catch(noop);
//     } else if ((ok = _ok)) {
//       yield a;
//     }
//     if (!ok) break;
//   }
// };

export default takeWhileL;