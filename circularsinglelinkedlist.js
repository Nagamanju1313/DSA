class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularSingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
        this.length++
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = newNode;
        }
        this.length++
    }
    toString() {
        let currentNode = this.head;
        let res = '';
        while (currentNode) {
            res += currentNode.value;
            if (currentNode.next === this.head) {
                break;
            }
            res += ' -> '
            currentNode = currentNode.next;
        }
        return res
    }
    search(target) {
        if (this.isEmpty()) return null;
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === target) {
                return index
            }
            if (currentNode.next === this.head) {
                break
            }
            currentNode = currentNode.next
            index++
        }
        return -1
    }
    traverse() {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
        return true
    }
    popFirst() {
        if (this.isEmpty()) return null;
        let poppedNode = this.head;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = poppedNode.next;
            poppedNode.next = null;
            this.tail.next = this.head
        }
        this.length--;
        // poppedNode.next=null;
        return poppedNode
    }
    pop() {
        if (this.isEmpty()) return null;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prevNode = this.head;
            while (prevNode.next !== this.tail) {
                prevNode = prevNode.next
            }
            poppedNode.next = null;
            this.tail = prevNode;
            prevNode.next = this.head;
        }
        this.length--;
        return poppedNode
    }
    get(index) {
        if (this.isEmpty()) return null;
        if (index < 0 || index > this.length - 1) {
            return null
        } else if (index === 0) {
            return this.head;
        } else if (index === this.length - 1) {
            return this.tail;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            return currentNode
        }
    }
    set(index, value) {
        if (this.isEmpty()) return null;
        let node = this.get(index)
        if (node) {
            node.value = value;
            return true
        } else {
            return false;
        }
    }
    insert(index, value) {
        let newNode = new Node(value);
        if (this.isEmpty() || index < 0 || index > this.length) {
            return null
        } else if (index === 0) {
            return this.prepend(value)
        } else if (index === this.length) {
            return this.append(value)
        } else {
            let prevNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next
            }
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }

        this.length++
    }
    remove(index) {
        let poppedNode;
        console.log(this.length)
        if (this.isEmpty() || index < 0 || index > this.length) {
            return null;
        } else if (index === this.length - 1) {
            poppedNode = this.tail;
            let prevNode = this.head;

            while (prevNode.next !== this.tail) {
                prevNode = prevNode.next
            }
            prevNode.next = this.head;
            this.tail = prevNode;

        } else if (index === 0) {
            poppedNode = this.head;
            this.head = poppedNode.next;
            this.tail.next = poppedNode.next;

        } else {
            let prevNode = this.get(index - 1);
            poppedNode = this.get(index);
            prevNode.next = poppedNode.next;
        }
        poppedNode.next = null;
        this.length--;
        return poppedNode;
    }
    removeAll() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let circulrList = new CircularSingleLinkedList();

circulrList.append(10)
circulrList.append(20)
circulrList.prepend(5)

// console.log(circulrList.popFirst())
// console.log(circulrList.popFirst())
// console.log(circulrList.popFirst())
// console.log(circulrList.pop())
// console.log(circulrList.get(5))
// console.log(circulrList.set(0, 0))
console.log(circulrList.insert(3, 50))
console.log(circulrList.remove(1))
// console.log(circulrList.traverse())