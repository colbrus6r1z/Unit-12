let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]

function bubbleSort(arr) {
   const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]], [arr[idx2]], [arr[idx1]]};
        
    for (let a = arr.length; a > 0; a--) {
        for (let b = 0; b < a - 1; b++) {
            if (arr[b] > arr[b + 1]) {
                swapp(arr, b, b + 1);
            }
        }
    }
    
    return arr;
    }