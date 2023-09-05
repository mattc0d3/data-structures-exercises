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
        if (this.isEmpty()) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue() {
        if (this.isEmpty()) return null
        if (this.first === this.last) this.last = null
        this.first = this.first.next
        this.length--
        return this
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
console.log(myQueue)
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)