function solution(id_pw, db) {
  let result = "";

  //2중 for문을 사용하지 않으려고 map으로 했다 !
  //뭔가 조건문을 더 줄일수 있을 것 같은데,, 어떻게 줄일 수 있을지 싱크빅이 안떠오른다.. 힇희...
  db.map((item, i) => {
    if (id_pw[0] === item[0] && id_pw[1] === item[1]) result = "login";
    else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) result = "wrong pw";
    else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) result = "fail";
  });

  return result;
}

//1
function solution(id_pw, db) {
  let answer = "fail";

  const [id, pw] = id_pw;
  let check = false;

  for (let i = 0; i < db.length; i++) {
    if (id === db[i][0] && pw === db[i][1]) check = true;
    if (id === db[i][0] && pw != db[i][1]) answer = "wrong pw";

    if (check) answer = "login";
  }

  return answer;
}
