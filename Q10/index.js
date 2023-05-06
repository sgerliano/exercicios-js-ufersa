const numero = parseInt(prompt("Informe um número inteiro: "));
for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("XXXZZZZZ");
    } else if (i % 3 === 0) {
        console.log("ZZZ");
    } else if (i % 5 === 0) {
        console.log("XXXXX");
    } else {
        console.log(i);
    }
}