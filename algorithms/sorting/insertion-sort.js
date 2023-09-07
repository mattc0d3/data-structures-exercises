const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    let placeholder
    let placeholder2
    for (let i = 1; i < array.length; i++) {
        let comparison = array[i]
        let inserted = false
        for (let j = 0; j < i + 1; j++) {
            if (inserted) {
                placeholder2 = array[j]
                array[j] = placeholder
                placeholder = placeholder2
            }
            else if (comparison < array[j]) {
                placeholder = array[j]
                array[j] = comparison
                inserted = true
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);