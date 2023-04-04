/*
Push Front

Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

Examples:

pushFront([5,7,2,3], 8) => [8,5,7,2,3]
pushFront([99], 7) => [7,99] 
*/

function pushFront(array, value) {
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = value;
    return array;
}

console.log(pushFront([5, 7, 2, 3], 8));