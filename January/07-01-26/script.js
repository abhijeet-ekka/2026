let arr = [];

//create a fun that push 10 random numbers

function ran(n){
   
   for(let i = 0; i < n; i++){
    let a = Math.floor(Math.random() * n);
    arr.push(a);
   }
   console.log(arr.join("-"));
}

ran(10);