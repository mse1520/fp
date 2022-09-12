/**
 * Returns the received value as it is.
 * @param valueTthe received value.
 * @returns The received value
 */
function identity<T>(value: T) {
  return value;
}

export default identity;