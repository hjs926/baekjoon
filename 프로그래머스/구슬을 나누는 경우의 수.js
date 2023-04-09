function solution(balls, share) {
  // 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
// 팩토리얼을 구하는 함수
function factorial(num) {
  let returnFactorial = 1;
  for (let i = num; i >= 2; i--) {
    returnFactorial *= i;
  }
  return returnFactorial;
}

//1
function solution(balls, share) {
  if (share === 0) return 1;
  return Math.floor(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
