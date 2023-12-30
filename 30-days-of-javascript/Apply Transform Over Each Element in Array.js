/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
        const convertedArray = [];
        for(let i = 0; i <= arr.length - 1; i++) {
            convertedArray[i] = fn(arr[i], i);
        }

    return convertedArray;
};