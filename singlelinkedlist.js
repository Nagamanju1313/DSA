class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0
    }
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    toString() {
        let currentNode = this.head;
        let res = '';
        while (currentNode) {
            res += currentNode.value
            if (currentNode.next !== null) {
                res += ' -> '
            }
            currentNode = currentNode.next;
        }
        return res;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
        return true;
    }
    popFirst() {
        if (this.isEmpty()) return null;
        let poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = poppedNode.next;
        }
        poppedNode.next = null;
        this.length--;
        return poppedNode;

    }
    pop() {
        if (this.isEmpty()) return null;
        let poppedNode;
        if (this.length === 1) {
            poppedNode = this.head;
            this.head = null;
            this.tail = null;
        } else {
            poppedNode = this.tail;
            let prevNode = this.head;
            while (prevNode.next !== this.tail) {
                prevNode = prevNode.next
            }
            prevNode.next = null;
            this.tail = prevNode;
        }
        this.length--
        return poppedNode
    }
    search(target) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === target) {
                return index
            }
            currentNode = currentNode.next
            index++
        }
        return -1
    }
    get(index) {
        if (this.isEmpty()) return null;
        let currentNode = this.head;
        if (index < 0 || index > this.length) {
            return null
        } else if (index === 0) {
            currentNode = this.head;
        } else {
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
        }
        return currentNode;

    }
    setValue(index, value) {
        if (this.isEmpty()) return null;
        let node = this.get(index);
        if (node) {
            node.value = value
            return true
        }
        return false
    }
    insert(index, value) {
        if (this.isEmpty() || index >= this.length || index < 0) return null;

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length - 1) {
            this.append(value);
        } else {
            let prevNode = this.get(index - 1);
            let newNode = new Node(value);
            newNode.next = prevNode.next;
            prevNode.next = newNode
        }
        this.length++
        return true
    }
    remove(index) {
        if (this.isEmpty() || index > this.length || index < 0) return null;
        if (index === 0) {
            return this.popFirst();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let prevNode = this.get(index - 1)
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next
            }
            prevNode.next = currentNode.next;
            currentNode.next = null;
            this.length--
            return currentNode
        }
    }
    removeAll() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

}

const linkedList = new singleLinkedList()
linkedList.prepend(1)
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)

console.log(linkedList.insert(3, 40))

console.log(linkedList.remove(0))

console.log(linkedList)
console.log(linkedList.toString())


