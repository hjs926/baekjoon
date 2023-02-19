function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }

  return answer;
}

ㅡㅡ;

function solution(n) {
  var answer = [];
  let cnt = 1;
  while (cnt <= n) {
    if (cnt % 2 === 1) {
      answer.push(cnt);
    }
    cnt = cnt + 1;
  }
}
