const solution = (order) =>
  [...(order + "")].filter((a) => ["3", "6", "9"].includes(a)).length;

//1
function solution(order) {
  clap = [...("" + order)]; //2,9,4,2,3

  count = 0;
  for (i = 0; i < clap.length; i++) {
    if (clap[i] % 3 === 0) {
      count += 1;
    }
  }

  return count;
}
