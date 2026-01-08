const earth = document.querySelector("#earth");
const saturn = document.querySelector("#saturn");
const mars = document.querySelector("#mars");
const para = document.querySelector(".para");


earth.addEventListener("click", () => {
   para.innerHTML = "Earth is our home planet, known for its abundant water, diverse ecosystems, and life-supporting atmosphere. It's the only planet in the solar system known to harbor life."

})

saturn.addEventListener("click", () => {
   para.innerHTML = "Saturn is famous for its beautiful and extensive ring system made of ice and rock particles. It's a gas giant with dozens of moons orbiting it."

})

mars.addEventListener("click", () => {
   para.innerHTML = "Mars, the red planet, is a rocky world with the tallest volcano and deepest canyon in the solar system. It's a key focus for exploration in the search for past or present life."

})

