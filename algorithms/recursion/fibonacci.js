function fibonacciIterative(n) {
    if (n < 2) return n

    const sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence[n]
}

function fibonacciRecursive(n) {
    if (n < 2) return n
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciIterative(5)) // 3
console.log(fibonacciRecursive(5)) // 3
console.log(fibonacciIterative(8)) // 21
console.log(fibonacciRecursive(8)) // 21
console.log(fibonacciIterative(10)) // 55
console.log(fibonacciRecursive(10)) // 55