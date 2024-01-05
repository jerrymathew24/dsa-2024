const twoSum = function (arr, target) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        let expected = target - arr[i]
        if (map.has(expected)) {
            return [map.get(expected), i]
        } else {
            map.set(arr[i], i)
        }
    }
}



//driver code
let arr = [2, 4, 5, 7, 1]
console.log(twoSum(arr, 8))