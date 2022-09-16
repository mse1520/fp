function notPromise<T>(target: T): Awaited<T>;
function notPromise(target: any) { return target };

export default notPromise;