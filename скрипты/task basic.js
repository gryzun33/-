// let a = 5;
// console.log(a++); 


console.log([ ] + false - null + true );
// пустой массив преобразуется к пустой строке
console.log([ ] + false); // "false"
console.log([ ] + false - null); // NaN
console.log([ ] + false - null + true ); // NaN


// let y = 1; 
// let x = y = 2; 
// console.log(x); // 2


console.log([] + 1 + 2); // "12"


console.log( "1"[0] ); // '1'


console.log(2 && 1 && null && 0 && undefined ); // null
// оператор && выводит первое попавшееся значение "false"


// console.log(!!( 1 && 2 ) === (1 && 2)); // false


console.log ( null || 2 && 3 || 4 ); // 3


const a = [1, 2, 3];
const b = [1, 2, 3]; 
console.log( a === b ); // false


console.log( +"Infinity" ); // Infinity


console.log("Ёжик" > "яблоко"); // true


console.log( 0 || "" || 2 || undefined || true || false ); // 2





