//Recursion

function recursion(n){
    if(n===1){
        return n
    }    
    return n + recursion(n-1)
}
console.log(recursion(10))


function anagram(str){
    if(str.length===1){
        return str;
    }

    return str[str.length-1]+anagram(str.slice(0,str.length-1))
}
console.log(anagram("racecar"))