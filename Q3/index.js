let frase = prompt("Insira uma frase: ");
let cont = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === 'a' || frase[i] === 'A') {
    cont++;
  }
}
console.log(`A letra 'a' aparece ${cont} vezes na frase.`);