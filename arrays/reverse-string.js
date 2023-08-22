function reverse(str) {
    if (!str || typeof str !== "string") return "invalid input"

    const reversedStr = []
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i])
    }
    return reversedStr.join("")
}

console.log(reverse("hello, world!"))