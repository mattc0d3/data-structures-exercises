function reverse(str) {
    if (!str || typeof str !== "string") return "invalid input"

    const reversedStr = []
    const totalIndexes = str.length - 1

    for (let i = totalIndexes; i >= 0; i--) {
        reversedStr.push(str[i])
    }
    return reversedStr.join("")
}

function reverse2(str) {
    return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('')

console.log(reverse("hello, world!"))