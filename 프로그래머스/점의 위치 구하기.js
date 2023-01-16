function solution(dot) {
  var answer = "";
  [x, y] = dot;

  if (x > 0 && y > 0) {
    answer = 1;
  } else if (x < 0 && y > 0) {
    answer = 2;
  } else if (x < 0 && y < 0) {
    answer = 3;
  } else {
    answer = 4;
  }

  return answer;
}

function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
