//1-1
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const twoMaxima = numbers.splice(0, 2);
  return twoMaxima[0] * twoMaxima[1];
}

//1-2
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

//2-1
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const firstTwo = numbers[0] * numbers[1];
  const lastTwo = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return firstTwo > lastTwo ? firstTwo : lastTwo;
}
