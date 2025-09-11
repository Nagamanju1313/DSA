class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        if (this.isEmpty()) return null;
        this.items.pop();
    }
    toString() {
        let res = '';
        for (let i = 0; i < this.items.length; i++) {
            res += this.items[i]
            if (i !== this.items.length - 1) {
                res += ' -> '
            }
        }
        return res
    }
    size() {
        return this.items.length;
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
}

const newstack = new Stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(50)

// console.log(newstack.toString())