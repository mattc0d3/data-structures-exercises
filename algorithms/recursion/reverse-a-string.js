function reverseStringIteratively(string) {
    let reverseString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
    }
    return reverseString
}

function reverseStringRecursively(string) {
    if (!string.length) return ""
    return string[string.length - 1] + reverseStringRecursively(string.slice(0, string.length - 1))
}

console.log(reverseStringIteratively("Hello World!")) // !dlroW olleH
console.log(reverseStringRecursively("Hello World!")) // !dlroW olleH