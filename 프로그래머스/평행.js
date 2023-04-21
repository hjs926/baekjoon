function solution(dots) {
  var answer = 0;

  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      answer += 1;
    }
  }

  // 1-2, 3-4가 이어졌을 때
  calculation(dots[0], dots[1], dots[2], dots[3]);

  // 1-3, 2-4가 이어졌을 때
  calculation(dots[0], dots[2], dots[1], dots[3]);

  // 1-4, 2-3가 이어졌을 때
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}


//1
function solution(dots) {
  const leanArr = []
  // dots의 길이만큼 반복
  for(let i = 0 ; i < dots.length ; i ++) {
      // i번째를 제외한 그 다음부터 반복
      for(let j = i+1 ; j < dots.length ; j ++) {
          // y좌표의 차이 / x좌표의 차이 = 기울기
          const curLean = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
          // 기울기가 같다면 평행
          if(leanArr.includes(curLean)) return 1
          leanArr.push(curLean)
      }
  }
  return 0
}