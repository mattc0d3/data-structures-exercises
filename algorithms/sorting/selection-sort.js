const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let smallestNum = array[i]
        let swapIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (smallestNum > array[j]) {
                smallestNum = array[j]
                swapIndex = j
            }
        }
        array[swapIndex] = array[i]
        array[i] = smallestNum
    }
}

selectionSort(numbers);
console.log(numbers)