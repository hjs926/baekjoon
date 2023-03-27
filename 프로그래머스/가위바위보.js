function solution(rsp) {
  var answer = "";

  for (let i = 0; i < rsp.length; i++) {
    let ch = rsp.charAt(i);
    if (ch === "2") {
      answer += "0";
    } else if (ch === "0") {
      answer += "5";
    } else if (ch === "5") {
      answer += "2";
    }
  }

  return answer;
}

//1

function solution(rsp) {
  const rspWin = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((x) => rspWin[x]).join("");
}

//2
function solution(rsp) {
  return Array.from(rsp)
    .map((v) => {
      switch (+v) {
        case 2:
          return 0;
        case 0:
          return 5;
        default:
          return 2;
      }
    })
    .join("");
}
