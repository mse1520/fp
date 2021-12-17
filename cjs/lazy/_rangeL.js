function* _rangeL(start = 0, end, step = 1) {
  if (arguments.length === 1) end = start, start = 0;
  if (step < 1) step = 1;

  if (start < end) {
    while (start < end) yield start, start += step;
  } else {
    step *= -1;

    while (start > end) yield start, start += step;
  }
}

module.exports = _rangeL;