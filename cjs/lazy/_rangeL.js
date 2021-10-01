function* _rangeL(start = 0, end, step = 1) {
  if (arguments.length === 1) end = start, start = 0;

  while (start < end) yield start, start += step;
}

module.exports = _rangeL;