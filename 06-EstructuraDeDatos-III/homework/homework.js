'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
   constructor(data) {
      this.value = data;
      this.left = null;
      this.right = null;
   }
   
   size() {
      // TIENE DOS HOJAS
      if(this.left && this.right) return this.left.size() + this.right.size() + 1;
      // TIENE HOJA IZQ
      if(this.left) return this.left.size() + 1;
      // TIENE HORA DER
      if(this.right) return this.right.size() + 1;
      // BASE
      return 1;
   }

   insert(data) {
      // NODO VACIO
      if(this.value === null) return this.value = data;
      // SI ES MENOR AL VALUE
      if(data < this.value) {
         // SI EXISTE HOJA IZQ
         if(this.left) return this.left.insert(data);
         // SINO, CREA EL NODO Y LO GUARDA A LA IZQ
         return this.left = new BinarySearchTree(data);
      } else { // SI ES MAYOR AL VALUE
         // SI EXISTE HOJA DER
         if(this.right) return this.right.insert(data);
         // SINO, CREA EL NODO Y LO GUARDA A LA DER
         return this.right = new BinarySearchTree(data);
      }
   }

   contains(data) {
      // SI ESTOY PARADO SOBRE EL VALOR
      if(this.value === data) return true;
      // SI TIENE DOS HOJAS
      if(this.left && this.right) return this.left.contains(data) || this.right.contains(data);
      // SI TIENE HOJA IZQ
      if(this.left) return this.left.contains(data);
      // SI TIENE HOJA DER
      if(this.right) return this.right.contains(data);
      // SINO DEVUELVE FALSO
      return false;
   }

   depthFirstForEach(cb, method = 'in-order') {
      if(method === 'in-order') {
         if(this.left) this.left.depthFirstForEach(cb);
         cb(this.value);
         if(this.right) this.right.depthFirstForEach(cb);
      }
      if(method === 'pre-order') {
         cb(this.value);
         if(this.left) this.left.depthFirstForEach(cb, method);
         if(this.right) this.right.depthFirstForEach(cb, method);
      }
      if(method === 'post-order') {
         if(this.left) this.left.depthFirstForEach(cb, method);
         if(this.right) this.right.depthFirstForEach(cb, method);
         cb(this.value);
      }
   }

   breadthFirstForEach(cb, arrayQueue = []) { // arrayQueue es una fila de elementos
      if (this.left) arrayQueue.push(this.left); // izq primero en la fila
      if (this.right) arrayQueue.push(this.right); // der segundo en la fila
      cb(this.value); // agrega el valor al resultado
      // console.log(`Queue: ${arrayQueue}`);
      if (arrayQueue.length > 0) arrayQueue.shift().breadthFirstForEach(cb, arrayQueue);
      // LA FUNCION SE EJECUTA CON EL IZQ Y EL DERECHO QUEDA PRIMERO EN LA FILA DE EJECUCION
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
