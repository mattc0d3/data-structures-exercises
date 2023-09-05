class Stack {
    constructor() {
        this.data = []
    }
    push(value) {
        this.data.push(value)
        return this
    }
    peek() {
        return this.data[this.data.length - 1]
    }
    pop() {
        this.data.pop()
        return this
    }
    isEmpty() {
        return this.data.length === 0
    }
}

const myStack = new Stack()

myStack.push(1)
console.log(myStack)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek())
console.log(myStack)
myStack.pop()
console.log(myStack.peek())
console.log(myStack)