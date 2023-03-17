function solution(emergency) {
  let temp = [...emergency].sort((a, b) => b - a);
  let obj = {};
  temp.forEach((el, idx) => (obj[el] = idx + 1));

  let answer = [];
  emergency.forEach((el, idx) => (answer[idx] = obj[el]));
  return answer;
}

//(1)
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

//(2)
function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map((k) => {
    const queue = sort.findIndex((v) => v === k);

    return queue + 1;
  });
}
