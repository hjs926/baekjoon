const solution = (my_string) =>
  [...my_string].filter((a, i) => my_string.indexOf(a) === i).join("");
