function solution(n) {
  var answer = 0;
  var m = String(n);

  for (let i = 0; i < m.length; i++) {
    answer += parseInt(m[i]);
  }
  return answer;
}

//1
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + cur * 1, 0);
}
