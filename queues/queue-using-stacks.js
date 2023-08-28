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
        return this.data.pop()
    }
    isEmpty() {
        return this.data.length === 0
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }
    peek() {
        return this.stack1.peek()
    }
    enqueue(value) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.push(value)
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop())
        }
        return this.stack1
    }
    dequeue() {
        return this.stack1.pop()
    }
    isEmpty() {
        return this.stack1.isEmpty()
    }
}

const myQueue = new Queue()

console.log(myQueue.isEmpty())
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue.isEmpty())
myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.peek())
