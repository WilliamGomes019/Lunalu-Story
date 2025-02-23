document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada!");

    // Modo escuro
    const botaoModoEscuro = document.getElementById("modo-escuro");
    botaoModoEscuro.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});