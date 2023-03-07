function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");

  return answer;
}

//1
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}
