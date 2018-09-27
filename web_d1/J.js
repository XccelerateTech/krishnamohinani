//Conditionals and loops exercise 2 

function exerciseJ (num3) {
    if ((num3<=0)|| isNaN(num3)){
        return 'ERROR';
    } else if (num3>=1000000){
        return num3;
    } else return (exerciseJ (num3*10))
}