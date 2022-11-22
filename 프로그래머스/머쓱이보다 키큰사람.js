const solution = (array, height) =>
  array.sort((a, b) => b - a).reduce((a, b) => (b > height ? a + 1 : a), 0);
