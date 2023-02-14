function solution(num1, num2) {
  var answer = parseInt((num1 / num2) * 1000);
  return answer;
}

function solution(num1, num2) {
  var answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

// 1. num1을 nm2로 나눈다.
// 2. 나눈 값에 1000을 곱한다.
// 3. 그 값에 정수붑ㄴ을 구한다.

// parseInt와 Math.floor의 차이
// Math.floor를 선호한다 훨씬 빠르고
