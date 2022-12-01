'use strict';

function BinarioADecimal(num) {
   const binary = num.split('').reverse();
   let decimal = 0;

   for (let i = 0; i < binary.length; i++) {
      decimal += binary[i] * Math.pow(2, i);
   }

   return decimal;
}

function DecimalABinario(num) {
   let binary = '';
   
   while (num > 0) {
      const bit = num % 2 ? '1' : '0';
      binary = bit + binary;
      num = Math.trunc(num - num / 2);
   }

   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
