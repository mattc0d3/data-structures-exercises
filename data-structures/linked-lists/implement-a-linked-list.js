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
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value) {
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
        this.length++
        return this.printList()
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
    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const nodeToRemove = leader.next
        leader.next = nodeToRemove.next
        this.length--
    }
    reverse() {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this
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
console.log(myLinkedList.printList())
myLinkedList.insert(3, 11)
console.log(myLinkedList.printList())
myLinkedList.remove(3)
console.log(myLinkedList.printList())
myLinkedList.remove(1)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())


// class DoubleNode {
//     constructor(value) {
//         this.value = value,
//         this.next = null,
//         this.previous = null
//     }
// }

// class DoublyLinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null,
//             previous: null
//         }
//         this.tail = this.head
//         this.length = 1
//     }
//     append(value) {
//         const newNode = new DoubleNode(value)
//         newNode.previous = this.tail
//         this.tail.next = newNode
//         this.tail = newNode
//         this.length++
//         return this
//     }
//     prepend(value) {
//         const newNode = new DoubleNode(value)
//         newNode.next = this.head
//         this.head.previous = newNode
//         this.head = newNode
//         this.length++
//         return this
//     }
//     printList() {
//         const array = []
//         let currentNode = this.head
//         while (currentNode !== null) {
//             array.push(currentNode.value)
//             currentNode = currentNode.next
//         }
//         return array
//     }
//     insert(index, value) {
//         if (index >= this.length) {
//             return this.append(value)

//         }
//         if (index === 0) {
//             return this.prepend(value)
//         }
//         const newNode = new DoubleNode(value)
//         const leader = this.traverseToIndex(index - 1)
//         const follower = leader.next
//         newNode.next = follower
//         newNode.previous = leader
//         follower.previous = newNode
//         leader.next = newNode
//         this.length++
//         return this.printList()
//     }
//     traverseToIndex(index) {
//         let counter = 0
//         let currentNode = this.head
//         while (counter !== index) {
//             currentNode = currentNode.next
//             counter++
//         }
//         return currentNode
//     }
//     remove(index) {
//         const leader = this.traverseToIndex(index - 1)
//         const nodeToRemove = leader.next
//         const follower = nodeToRemove.next
//         leader.next = follower
//         follower.previous = leader
//         this.length--
//     }
// }

// const myDoubleList = new DoublyLinkedList(5)
// console.log(myDoubleList)
// myDoubleList.append(6)
// console.log(myDoubleList)
// myDoubleList.append(7)
// console.log(myDoubleList)
// myDoubleList.prepend(4)
// console.log(myDoubleList)
// console.log(myDoubleList.printList())
// myDoubleList.insert(3, 11)
// console.log(myDoubleList.printList())
// myDoubleList.remove(3)
// console.log(myDoubleList.printList())
// myDoubleList.remove(1)
// console.log(myDoubleList.printList())