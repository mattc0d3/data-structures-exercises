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

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))