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

//bonus exercise
function area(height, width){
    return height * width;
}

//Conditionals and loops exercise 1

for (var i=1;i<31;i++) {
    if (i%15 == 0 ) {
        console.log('Hong Kong');
    } else if (i%5 == 0) {
        console.log('Kong')
    } else if (i%3==0) {
        console.log('Hong')
    } else {
        console.log(i);
    }

}

//Conditionals and loops exercise 2 

function exerciseJ (num3) {
    if ((num3<=0)|| isNaN(num3)){
        return 'ERROR';
    } else if (num3>=1000000){
        return num3;
    } else return (exerciseJ (num3*10))
}

//Conditionals and loops bonus 1 

//Cinditionals and loops bonus 2
function countChar(word, letter){
   var count=0;
   for (i=0;i<word.length;i++){
        if (word[i]===letter){
            count++;
        }
   }
   return count;
}
