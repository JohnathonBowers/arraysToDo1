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


/*
Pop Front

Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

Examples:

popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function 
*/

function popFront(array) {
    const initialValue = array[0];
    for(let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    console.log(array);
    return initialValue;
}