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
            if (currentNode.value === value) return currentNode
            if (value < currentNode.value) currentNode = currentNode.left
            else currentNode = currentNode.right
        }
        return false
    }
    remove(value) {
        if (!this.root) return false
        let currentNode = this.root
        let parentNode = null
        while (currentNode.value !== value) {
            if (currentNode === null) return "Value not found"
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            }
            else {
                parentNode = currentNode
                currentNode = currentNode.right
            }
        }
        if (parentNode === null) this.root = currentNode.left
        else if (currentNode === parentNode.left) {
            if (currentNode.right !== null) {

                if (currentNode.right.left !== null) {
                    // below implementation copied from course notes
                    let leftmost = currentNode.right.left
                    let leftmostParent = currentNode.right
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost
                        leftmost = leftmost.left
                    }

                    leftmostParent.left = leftmost.right
                    leftmost.left = currentNode.left
                    leftmost.right = currentNode.right

                    if (parentNode === null) this.root = leftmost
                    else {
                        if (currentNode.value < parentNode.value) parentNode.left = leftmost
                        else if (currentNode.value > parentNode.value) parentNode.right = leftmost
                    }
                } else {
                    currentNode.right.left = currentNode.left
                    parentNode.left = currentNode.right
                }

            } else {
                parentNode.left = currentNode.left
            }
        }
        else {
            if (currentNode.right !== null) {
                currentNode.right.left = currentNode.left
                parentNode.right = currentNode.right
            } else {
                parentNode.right = currentNode.left
            }

        }
        return true
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
myTree.remove(4)
myTree.remove(6)
console.log(JSON.stringify(traverse(myTree.root)))

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}
