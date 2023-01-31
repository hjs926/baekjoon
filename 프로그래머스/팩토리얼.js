function solution(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans *= i;

    if (ans === n) {
      return i;
    }

    if (ans > n) {
      return i - 1;
    }
  }
}

function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
