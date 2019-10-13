module.exports = function zeros(expression) {
 let factorials = expression.split("*");
  let zero = 0;
  let twos = false;
  let single = false;
  for (let item of factorials) {
    let step = item.split("!").length - 1;
    let n = parseInt(item);
    if (n < 5) {
      continue;
    }
    //!!factorial
    if (step === 2) {
      if (Number.isInteger(n / 2)) {
        zero += Math.trunc(n / 10);
        if (n > 50) {
          zero += (1 + Math.trunc(n / 100));
        }
        twos = true;
      } else {
        zero += Math.trunc((n + 5) / 10);
        if (n > 25) {
          zero++;
        }
      }
      continue;
    }
    //!factorial
    single = true;
    let i = 1;
    let add = n / Math.pow(5, i);
    while (add >= 1) {
      zero += Math.trunc(add);
      i++;
      add = n / Math.pow(5, i);
    }
  }
  if (!single && !twos) {
    return 0;
  } else {
    return zero;
  }
}
