function solution(my_string) {
  const str = "aeiou";

  let newString = my_string.split("");

  for (let i = 0; i < aeiou.length; i++) {
    for (let j = 0; j < my_string.length; j++) {
      if (newString.includes(aeiou[i])) {
        newString.splice(newString.indexOf(aeiou[i]), 1);
      }
    }
  }

  return newString.join("");
}

//1
function solution(my_string) {
  const str = "aeiou";
  let newString = my_string
    .split("")
    .filter((el) => !str.includes(el))
    .join("");

  return newString;
}
