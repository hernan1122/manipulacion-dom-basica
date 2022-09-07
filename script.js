// h1 { color: red }
// .parrafito { ... }
// #pid { ... }
// con .querySelector, .getElementsByClassName, .getElementById podemos seleccionar los elementos del html, sean etiquetas, clases, id, etc.

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

// para escribir html y texto desde JS
h1.innerHTML = "DOM <br> básico";
h1.innerText = "DOM <br> básico";

// para modificar atributos de los elementos de html
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");

// para modificar las clases
h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle("verde");
// h1.classList.contains("verde");

input.value = "456";

// para crear un nuevo elemento html desde JS
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://media.revistagq.com/photos/62c6a52a4d4bc9eb58931836/16:9/w_2560%2Cc_limit/de-donde-son-los-minions.jpeg"
);
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
