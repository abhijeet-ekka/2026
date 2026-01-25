const input = document.querySelector("#word");
const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Please input a value");
    }
})