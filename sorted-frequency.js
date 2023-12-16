function sortedFrequency(arr, n) {

    function findFirstPosition(arr, n) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
        let firstPosition = -1;

        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (n === middleVal) {
                firstPosition = middleIdx;
                rightIdx = middleIdx - 1;
            } else if (n < middleVal) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        }

        return firstPosition;
    }

    function findLastPosition(arr, n) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
        let lastPosition = -1;

        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];

            if (n === middleVal) {
                lastPosition = middleIdx;
                leftIdx = middleIdx + 1;
            } else if (n < middleVal) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        }

        return lastPosition;
    }

   
    let firstPosition = findFirstPosition(arr, n);
    let lastPosition = findLastPosition(arr, n);

    
    return lastPosition - firstPosition + 1;
}

module.exports = sortedFrequency;
