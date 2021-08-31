const arr = [1,2,3,4,5,6,7,8,9,10]


function linearSerach(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i
        }
    }

    return -1
}

console.log(linearSerach(arr, 5))

// BIG O IS O(1) IN BEST CASE AND O(n) IN WORST CASE.