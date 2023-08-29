class Node {
    constructor(value) {
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) this.root = newNode
        else {
            let currentNode = this.root
            while (true) {
                if (newNode.value === currentNode.value) return "Value already exists"
                else if (newNode.value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
                else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(value) {
        let currentNode = this.root
        while (currentNode !== null) {
            if (currentNode.value === value) return true
            if (value < currentNode.value) currentNode = currentNode.left
            else currentNode = currentNode.right
        }
        return false
    }
}

const myTree = new BinarySearchTree()
myTree.insert(9)
myTree.insert(4)
myTree.insert(6)
myTree.insert(20)
myTree.insert(170)
myTree.insert(15)
myTree.insert(1)
console.log(JSON.stringify(traverse(myTree.root)))
console.log(myTree.lookup(15))
console.log(myTree.lookup(16))

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}