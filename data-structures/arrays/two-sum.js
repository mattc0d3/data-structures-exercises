// O(n2) solution
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))

// O(n) solution
var twoSum2 = function(nums, target) {
    const seen = {}
    for (let i = 0; i < nums.length; i++) {
        const pair = target - nums[i]
        if (seen[pair] !== undefined) return [seen[pair], i]
        seen[nums[i]] = i
    }
};

console.log(twoSum2([2,7,11,15], 9))
console.log(twoSum2([3,2,4], 6))
console.log(twoSum2([3,3], 6))