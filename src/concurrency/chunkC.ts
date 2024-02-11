import chunkL from '@lazy/chunkL';
import takeAllC from './takeAllC';
import curryRight from '@basic/curryRight';

interface ChunkC {
  <T>(iterable: Iterable<T>, length: number): any;
  (length: number): <T>(iterable: Iterable<T>) => any;
}

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param length the length of each chunk.
 * @returns Returns the new array of chunks.
 */
const chunkC: ChunkC = curryRight(<T>(iterable: Iterable<T>, length: number) => takeAllC(chunkL(iterable, length)));

export default chunkC;