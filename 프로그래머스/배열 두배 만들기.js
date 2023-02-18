function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }

  return answer;
}

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.

const solution = (numbers) => numbers.map((number) => number * 2);

function solution(numbers) {
  return numbers.map((i) => i * 2);
}
