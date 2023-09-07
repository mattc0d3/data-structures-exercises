const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {

    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const left = array.splice(0, Math.ceil(array.length / 2))
    const right = array
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const mergedArray = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            mergedArray.push(left.shift())
        }
        else {
            mergedArray.push(right.shift())
        }
    }

    if (left.length) {
        mergedArray.push(...left)
    } else {
        mergedArray.push(...right)
    }

    return mergedArray
}


const answer = mergeSort(numbers);
console.log(answer);