const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const placeholder = array[j]
                array[j] = array[j + 1]
                array[j + 1] = placeholder
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);