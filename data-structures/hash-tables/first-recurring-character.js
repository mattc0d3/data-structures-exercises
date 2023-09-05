// O(n) solution
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

// O(n2) solution
function firstRecurringChar2(arr) {
    const pairedIndexes = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                pairedIndexes.push(j)
            }
        }
    }
    if (pairedIndexes.length) {
        const lowestPairedIndex = Math.min(...pairedIndexes)
        return arr[lowestPairedIndex]
    } else {
        return undefined
    }
}

console.log(firstRecurringChar2([2,5,5,2,3,5,1,2,4])) // Should return 5
console.log(firstRecurringChar2([2,1,1,2,3,5,1,2,4])) // 1
console.log(firstRecurringChar2([2,3,4,5])) // undefined