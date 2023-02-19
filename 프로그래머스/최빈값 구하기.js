function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let cnt = 0;
  let choi = -1; //최빈값
  let choiRepeatCnt = 0; //최빈값이 될때 몇 번 반복했는지
  let repeatCnt = 0; // 현재 같은 숫자가 몇번 등장
  let beforeNumber = -1; //지금 보고 있는 숫자 어떤 숫자
  let isDupChoi = false;

  while (cnt < array.length) {
    if (beforeNumber !== array[cnt]) {
      repeatCnt = 1;
    } else {
      repeatCnt = repeatCnt + 1;
    }
    if (repeatCnt === choiRepeatCnt) {
      if (choi !== array[cnt]) {
        isDupChoi = true;
      }
    }
    if (repeatCnt > choiRepeatCnt) {
      choi = array[cnt];
      choiRepeatCnt = repeatCnt;
      isDupChoi = false;
    }
    beforeNumber = array[cnt];
    cnt = cnt + 1;
  }
  if (isDupChoi) return -1;

  return choi;
}
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
