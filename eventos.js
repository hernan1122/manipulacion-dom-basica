const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

// codigo para que funcione un boton
// btn.addEventListener("click", btnOnClick);

// function btnOnClick() {
//  const sumaInput = input1.value + input2.value;
//  pResult.innerHTML = "Resultado: " + sumaInput;
// }

// codigo para un formulario
form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  // console.log({ event });
  event.preventDefault();
  const sumaInput = input1.value + input2.value;
  pResult.innerHTML = "Resultado: " + sumaInput;
}
// otra forma es colocarle al <button> del html la propiedad type="button" para que no se ejecute como submit
