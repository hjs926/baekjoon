//(1);
function solution(n) {
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}
// ceil 뭐가 나오든지 간에 올림

//(2)
// 나의 풀이
function solution(n) {
  var answer = 0;
  let pizzaCount = 1;
  while (true) {
    if ((pizzaCount * 6) % n === 0) {
      answer = pizzaCount;
      break;
    }
    pizzaCount = pizzaCount + 1;
  }
  return answer;
}

// 다른사람 풀이
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
