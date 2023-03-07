const solution = (my_string, n) =>
  [...my_string].map((a) => a.repeat(n)).join("");

//다른사람의 풀이
//1
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

//2
function solution(my_string, n) {
  let ans = "";
  for (let s of my_string) ans += s.repeat(n);
  return ans;
}
