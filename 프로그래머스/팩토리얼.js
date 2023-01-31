function getFacto(num) {
  // 재귀를 통해 n*n-1... 을 구현함
  if (num > 1) return num * getFacto(num - 1);
  return num;
}
