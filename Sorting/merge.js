function merge(arr1, arr2) {
    let results = [];
    let a = 0
    let b = 0;

    while (a, arr1.length && b < arr2.length) {
        if (arr2[b] > arr1[a]) {
            results.push(arr1[a]);
            a++;
        } else {
            results.push(arr2[b]);
            b++;
        }
    }

    while (a < arr1.length)
}

function mergeSort(arr) { }

module.exports = { merge, mergeSort };