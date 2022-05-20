let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let btnEnviar4 = <HTMLButtonElement>document.getElementById("btnEnviar4");
let btnEnviar5 = <HTMLButtonElement>document.getElementById("btnEnviar5");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");
let rotulo4 = <HTMLParagraphElement>document.getElementById("rotulo4");
let rotulo5 = <HTMLParagraphElement>document.getElementById("rotulo5");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let arregloEnteros: number[] = new Array();
let indice: number = 0;
let tamaño: number = 0;

//La siguiente Funcion carga el arreglo de numeros enteros.
function cargarArreglo(arreglo: number[], tamaño: number) {
  for (indice = 0; indice < tamaño; indice++) {
    arreglo[indice] = Number(
      prompt("Ingrese el numero del arreglo en la posicion  " + (indice + 1))
    );
  }
  alert("Ud.termino de cargar el arreglo");
}

//La siguiente Funcion nos devuelve el numero menor de un arreglo de enteros.
function numeroMenor(arreglo: number[]): number {
  let enteroMenor: number = arreglo[0];
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] <= enteroMenor) {
      enteroMenor = arreglo[indice];
    }
  }
  return enteroMenor;
}

//La siguiente Funcion nos devuelve el numero mayor de un arreglo de enteros
function numeroMayor(arreglo: number[]): number {
  let numeroMayor: number = arreglo[0];
  for (indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] >= numeroMayor) {
      numeroMayor = arreglo[indice];
    }
  }
  return numeroMayor;
}

//la siguiente Funcion nos devuelve el promedio de los numeros enteros
// de un arreglo.
function promedioArreglo(arreglo: number[]): number {
  let promedio: number = 0;
  let sumaNumeros: number = 0;
  for (indice = 0; indice < arreglo.length; indice++) {
    sumaNumeros = sumaNumeros + arreglo[indice];
  }
  promedio = sumaNumeros / arreglo.length;
  return promedio;
}
rotulo1.innerHTML = "Ingrese el tamaño del arreglo";
rotulo2.innerHTML = "Ingrese los numeros del arreglo";

btnEnviar1.addEventListener("click", () => {
  tamaño = Number(dato1.value);
});

btnEnviar2.addEventListener("click", () => {
  cargarArreglo(arregloEnteros, tamaño);
});

btnEnviar3.addEventListener("click", () => {
  numeroMayor(arregloEnteros);
  rotulo3.innerHTML =
    " El numero mayor del arreglo es:   " + numeroMayor(arregloEnteros);
});

btnEnviar4.addEventListener("click", () => {
  rotulo4.innerHTML =
    "El numero menor del arreglo es:   " + numeroMenor(arregloEnteros);
});

btnEnviar5.addEventListener("click", () => {
  rotulo5.innerHTML =
    "El promedio de los numeros del arreglo es:   " +
    promedioArreglo(arregloEnteros);
});