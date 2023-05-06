let lista = prompt("Informe uma lista de números, em que todos sejam separados por vírgulas: ");
let num = lista.split(",");
let soma = 0;
for (let i = 0; i < num.length; i++) {
  soma += parseFloat(num[i]);
}
let media = soma / num.length;
console.log(`A média dos números informados é: ${media}`);