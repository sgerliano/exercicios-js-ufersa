const lista = prompt("Informe uma lista de números, em que todos sejam separados por vírgulas: ");
const numeros = lista.split(",").map(Number);
function segundoMaiorNumero(numeros) {
  numeros.sort(function(a, b) {
    return b - a;
  });
  return numeros[1];
}
console.log("O segundo maior número da lista é: " + segundoMaiorNumero(numeros));