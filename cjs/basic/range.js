function range(start = 0, end, step = 1) {
  if (arguments.length === 1) end = start, start = 0;
  const result = [];

  while (start < end) result.push(start), start += step;

  return result;
}

module.exports = range;