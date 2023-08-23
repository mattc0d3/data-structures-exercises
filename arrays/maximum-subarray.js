// O(n2) solution
function maxSubArray(nums) {
    let largestSum = nums[0] || 0

    for (let i = 0; i < nums.length; i++) {
        let comparisonSum = nums[i]
        // console.log(comparisonSum, "<<<<< comparison in i")
        if (comparisonSum > largestSum) largestSum = comparisonSum
        for (let j = i + 1; j < nums.length; j++) {
            comparisonSum += nums[j]
            // console.log(comparisonSum, "<<<<< comparison in j")
            if (comparisonSum > largestSum) largestSum = comparisonSum
        }
        // if (comparisonSum > largestSum) largestSum = comparisonSum
    }

    return largestSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // The subarray [4,-1,2,1] has the largest sum 6
console.log(maxSubArray([1])) // [1] has the largest sum 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // [5,4,-1,7,8] has the largest sum 23
console.log(maxSubArray([-1, 0, -2])) // [0] has the largest sum 0


// O(n) solution
function maxSubArray2(nums) {
    let largestSum = nums[0] || 0
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]

        if (currentSum > largestSum) largestSum = currentSum

        if (currentSum < 0) currentSum = 0

    }

    return largestSum
}

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // The subarray [4,-1,2,1] has the largest sum 6
console.log(maxSubArray2([1])) // [1] has the largest sum 1
console.log(maxSubArray2([5, 4, -1, 7, 8])) // [5,4,-1,7,8] has the largest sum 23
console.log(maxSubArray2([-1, 0, -2])) // [0] has the largest sum 0