//Tree DSA
class Node{
    constructor(value){
        this.value=value;
        this.childrens=[];
    }
    addChildren(value){
        this.childrens.push(value)
    }
    removeChildren(value){
        let index = this.childrens.findIndex(function(child){
            return child === value
        })

        if(index !== -1){
            this.childrens.splice(index,1)
        }
    }
}

const newNode = new Node('root')
newNode.addChildren(1)
newNode.addChildren(2)
newNode.addChildren(3)
newNode.addChildren(4)
console.log(newNode)

// class tree{
//     constructor(){
//         this.root=null;
//     }
// }