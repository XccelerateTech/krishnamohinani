//Intro to Javascript exercise

function calculator (operator, num1, num2) {
    if (operator !== '+'| '-' | '*' |'/') {
      throw new Error('Please enter a valid operator');
  }
  if (operator === '+') {
      return (num1 + num2);
  } else if (operator === '-'){
      return (num1 - num2);
  } else if (operator === '*'){
      return (num1 * num2);
  } else if (operator === '/'){
      return (num1/num2);
  }
}