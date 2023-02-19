const solution = (array) =>
  array.sort((a, b) => a - b)[(array.length / 2) << 0];

function solution(array) {
  var answer = 0;
  array = array.sort(function (a, b) {
    return b - a;
  });
  return array[parseInt(array.length / 2)];
}

// arr -> 정렬 -> 가운데 숫자

// 1. 배열, 제일 작은 값 찾기
// 2. 찾으면 새 배열에 넣기
// 3. 원래 배열에서 넣었던거 삭제
// 1-3 반복
