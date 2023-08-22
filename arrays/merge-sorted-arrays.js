function mergeSortedArrays(arr1, arr2) {
    const mergedArray = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] <= arr2[j]) {
                mergedArray.push(arr1[i])
                break
            } else {
                mergedArray.push(arr2[j])
            }
        }
    }
    return mergedArray
}

function mergeSortedArrays2(arr1, arr2) {
    const mergedArray = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1
    let j = 1

    if (!arr1.length) return arr2
    else if (!arr2.length) return arr1

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            mergedArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }

    return mergedArray
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]))