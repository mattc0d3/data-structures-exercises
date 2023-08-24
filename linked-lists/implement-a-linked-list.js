class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    PrintList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    Insert(index, value) {
        if (index >= this.length) {
            return this.append(value)

        }
        if (index === 0) {
            return this.prepend(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        newNode.next = leader.next
        leader.next = newNode
        return this.PrintList()
    }
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
}

const myLinkedList = new LinkedList(5)
console.log(myLinkedList)
myLinkedList.append(6)
console.log(myLinkedList)
myLinkedList.append(7)
console.log(myLinkedList)
myLinkedList.prepend(4)
console.log(myLinkedList)
console.log(myLinkedList.PrintList())
myLinkedList.Insert(3, 11)
console.log(myLinkedList.PrintList())
