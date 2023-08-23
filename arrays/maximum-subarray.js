// O(n2) solution
function maxSubArray (nums) {
    let largestSum = 0

    for (let i = 0; i < nums.length; i++) {
        let comparisonSum = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            comparisonSum += nums[j]
            if (comparisonSum > largestSum) largestSum = comparisonSum
        }
        if (comparisonSum > largestSum) largestSum = comparisonSum
    }

    return largestSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // The subarray [4,-1,2,1] has the largest sum 6
console.log(maxSubArray([1])) // [1] has the largest sum 1
console.log(maxSubArray([5,4,-1,7,8])) // [5,4,-1,7,8] has the largest sum 23