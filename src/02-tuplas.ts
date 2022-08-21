const prices: (number | string)[] = [1,2,3,4,5,6];

let user: [string, number] // delimita la cantidad de elementos y el tipo según la posición
user = ['nico', 15]; //sí cumple
// user = [15, 'nico']; // no cumple
// user = ['1' , 2 ,3] // no cumple

const [username, age] = user // destructuración de una tupla
console.log(username)
console.log(age)
