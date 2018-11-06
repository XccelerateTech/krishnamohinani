//Conditionals and loops bonus 2
function countChar(word, letter){
   var count=0;
   for (i=0;i<word.length;i++){
        if (word[i]===letter){
            count++;
        }
   }
   return count;
}
