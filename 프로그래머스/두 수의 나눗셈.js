function solution(num1, num2) {
  // 1. number -> sring
  // 2. 10진수 추론을 위해 string 앞 글자가 0x나 0X인지 비교
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
// Math.floor를 선호한다 훨씬 빠르다
// parseInt() 문자열 인자를 파싱하여 특정 진수의 정수를 반환 (문자 -> 숫자)
