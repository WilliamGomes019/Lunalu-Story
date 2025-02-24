const botaoModoEscuro = document.getElementById("modo-escuro");

botaoModoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salvar a preferência do usuário
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("modo-escuro", "ativado");
    } else {
        localStorage.setItem("modo-escuro", "desativado");
    }
});

// Verificar a preferência ao carregar a página
if (localStorage.getItem("modo-escuro") === "ativado") {
    document.body.classList.add("dark-mode");
}
