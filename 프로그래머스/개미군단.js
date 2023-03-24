function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
  return first + second + third;
}

//(1)

function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
  return first + second + third;
}

//(2)

function solution(hp) {
  let general = Math.floor(hp / 5);
  let soldier = Math.floor((hp - general * 5) / 3);
  let worker = hp - general * 5 - soldier * 3;
  return general + soldier + worker;
}
