const solution = (array) =>
  array.sort((a, b) => a - b)[(array.length / 2) << 0];

function solution(array) {
  var answer = 0;
  array = array.sort(function (a, b) {
    return b - a;
  });
  return array[parseInt(array.length / 2)];
}
