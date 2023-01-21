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
