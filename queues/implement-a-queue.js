class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null,
        this.last = null,
        this.length = 0
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        const newNode = new Node(value)
        newNode.next = this.last
        this.last = newNode
        if (this.isEmpty()) this.first = newNode
        this.length++
        return this
    }
    dequeue() {
        const newFirst = this.findNextInLine()
        newFirst.next = null
        this.first = newFirst
        this.length--
        return this
    }
    findNextInLine() {
        let nextInLine = this.last
        console.log(nextInLine)
        for (let i = 0; i < this.length - 2; i++) {
            nextInLine = nextInLine.next
        }
        return nextInLine
    }
    isEmpty() {
        return this.length === 0
    }
}

const myQueue = new Queue()
myQueue.enqueue("Joy")
console.log(myQueue)
console.log(myQueue.peek())
myQueue.enqueue("Matt")
console.log(myQueue.peek())
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())