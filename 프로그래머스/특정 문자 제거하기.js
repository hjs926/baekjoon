function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");

  return answer;
}

//1
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

//2
function solution(my_string, letter) {
  let str = "";
  const arr = my_string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== letter) str += arr[i];
  }
  return str;
}
