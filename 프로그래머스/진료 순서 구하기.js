function solution(emergency) {
  let temp = [...emergency].sort((a, b) => b - a);
  let obj = {};
  temp.forEach((el, idx) => (obj[el] = idx + 1));

  let answer = [];
  emergency.forEach((el, idx) => (answer[idx] = obj[el]));
  return answer;
}
