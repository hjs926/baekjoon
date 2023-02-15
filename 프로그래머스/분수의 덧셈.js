// 기약분수 - 분모와 분자가 1 이외에는 공약수가 없는 분수

function solution(denum1, num1, denum2, num2) {
  // 분자
  let topNum = num1 * denum2 + num2 * denum1;
  // 분모
  let botNum = num1 * num2;
  // 최소 공배수
  let maximum = 1;
  // 약분
  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && botNum % i === 0) {
      maximum = i;
    }
  }
  return [topNum / maximum, botNum / maximum];
}
// 1. 분모덧셈
// 2. 분자분모의 최대공약수로 나눠줌
// 2-1. 분자분모중 작은 수를 찾기
// 2-2. 작은수를 분자분모로 나눠보기
// 2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대공약수
// 2-2-2. 안 나누어 떨어지면 작은 술르 1 줄이고 2-2로 돌아가기

function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
// GCD - greatest common divisor.
