const usuario = {
  nome: prompt("Informe o seu nome: "),
  idade: prompt("Informe a sua idade: "),
  celular: prompt("Informe o seu número de celular: "),
  cidade: prompt("Informe o município que você reside: "),
};
if (confirm("Deseja alterar alguma informação?")) {
  console.log("Informações atuais: ", usuario);
  const opcoes = ["nome", "idade", "celular", "cidade"];
  const escolha = prompt(`Qual informação você deseja alterar? (${opcoes.join(", ")})`);
  if (opcoes.includes(escolha)) {
    usuario[escolha] = prompt(`Digite o novo ${escolha}: `);
    console.log("Novas informações: ", usuario);
  } else {
    console.log("Opção inválida.");
  }
} else {
  console.log("Informações do usuário: ", usuario);
}