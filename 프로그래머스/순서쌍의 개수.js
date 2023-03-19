function solution(n) {
  const divisor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisor.push(i);
    }
  }

  return divisor.length;
}

// (1)
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
