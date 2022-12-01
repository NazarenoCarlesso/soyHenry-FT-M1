'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // console.log(`length: ${array.length}, array: ${array}`);
  if (array.length <= 1) return array; // 1 devuelve array // 0 devuelve []
  let pivot = array[0]; // tomamos como valor medio
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) { // recorre todo el array
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right)); // concatena el array
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // console.log(`array: ${array}`);
  if (array.length === 1) return array; // un array de tamaño 1 no se puede dividir
  let mid = Math.round(array.length / 2); // posicion medio del arreglo
  let right = array.splice(mid); // cortamos el arreglo desde el medio
  let left = array; // guardamos el resto del array en la izq
  // console.log(`mid: ${mid}, left: ${left}, right: ${right}`);
  left = mergeSort(left); // PRIMERO INVOCAMOS LA FUNCION RECURSIVA
  right = mergeSort(right);
  // okey probemos ahora
  let newArray = []; // ORDENAMOS LOS ARREGLOS OBTENIDOS
  while (left[0] !== undefined || right[0] !== undefined) { // left || right
    // console.log(`${left[0]} < ${right[0]}`);
    if (left[0] === undefined) {(newArray.push(right.shift())); continue;} // right vacio
    if (right[0] === undefined) {(newArray.push(left.shift())); continue;} // left vacio
    left[0] < right[0] ? newArray.push(left.shift()) : newArray.push(right.shift()); // busca el menor
    // console.log(`newArray: ${newArray}`);
  }
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
