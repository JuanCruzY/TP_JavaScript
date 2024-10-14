//1. Introducción a JavaScript

//Ejercicio 1.

//Ya cree un proyecto de Vite para JavaScript Vanilla.

//Ejercicio 2.

let a, b, c;

a = 5;
b = 10;
c = a + b;

console.log("La suma de a y b es: "+ c);

//Ejercicio 3

let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, "+ nombre +"!")


//2. Operadores Lógicos y Condicionales

//Ejercicio 1.

if (a > b && a > c) {
  console.log("El mayor de los tres números es: "+ a);
}else if(b > c){
  console.log("El mayor de los tres números es: "+ b);
}else{
  console.log("El mayor de los tres números es: "+ c);
}

//Ejercicio 2.

let parImpar = prompt("Ingrese un número y te diré si es par o impar:");

switch (true) {
  case (isNaN(parImpar) || parImpar === "" || parImpar === null):
    console.log("Usted no ingresó un número");
    break;
  case (parImpar % 2 === 0):
    console.log("El número " + parImpar + " es par");
    break;
  default:
    console.log("El número " + parImpar + " es impar");
}


//3. Operadores de Asignación y Bucles

//Ejercicio 1.

let numero1 = 10;

while (numero1 > 0){
  console.log(numero1);
  numero1 --;
}

//Ejercicio 2.

let mayora100;

do{
mayora100 = prompt("Ingrese un número mayor a 100:");
if (Number(Number(mayora100)) > 100){
  console.log("Ingresaste un número mayor a 100: "+ mayora100);
}
}while (mayora100 === null || mayora100 === "" || Number(mayora100) <= 100 || isNaN(Number(mayora100)));


//4. Funciones en JavaScript

//Ejercicio 1.

let numero2 = 10;

esPar(numero2);

function esPar(a){
  if((a % 2) === 0){
    console.log("El número "+ a + " es par");
  }else{
    console.log("El número "+ a + " es impar");
  }
}

//Ejercicio 2.

let grados = 45;

convertirCelsiusAFahrenheit(grados);

function convertirCelsiusAFahrenheit(celsius){
  let fahrenheit = celsius * 1.8 + 32;
  console.log(celsius + "°C son equivalentes a "+ fahrenheit + "°F");
}


//5. Objetos en JavaScript

//Ejercicio 1.

let persona = {
  nombre: "Juan Cruz",
  edad: 20,
  ciudad: "Mendoza",
  modificarCiudad: function(){
    persona.ciudad = "Madrid";
  },
  };

console.log(persona);

persona.modificarCiudad();

console.log(persona);

//Ejercicio 2.

let libro = {
  titulo:"Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  año: 1605,
  antiguedad: function(){
  let fechaActual = new Date();
  let añoActual = fechaActual.getFullYear();
  console.log("El libro '"+ this.titulo + "' es antiguo: "+((añoActual - 10) > this.año));
  }
};

libro.antiguedad();


//6. Arrays

//Ejercicio 1.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosx2 = numeros.map((elemento) => {
  return elemento * 2;
})

console.log("Números originales: "+numeros);
console.log("Números multiplicados por 2: "+numerosx2);

//Ejercicio 2.

let pares = [];

for (let i = 0; i < 20; i++){
  pares[i] = i + 1;
}

console.log("Los primeros 10 números pares: "+ pares.filter((elemento) => (elemento % 2) === 0));


//7. Introducción al DOM

//Ejercicio 1.

const button = document.getElementById("button");
const div = document.getElementById("div1");
const oldButtonText = button.innerHTML;

const cambiarColor = () => {
  let newButtonText = "Cambiar color a negro"
  if (div.classList.contains("parrafoAzul")){
    div.classList.remove("parrafoAzul");
    button.textContent = oldButtonText;
  }else {
    button.textContent = newButtonText;
    div.classList.add("parrafoAzul");
  }
}

button.addEventListener("click", () => {
  cambiarColor();
})

//Ejercicio 2

const button2 = document.getElementById("button2");

const mostrarAlerta = () => {
  alert("Has ingresado un mensaje");
}

button2.addEventListener("click", () => {
  mostrarAlerta();
})


//8. Eventos en DOM

//Ejercicio 1.

const items = document.querySelectorAll(".item");

const mostrarTexto = (item) => {
  let texto = item.innerHTML;
  console.log(texto);
}

items.forEach(item => {
  item.addEventListener("click", () => {
      mostrarTexto(item);
  });
});

//Ejercicio 2

const inputTexto = document.getElementById("input2");
const deshabilitarBtn = document.getElementById("deshabilitarBtn");
const habilitarBtn = document.getElementById("habilitarBtn");

deshabilitarBtn.addEventListener("click", () => {
  inputTexto.disabled = true;
  inputTexto.classList.add("input2-deshabilitado");
  deshabilitarBtn.disabled = true;

});

habilitarBtn.addEventListener("click", () => {
  inputTexto.disabled = false; 
  deshabilitarBtn.disabled = false;
  inputTexto.classList.remove("input2-deshabilitado");
});


//9. LocalStorage

//Ejercicio 1.
const guardarBtn = document.getElementById("guardar");
const guardadoDiv = document.getElementById("guardadoDiv");

const getDataInput = () =>{
  const email = document.getElementById("input3").value;
  localStorage.setItem("email", email);
  mostrarEmailGuardado();
};

const mostrarEmailGuardado = () => {
  const emailGuardado = localStorage.getItem("email")
  if (emailGuardado) {
    guardadoDiv.innerHTML = `Correo guardado: <strong>${emailGuardado}</strong>
    <button class="boton" id="eliminarBtn" type="button">Eliminar Correo Guardado</button>`;
  }else {
    guardadoDiv.innerHTML = "";
  }
};

guardarBtn.addEventListener("click", () => {
  getDataInput();
});

const eliminarEmail = () => {
  localStorage.removeItem("email");
  mostrarEmailGuardado();
};

guardadoDiv.addEventListener("click", (event) => {
  if (event.target.id === "eliminarBtn") {
    eliminarEmail();
  }
})

