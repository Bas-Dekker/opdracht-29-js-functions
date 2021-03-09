function calcSquared(num1, num2) {
  const num1Squared = num1 * num1;
  const num2Squared = num2 * num2;
  const sum = num1Squared + num2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

const calcSquared = function(num1, num2); {
  const num1Squared = num1 * num1;
  const num2Squared = num2 * num2;
  const sum = num1Squared + num2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

const calcSquared = (num1, num2) => {
const sum = num1 * num1 + num2 * num2;
return sum * sum;
};