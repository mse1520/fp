import chunkL from '@lazy/chunkL';
import takeAll from './takeAll';
import curryRight from './curryRight';

interface Chunk {
  /**
   * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param length the length of each chunk.
   * @returns Returns the new array of chunks.
   */
  <T>(iterable: Iterable<T>, length: number): any;
  (length: number): <T>(iterable: Iterable<T>) => any;
}

const chunk: Chunk = curryRight(<T>(iterable: Iterable<T>, length: number) => takeAll(chunkL(iterable, length)));

export default chunk;