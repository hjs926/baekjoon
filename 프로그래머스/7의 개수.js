const solution = (array) =>
  array
    .join("")
    .split("")
    .filter((a) => a === "7").length;
//1
function solution(array) {
  return array.join("").split("7").length - 1;
}
