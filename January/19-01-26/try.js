function processInput(input){
    if(typeof input !== "string"){
        throw new TypeError("Its not String")
    }
    
    return input.toUpperCase;
}

 try{
    console.log("Starting to Process input");
    const res = processInput("he");
    console.log("Processed result:", res);

 }catch (error){
    console.error("Error occurred:", error.message);
 }