function showRandomNumber (from, to) {
  if ((from > 0 && to > 0) && to > from) {
    const random = Math.round(Math.random() * (to - from + 1)) + from;
    return random;
  }
}

showRandomNumber(1,100);

function showRandomNumberExp (from, to, exp) {
  if ((from > 0 && to > 0) && to > from) {
    const random = Math.random() * (to - from + 1) + from;
    random.toFixed(exp);
    return random;
  }
}

showRandomNumberExp(1,100,3);
