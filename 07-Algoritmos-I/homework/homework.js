'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1]; // arranca el array en 1
  while(num) { // corta con num = NaN
    let aux; // creo para sacar el divisor del for
    for (let i = 2; i <= num; i++) { // arranca en 2
      if(!(num % i)) { // num % i = 0 // ! = negado
        arr.push(i); // pusheo al array
        aux = i; // guardo el divisor
        break; // rompe el for
      }
    }
    num = num / aux; // devuelve NaN cuando no se inicializa aux
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let modified = true;
  while(modified) {
    modified = false;
    for (let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        const aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
        modified = true;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // console.log(array);
  for (let i = 1; i < array.length; i++) { // recorre el array
    // BUBBLE SORT INVERTIDO
    for (let j = i; j >= 1; j--) { // recorre el array en reversa
      // counter++;
      if (array[j] < array[j - 1]) { // si es menor al anterior hace un swap
        const aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      } else { break; }
    }
  }
  return array;
}

/*
// COMPARAR EFICIENCIA
var counter = 0; // contador de comparaciones
insertionSort([5, 1, 4, 2, 8, 6, 7, -3, -6, 0, 11, 45, 99, 80, -14, -7]);
console.log(counter);
*/

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let key;
    let minor = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < minor) {
        minor = array[j];
        key = j;
      }
    }
    // console.log(`minor: ${minor}`);
    // console.log(`${i} <--- ${array[key]}`);
    if(key) {
      const aux = array[i];
      array[i] = array[key];
      array[key] = aux;
    }
    // console.log(array);
  }
  // console.log(`array: ${array}`);
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
