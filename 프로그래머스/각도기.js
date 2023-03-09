function solution(angle) {
  var answer = 0;
  if (angle < 90) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else if (angle == 180) {
    return 4;
  }
  return answer;
}

//1 필터 사용
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
