function processArray(array,cb){
    let finalArray = [];

    for(var i=0;i<array.length;i++){
        finalArray.push(cb(array[i]));
    }
    return finalArray;
}

var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    console.log(a * 2);
});
// [ 8, 16, 4, 14, 10 ]

var myArray = [7, 8, 9, 1, 2];
processArray(myArray, function (b) {
    return b + 5;
});