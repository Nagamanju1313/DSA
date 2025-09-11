class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoubleLinkedList {
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
            this.head.prev = newNode;
            this.tail.next = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.head.prev = newNode;
            this.tail.next = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.head = newNode;
        }
        this.length++;
    }
    toString() {
        let currentNode = this.head;
        let res = ''
        while (currentNode) {
            res += currentNode.value;
            currentNode = currentNode.next;
            if (currentNode === this.head) {
                break
            }
            res += ' <-> '
        }
        return res;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.next;
            if (currentNode === this.head) {
                break
            }
        }
        return true;
    }
    popFirst() {
        if (this.isEmpty()) return null;
        let poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            poppedNode.prev = null;
            this.head = poppedNode.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }
    pop() {
        if (this.isEmpty()) return null;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            let prevNode = this.tail.prev;
            this.head.prev = prevNode;
            prevNode.next = this.head;
            this.tail = prevNode;
        }
        this.length--;
        return poppedNode;
    }
    search(target) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === target) {
                return index;
            }
            if (currentNode.next === this.head) {
                break;
            }
            currentNode = currentNode.next
            index++;
        }
        return -1;
    }
    get(index) {
        if (this.isEmpty() || index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index && i < this.length; i++) {
            currentNode = currentNode.next;
        }
        return currentNode
    }
    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (this.isEmpty() || index < 0 || index > this.length) return null;
        if (index === 0) {
            return this.prepend(value)
        } else if (index === this.length) {
            return this.append(value)
        } else {
            let prevNode = this.get(index - 1);
            const newNode = new Node(value);
            prevNode.next.prev = newNode;
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            this.length++;
        }
        return true
    }
    remove(index) {
        if (this.isEmpty() || index < 0 || index >= this.length) return null;
        let poppedNode;
        if (this.length === 1) {
            poppedNode = this.head;
            this.head = null;
            this.tail = null
        } else
            if (index === 0) {
                poppedNode = this.head;
                this.head = poppedNode.next;
                poppedNode.prev = null;
                this.tail.next = this.head;
                this.head.prev = this.tail;
                poppedNode.prev = null;
                poppedNode.next = null;
            } else if (index === this.length - 1) {
                poppedNode = this.tail;
                this.tail = poppedNode.prev;
                this.tail.next = this.head;
                this.head.prev = this.tail;
                poppedNode.prev = null;
                poppedNode.next = null;
            } else {
                let prevNode = this.get(index - 1);
                poppedNode = prevNode.next;
                prevNode.next.prev = prevNode;
                prevNode.next = poppedNode.next;
                poppedNode.next = null;
                poppedNode.prev = null;
            }
        this.length--;
        return poppedNode;
    }
    removeAll() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

const circulardoublelinkedlist = new CircularDoubleLinkedList();
circulardoublelinkedlist.append(10)
circulardoublelinkedlist.append(20)
circulardoublelinkedlist.prepend(5)
// circulardoublelinkedlist.popFirst()
// circulardoublelinkedlist.popFirst()
// circulardoublelinkedlist.popFirst()
// circulardoublelinkedlist.pop()
// console.log(circulardoublelinkedlist.traverse())
// console.log(circulardoublelinkedlist.search(20)) 
// console.log(circulardoublelinkedlist.remove(2))
// console.log(circulardoublelinkedlist.remove(1))
// console.log(circulardoublelinkedlist.remove(0))
// console.log(circulardoublelinkedlist.set(0,50))
// console.log(circulardoublelinkedlist.insert(3,50))
console.log(circulardoublelinkedlist.toString())
// console.log(circulardoublelinkedlist.get(0)) 