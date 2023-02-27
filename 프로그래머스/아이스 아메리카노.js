function solution(money) {
  const americano = 5500;

  const glass = Math.floor(money / americano);
  const change = money % americano;

  const ans = [glass, change];

  return ans;
}
function solution(money) {
  let count = 0;
  while (money >= 5500) {
    money -= 5500;
    count++;
  }
  return [count, money];
}

//(1) 다른사람의 풀이
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

//(2)
function solution(money) {
  return [~~(money / 5500), money % 5500];
}
