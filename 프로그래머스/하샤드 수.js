function solution(x) {
  // x = 18
  var sum = 0;
  var arr = String(x).split(""); // [1,8]

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // 1+8
  }
  return x % sum == 0 ? true : false;
}

//1
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

solution(12);
