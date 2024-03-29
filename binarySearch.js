// NB: Binary search works only on sorted arrays. 


const arr = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(arr, num) {
    let start = 0
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2)

    while(arr[middle] !== num && start <= end) {
        if(arr[middle] < num) {
        start = middle + 1;
        } else{
            end = middle - 1;
           
        }
         middle = Math.floor((start + end) / 2)
    }

    return arr[middle] === num ? middle : `${num} is not in arr`
} 

// Big O is O(logn)


console.log(binarySearch(arr, 15))
