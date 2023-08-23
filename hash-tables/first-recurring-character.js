function firstRecurringChar(arr) {
    const seenChars = {}

    for (let i = 0; i < arr.length; i++) {
        if (!seenChars[arr[i]]) {
            seenChars[arr[i]] = true
        } else {
            return arr[i]
        }
    }

    return undefined
}

console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4])) // Should return 2
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4])) // 1
console.log(firstRecurringChar([2,3,4,5])) // undefined