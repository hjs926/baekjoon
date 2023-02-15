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

const solution = (numbers) => numbers.map((number) => number * 2);

function solution(numbers) {
  return numbers.map((i) => i * 2);
}
