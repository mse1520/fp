import nop from './nop';

const noopHandler = (predicate: Function) => (error: any) => error === nop ? predicate() : Promise.reject(error);

export default noopHandler;