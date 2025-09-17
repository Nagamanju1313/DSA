//each node have 2 childrens

class NodeTree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    levelOrderTraversal() {
        if (this.root === null) return null;

        let queue = [this.root];

        while (queue.length > 0) {
            let item = queue.shift();
            console.log(item.value);

            if (item.left !== null) {
                queue.push(item.left)
            }

            if (item.right !== null) {
                queue.push(item.right)
            }
        }
    }

    insert(value) {
        const newNode = new NodeTree(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        } else {
            let queue = [this.root];

            while (queue.length > 0) {
                let node = queue.shift();

                if (node.left === null) {
                    node.left = newNode;
                    return;
                } else {
                    queue.push(node.left)
                }

                if (node.right === null) {
                    node.right = newNode;
                    return;
                } else {
                    queue.push(node.right)
                }
            }
        }
    }


    preOrderTraversal() {
        if (this.root === null) return null;

        let stack = [this.root];

        while (stack.length > 0) {
            let node = stack.pop();
            console.log(node.value)
            if (node.right !== null) stack.push(node.right);

            if (node.left !== null) stack.push(node.left);
        }
    }
}

const tree = new BinaryTree();

tree.insert("N1")
tree.insert("N2")
tree.insert("N3")
tree.insert("N4")
console.log(tree.levelOrderTraversal());