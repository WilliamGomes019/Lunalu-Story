const modoEscuroButton = document.getElementById('modo-escuro');

// Verifica a preferência do usuário
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

modoEscuroButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Adiciona funcionalidade ao botão de envio do formulário
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-container form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio real do formulário
        
        alert("Mensagem enviada com sucesso!"); // Exibe o aviso
        
        // Limpa todos os campos do formulário
        form.reset();
    });
});
