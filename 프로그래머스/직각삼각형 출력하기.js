const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let logStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += "*";
    }
    logStr += "\n";
  }
  console.log(logStr);
});

// 다른사람의 풀이
//(1)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  solution(Number(input[0]));
});

function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log("*".repeat(i));
  }
}

//(2)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 0; i < Number(input[0]); i++) {
    console.log("*".repeat(i + 1));
  }
});
