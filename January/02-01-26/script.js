let arr = [];

function pus(ar){
    for(let i = 0; i < ar.length; i++){
        arr.push(ar[i]);
    }
    
    return arr;
}

console.log(pus([1, 3, 4, 5]));
