const passDisplay = document.getElementById("password-display");
const btn = document.getElementById("button");


function generator() {
    let arr = [];

    for(let i = 0; i < 10; i++){
        let random = Math.ceil(Math.random() * 10);
        arr.push(random)
    }

   passDisplay.textContent = arr.join("");
}

btn.addEventListener("click", generator);
