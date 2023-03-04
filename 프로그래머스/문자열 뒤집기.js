function solution(my_string) {
  var answer = "";
  answer = my_string.split("").reverse().join("");
  return answer;
}

//다른사람풀이
//1
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

//2
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
