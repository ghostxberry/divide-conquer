function findRotatedIndex(arr, val) {

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
    
        return -1; // No pivot found
    }    
    
 
    function binarySearch(arr, val) {

        let leftIdx = 0;
        let rightIdx = arr.length - 1;
      
        while (leftIdx <= rightIdx) {
          // find the middle value
          let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
          let middleVal = arr[middleIdx];
      
          if (middleVal < val) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx + 1;
          } else if (middleVal > val) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
          } else {
            // we found our value!
            return middleIdx;
          }
        }
        
        // left and right pointers crossed, val isn't in arr
        return -1;
      }

    let pivot = findPivot(arr);
    let arr1 = arr.slice(0, pivot);
    let arr2 = arr.slice(pivot);
    let result1 = binarySearch(arr1, val);
    let result2 = binarySearch(arr2, val);
   
    if (result1 !== -1) {
       return result1;
    } else if (result2 !== -1) {
        return result2 + pivot + 1;
    } else {
        console.log("Value not found.");
        return -1;
    }
}

module.exports = findRotatedIndex;
