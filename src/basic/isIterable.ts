const isIterable = (target: any): target is Iterable<any> => !!target?.[Symbol.iterator];

export default isIterable;