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

const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort2(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0])
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(1, 0, array.splice(i, 1)[0])
                }
            }
        }
    }
}

insertionSort2(numbers2);
console.log(numbers2);
