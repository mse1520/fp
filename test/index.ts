import { mapL } from '../src';

(async () => {

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

})();
