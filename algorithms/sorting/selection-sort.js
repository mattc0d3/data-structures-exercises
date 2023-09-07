const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let smallestNum = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[smallestNum] > array[j]) {
                smallestNum = j
            }
        }
        placeholder = array[i]
        array[i] = array[smallestNum]
        array[smallestNum] = placeholder
    }
}

selectionSort(numbers);
console.log(numbers)