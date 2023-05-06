let palavra = prompt("Informe uma palavra: ");
let palavraInvert = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvert += palavra[i];
}
if (palavra === palavraInvert) {
  console.log(`A palavra: ${palavra} é um palíndromo!`);
} else {
  console.log(`A palavra: ${palavra} não é um palíndromo.`);
}