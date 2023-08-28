class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null,
        this.bottom = null,
        this.length = 0
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        if(this.isEmpty()) this.bottom = newNode
        this.length++
        return this
    }
    pop() {
        this.top = this.top.next
        this.length--
    }
    isEmpty() {
        return this.length === 0
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