const solution = (my_string, n) =>
  [...my_string].map((a) => a.repeat(n)).join("");

//1
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}
