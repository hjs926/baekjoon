function solution(num_list) {
  return num_list.reverse((a, b) => b - a);
}

//다른사람의 풀이
//1 
function solution(num_list) {
  var answer = [];
  var j = num_list.length
  for(var i = 1; i <= j; i++){
      answer.push(num_list[j-i])
  }
  return answer;
}

//2  
function solution(num_list) {
  return num_list.sort((a, b) => -1);
}
```