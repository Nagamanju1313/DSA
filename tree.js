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
    constructor(){
        this.root=null;
    }
}



const newNode = new Node('root');
const newTree = new Tree();
const child1 = newNode('child1')
newTree.addChild(child1);

newNode.removeChild(child1);


console.log(newTree)