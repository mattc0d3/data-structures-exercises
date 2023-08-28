class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    peek() {
        if (this.stack2.length > 0) return this.stack2[0]
        return this.stack1[this.stack1.length - 1]
    }
    enqueue(value) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.push(value)
        return this.stack2
    }
    dequeue() {
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop())
        }
        this.stack1.pop()
        return this.stack1
    }
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0
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
