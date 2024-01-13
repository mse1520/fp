import noop from '@basic/noop';

const catchNoop = <T>(target: Promise<T>) => (target.catch(noop), target);

export default catchNoop;