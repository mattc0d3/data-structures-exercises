function findFactorialRecursive(number) {
    if (number === 1) return 1
    return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
    for (let i = number - 1; i > 0; i--) {
        number *= i
    }
    return number
}

console.log(findFactorialRecursive(5)) // 120
console.log(findFactorialIterative(5)) // 120