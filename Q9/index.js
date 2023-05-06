const numeros = prompt("Informe uma lista de números, em que todos sejam separados por vírgulas: ");
const numerosArray = numeros.split(",").map(num => parseFloat(num));
numerosArray.sort((a, b) => a - b);
console.log("A lista dos números informados de forma ordenada é:", numerosArray);