function validateNum(input){
    if(typeof input !== "number"){
        throw new TypeError("Expected a number, but received " + typeof input);
    }else {
        console.log("Its a number");
    }
}

validateNum("e")