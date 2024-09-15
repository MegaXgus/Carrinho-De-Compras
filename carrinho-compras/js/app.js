// Array para armazenar os itens do carrinho
let carrinho = [];
let precos = [];

// Função para adicionar o produto ao carrinho
function adicionar() {
    // Captura os valores do select e da quantidade
    let produto = document.getElementById("produto").value;
    let quantidade = parseInt(document.getElementById("quantidade").value);

    if (!quantidade || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    // Adiciona o produto e a quantidade ao carrinho
    carrinho.push({ produto, quantidade });

    // Extrai o preço do produto e multiplica pela quantidade
    let preco = parseInt(produto.split("R$")[1]) * quantidade;
    precos.push(preco);

    // Atualiza a interface com o novo produto no carrinho
    let listaProdutos = document.getElementById("lista-produtos");
    let novoProduto = document.createElement("section");
    novoProduto.classList.add("carrinho__produtos__produto");
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto}`;
    listaProdutos.appendChild(novoProduto);

    // Atualiza o total do carrinho
    atualizarTotal();

    // Exibe o conteúdo do carrinho no console
    console.log("Carrinho:", carrinho);
    console.log("Preços:", precos);
}

// Função para limpar o carrinho
function limpar() {
    // Limpa o carrinho e os preços
    carrinho = [];
    precos = [];

    // Limpa a interface (remove os produtos do carrinho)
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = '';

    // Atualiza o total
    atualizarTotal();

    console.log("Carrinho limpo.");
}

// Função para atualizar o valor total
function atualizarTotal() {
    let total = precos.reduce((acc, preco) => acc + preco, 0);
    document.getElementById("valor-total").innerText = `R$${total}`;
    console.log("Total atualizado: R$", total);
}
