function notPromise<T>(target: T): T extends Promise<infer R> ? R : T;
function notPromise(target: any) { return target };

export default notPromise;