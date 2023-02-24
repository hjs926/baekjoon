// 나의 풀이
function solution(numbers) {
  var answer = 0;
  let sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  answer = sum / numbers.length;
  return answer;
}

// 다른사람 풀이
// (1)
function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

// (2)
function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}
