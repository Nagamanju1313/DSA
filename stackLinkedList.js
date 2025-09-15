class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.front=null;
        this.top=null;
        this.length=0;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length ===0){
            this.top=newNode;
            this.front=newNode;
        }else{
            this.top.next=newNode;
            this.top=newNode;
        }
        this.length++;
    }

    pop(){
        let currentNode = this.front;

        if(this.length===0){
            return null
        } else if(index===1){
            let poppedNode = currentNode;
            this.top=null;
            this.length=0;
            return poppedNode
        }

        while(currentNode !== this.top){
            currentNode=currentNode.next
        }

        let poppedNode = currentNode.next;
        this.top=currentNode;
        currentNode.next=null;
        this.length++;
        return poppedNode;

    }
}