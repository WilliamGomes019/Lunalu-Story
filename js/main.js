document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada!");

    // Modo escuro
    const botaoModoEscuro = document.getElementById("modo-escuro");
    botaoModoEscuro.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Produtos
    const produtos = [
        { nome: "Camiseta Preta", preco: 59.90, img: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" },
        { nome: "Jaqueta Jeans", preco: 149.90, img: "https://mofficer.com.br/cdn/shop/files/119205004-964-1.jpg?v=1710962074" },
        { nome: "Tênis Branco", preco: 199.90, img: "https://idealvestrouparia.com.br/cdn/shop/files/TenisBrancoMasculinoDeCouroCanoBaixo-CalvinKlein_5_e145d88b-dde3-4fad-90d9-97801e1a1de9.jpg?v=1722525387" },
        { nome: "Bolsa Feminina", preco: 89.90, img: "https://www.ditorini.com.br/cdn/shop/files/S23e27e435fda4ed1beb590c24ba15cd4u.webp?v=1698023663" },
        { nome: "Óculos de Sol", preco: 69.90, img: "https://kessy.com.br/cdn/shop/files/oculos_de_sol_kessy_hexagonal_sortido.png?v=1719842120&width=3020" },
        { nome: "Relógio Casual", preco: 129.90, img: "https://www.lojaelegante.com/cdn/shop/products/H9fdc0f52be2a42849cc889c040ae4e77F_800x.jpg?v=1686864294" },
        { nome: "Calça Jeans", preco: 99.90, img: "https://rivierawear.com.br/cdn/shop/files/S7818ae00b9084262835f54fff6d61f1fU.jpg?v=1688494129" },
        { nome: "Blusa Moletom", preco: 119.90, img: "https://acdn.mitiendanube.com/stores/004/510/997/products/77b8c59f-f095-497f-9fae-33e4ff1b3c6e1-e1eddb495492cbb30f16445254444536-1024-1024-bb918f7266a1e305bb17126199062637-1024-1024.png" },
        { nome: "Vestido Floral", preco: 79.90, img: "https://a-static.mlcdn.com.br/1500x1500/vestido-florido-festa-exclusivo-gode-gola-v-tendencia-linda-floral-manga-3-4-blogueira-tiktok-casamento-bufante-meimi-amores/franshopmix8/vfloralvd005/ffc7956d964669bd6503286b1eea3c08.jpeg" },
        { nome: "Carteira Masculina", preco: 39.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmGALZRMaF8kFRE4cK1glvBK4okp7H9jAkw&s" },
        { nome: "Meia", preco: 29.90, img: "https://anjuss.fbitsstatic.net/img/p/meia-cano-alto-revolution-pto-38-ao-42-71563/262151-3.jpg?w=600&h=600&v=no-value" },
        { nome: "Boné", preco: 49.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wrOIZRKkz2J0SLYq2TXsaRmvk8zX-HEXkA&s" }
    ];

    const produtosContainer = document.getElementById("produtos-container");

    produtos.forEach((produto, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="comprar" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Comprar</button>
        `;

        produtosContainer.appendChild(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado corretamente!");
    
    let carrinho = [];  // Carrinho de compras
    const toggleCarrinho = document.getElementById("toggle-carrinho");
    const carrinhoDiv = document.getElementById("carrinho");
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
    const finalizarCompra = document.getElementById("finalizar-compra");
    
        // Verifica se o botão existe no DOM
    if (toggleCarrinho) {
        console.log("Botão do carrinho encontrado!");
        toggleCarrinho.addEventListener("click", function () {
            console.log("Botão do carrinho clicado!");
            carrinhoDiv.style.display = carrinhoDiv.style.display === "block" ? "none" : "block";
        });
    } else {
        console.error("❌ ERRO: Botão do carrinho NÃO encontrado no DOM!");
    }
    
        // Função para adicionar itens ao carrinho
    window.adicionarAoCarrinho = function (produto, preco) {
        carrinho.push({ produto, preco }); // Adiciona o item ao carrinho
        atualizarCarrinho(); // Atualiza a visualização do carrinho
    };
    
        // Função para atualizar a visualização do carrinho
    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";  // Limpa a lista de itens
        let total = 0;
    
        carrinho.forEach((item, index) => {
            total += item.preco;
            const li = document.createElement("li");
            li.innerHTML = `${item.produto} - R$ ${item.preco.toFixed(2)} 
                <button onclick="removerDoCarrinho(${index})">❌</button>`;
            listaCarrinho.appendChild(li);
        });
    
        totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
    
        // Função para remover item do carrinho
    window.removerDoCarrinho = function (index) {
        carrinho.splice(index, 1); // Remove o item do carrinho
        atualizarCarrinho(); // Atualiza a visualização do carrinho
    };
    
        // Função para finalizar a compra
    if (finalizarCompra) {
        finalizarCompra.addEventListener("click", function () {
            if (carrinho.length === 0) {
                alert("Seu carrinho está vazio!");
            } else {
                alert("Compra finalizada com sucesso!");
                carrinho = [];  // Limpa o carrinho após a compra
                atualizarCarrinho(); // Atualiza a visualização do carrinho
                carrinhoDiv.style.display = "none"; // Fecha o carrinho
            }
        });
    } else {
        console.error("❌ ERRO: Botão de finalizar compra NÃO encontrado no DOM!");
    }
});      

