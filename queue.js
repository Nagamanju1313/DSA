class Queue {
    constructor() {
        this.items = []
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
    enqueue(value) {
        this.items.push(value)
    }
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.unshift()
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }
    toString() {
        let res = '';
        for (let i = 0; i < this.items.length; i++) {
            res += this.items[i];
            if (i === this.items.length - 1) {
                res += ' -> '
            }
        }
        return res;
    }
    clear() {
        return this.items = []
    }
}

const queue = new Queue()
