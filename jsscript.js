document.addEventListener("DOMContentLoaded", () => {
  // Saudação dinâmica
  const saudacaoElement = document.getElementById("saudacao");
  if (saudacaoElement) {
    const hora = new Date().getHours();
    const saudacao = hora < 12 ? "Bom dia!" : hora < 18 ? "Boa tarde!" : "Boa noite!";
    saudacaoElement.textContent = saudacao;
  }

  // Validação do formulário
  const form = document.getElementById("formCadastro");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita o envio padrão do formulário
      alert("Cadastro realizado com sucesso!");
      form.reset(); // Limpa o formulário após o envio
    });
  }
});
