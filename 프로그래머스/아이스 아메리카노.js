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

// 나의 풀이 추가
function solution(money) {
  const coffeeCnt = Math.floor(money / 5500);
  const moneyLeft = money % 5500;
  return [coffeeCnt, moneyLeft];
}

//다른사람의 풀이
//(1)
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

//(2)
function solution(money) {
  return [~~(money / 5500), money % 5500];
}
