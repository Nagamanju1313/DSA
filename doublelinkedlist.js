class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
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
            // newNode.next=this.tail;
            // this.tail.prev=newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
    }
    prepend(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            // newNode.next=this.tail;
            // this.tail.prev=newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++
    }
    toString() {
        let currentNode = this.head;
        let res = '';
        while (currentNode) {
            res += currentNode.value
            if (currentNode.next === null) {
                break;
            }
            res += ' <-> '
            currentNode = currentNode.next;
        }
        return res
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value)
            if (currentNode.next === null) {
                break;
            }
            currentNode = currentNode.next;
        }
        return true
    }
    get(index) {
        if (this.isEmpty() || index < 0 || index > this.length) return null
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    search(target) {
        let index = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === target) {
                return index
            }
            if (currentNode.next === null) {
                break;
            }
            currentNode = currentNode.next;
            index++;

        }
        return -1
    }
    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value
            return true
        } else {
            return false
        }
    }
    insert(index, value) {
        if (this.isEmpty() || index < 0 || index > this.length) return null;

        if (index === 0) {
            return this.prepend(value);
        } else if (index === this.length) {
            return this.append(value)
        } else {
            let prevNode = this.get(index - 1);
            let newNode = new Node(value);
            newNode.next = prevNode.next;
            prevNode.next.prev = newNode;
            newNode.prev = prevNode;
            prevNode.next = newNode;
            this.length++;
            return newNode
        }

        // if(index <= Math.floor(this.length/2)){
        //     let prevNode=this.head;
        //     let newNode = new Node(value)
        //     for(let i = 0; i<=Math.floor(this.length/2); i++){
        //         prevNode=prevNode.next
        //     }
        //     prevNode=prevNode.prev;
        //     prevNode.next.prev = newNode;
        //     newNode.next=prevNode.next;
        //     prevNode.next=newNode;
        //     newNode.prev=prevNode;
        //     this.length++;
        //     return newNode;
        // }else if(index >= Math.floor(this.length/2)){
        //     let prevNode=this.head;
        //     let newNode = new Node(value)
        //     for(let i = Math.floor(this.length/2); i>=this.length; i++){
        //         prevNode=prevNode.next
        //     }
        //     prevNode=prevNode.prev;
        //     prevNode.next.prev = newNode;
        //     newNode.next=prevNode.next;
        //     prevNode.next=newNode;
        //     newNode.prev=prevNode;
        //     this.length++;
        //     return newNode;
        // }
    }
    popFirst() {
        if (this.isEmpty()) return null;
        const poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--
            return poppedNode;
        }
        this.head = poppedNode.next;
        this.head.prev = null;
        poppedNode.next = null;
        this.length--;
        return poppedNode;
    }
    pop() {
        if (this.isEmpty()) return null;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--
            return poppedNode;
        }
        this.tail = poppedNode.prev;
        poppedNode.prev = null;
        this.tail.next = null;
        this.length--;
        return poppedNode;
    }
    remove(index) {
        if (this.isEmpty() || index < 0 || index >= this.length) return null;

        if (index === 0) {
            return this.popFirst()
        } else if (index === this.length - 1) {
            return this.pop()
        } else {
            const prevNode = this.get(index - 1);
            let poppedNode = prevNode.next;
            prevNode.next = poppedNode.next;
            poppedNode.next.prev = prevNode;
            this.length--
            return poppedNode
        }
    }
    removeAll() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

const doublelinkedlist = new DoubleLinkedList()
doublelinkedlist.prepend(5)
doublelinkedlist.append(10)
doublelinkedlist.append(20)
// console.log(doublelinkedlist.insert(2, 6))
// console.log(doublelinkedlist.get(3))
// console.log(doublelinkedlist.pop())
// console.log(doublelinkedlist.pop())
// console.log(doublelinkedlist.pop())
// console.log(doublelinkedlist.remove(2))
// console.log(doublelinkedlist.remove(1))
// console.log(doublelinkedlist.remove(0))
console.log(doublelinkedlist.toString())