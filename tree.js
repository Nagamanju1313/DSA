class Node{
    constructor(value){
        this.value=value;
        this.items=[];
    }

    addChild(value){
        this.items.push(value);
    }

    removeChild(value){
        let index = this.items.findIndex((item)=>{
            return item === value;
        })

        if(index !== -1){
           return this.items.splice(index, 1);
        }
    }
}

class Tree{
    constructor(node){
        this.root=node;
    }
}



const newNode = new Node('root');
newNode.addChild(1);
newNode.addChild(2);
newNode.addChild(3);

newNode.removeChild(3);

const newTree = new Tree(newNode);
console.log(newTree)