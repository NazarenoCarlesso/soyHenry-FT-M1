'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 0) return 1;
   return n * nFactorial(n - 1);
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 0) return 0;
   if (n === 1) return 1;
   return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// EJERCICIO 3
function Queue() {
   let array = [];

   function enqueue(){
      array.push(arguments);
   }

   function dequeue(){
      return array.length === 0 ? undefined : array.shift()[0];
   }

   function size(){
      return array.length;
   }

   this.enqueue = enqueue;
   this.dequeue = dequeue;
   this.size = size;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
