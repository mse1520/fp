function flatPromise<T extends Promise<any>>(target: T): T extends Promise<infer R> ? Promise<Awaited<R>> : T;
function flatPromise(target: any) { return target };

export default flatPromise;