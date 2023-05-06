const numero = parseInt(prompt("Informe um número: "));
function isPrimo(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}
for (let i = 2; i <= numero; i++) {
    if (isPrimo(i)) console.log(i);
}