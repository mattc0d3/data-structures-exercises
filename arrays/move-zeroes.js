// function moveZeroes(nums) {
//     const indexesToRemove = []
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i], "<<<< nums[i]")
//         if (nums[i] === 0) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 console.log(nums, nums[i], nums[j])
//                 nums[j - 1] = nums[j]
//             }
//             nums[nums.length - 1] = 0
//             i--
//         }
//     }
    
//     return nums
// }

// // console.log(moveZeroes([0,1,0,3,12])) // Expected output [1,3,12,0,0]
// // console.log(moveZeroes([0])) // Expected output [0]
// console.log(moveZeroes([0,0,1])) // Expected output [1,0,0]

function moveZeroes(nums) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = 1; j < nums.length; j++)
        if (nums[i - 1] === 0) {
            nums[i - 1] = nums[i]
            nums[i] = 0
        }
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12])) // Expected output [1,3,12,0,0]
console.log(moveZeroes([0])) // Expected output [0]
console.log(moveZeroes([0,0,1])) // Expected output [1,0,0]