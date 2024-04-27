/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) {
    if(!cb){
        let min = array[0];
        for(let i = 1; i < array.length; i++){
            if(array[i]< min){
                min = array[i];
            }
        }
    return min;
    }else{
        let min = array[0];
        for(let i = 1; i <array.length; i++){
            if(cb(array[i]) < min){
                min = cb(array[i]);
            }
        }
    return min;
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
