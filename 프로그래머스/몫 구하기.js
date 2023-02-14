function solution(num1, num2) {
  var answer = (num1 / num2) >> 0;
  return answer;
}
// 몫을 구하는 코드
// 소수점 뒤만 날리기 버림
// Math.floor 사용

function solution(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}
