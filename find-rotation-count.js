function findRotationCount(arr) {
    function findPivot(arr) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
    
        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];
    
            if (leftIdx == rightIdx) {
                return leftIdx;
            }
    
            if (middleIdx < rightIdx && middleVal > arr[middleIdx + 1]) {
                return middleIdx;
            } else if (middleIdx > leftIdx && middleVal < arr[middleIdx - 1]) {
                return middleIdx - 1;
            }
    
            if (arr[leftIdx] <= middleVal) {
                leftIdx = middleIdx + 1;
            } else {
                rightIdx = middleIdx - 1;
            }
        }
    
        return 0; // No pivot found
    }    
    
    let count = findPivot(arr);
    return count;
}

module.exports = findRotationCount