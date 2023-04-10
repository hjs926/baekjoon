function solution(n, t) {
  let answer = 0;
  answer = Math.pow(2, t) * n;
  return answer;
}

//1

const solution = (n, t) => new Array(t).fill(n).reduce((a, b) => a * 2, n);
