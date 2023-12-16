function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        if (arr[leftIdx] <= arr[rightIdx]) {
            return leftIdx; 
        }

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let next = (midIdx + 1) % arr.length;
        let prev = (midIdx - 1 + arr.length) % arr.length;

        if (arr[midIdx] <= arr[next] && arr[midIdx] <= arr[prev]) {
            return midIdx; 
        } else if (arr[midIdx] <= arr[rightIdx]) {
            rightIdx = midIdx - 1; 
        } else if (arr[midIdx] >= arr[leftIdx]) {
            leftIdx = midIdx + 1; 
        }
    }

    return 0; 
}



module.exports = findFloor