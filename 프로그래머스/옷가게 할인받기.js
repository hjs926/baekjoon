function solution(price) {
  if (price >= 100000 && price < 300000) {
    return Math.floor(price * 0.95);
  }

  if (price >= 300000 && price < 500000) {
    return Math.floor(price * 0.9);
  }

  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }

  return price;
}

// 다른사람의 풀이
//(1)
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};

//(2)
function solution(price) {
  let arr_discount = [
    [500000, 0.2],
    [300000, 0.1],
    [100000, 0.05],
  ];

  for (let i = 0; i < arr_discount.length; i++)
    if (arr_discount[i][0] <= price)
      return Math.trunc(price * (1 - arr_discount[i][1]));

  return price;
}
