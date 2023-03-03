function solution(age) {
  var answer = 2023 - age;
  return answer;
}

// 다른사람의 풀이
//(1)
function solution(age) {
  return new Date().getFullYear() - age + 1;
}
// 위 문제 단점 해가지나가면 틀릴 수 있다

//(2)

function solution(age) {
  return 2022 - age + 1;
}
