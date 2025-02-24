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
