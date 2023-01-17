function solution(num_list) {
  const evenLength = num_list.filter((n) => n % 2 === 0).length;

  return [evenLength, num_list.length - evenLength];
}

function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

// 체크 for(let a of) 형태
