function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }

  return result;
}

//1
function solution(num_list, n) {
  // 정답배열 생성
  const result = [];
  // 전 범위 순환
  for (let i = 0; i < num_list.length; ) {
    const sliceN = [];
    // n만큼 배열 생성
    for (let j = 0; j < n; j++) {
      sliceN.push(num_list[i]);
      i++;
    }
    result.push(sliceN);
  }
  return result;
}
