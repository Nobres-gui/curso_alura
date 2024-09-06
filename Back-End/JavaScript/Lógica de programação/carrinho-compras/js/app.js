let totalGeral = 0;

limpar();
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]
    let quantidadeProdutos = document.getElementById('quantidade').value;
    let preco = quantidadeProdutos * valorUnitario

    console.log(produto)

    let textoCarrinho = document.getElementById('lista-produtos');
    textoCarrinho.innerHTML = textoCarrinho.innerHTML + `
     <section class="carrinho__produtos__produto"> 
     <span class="texto-azul"> ${quantidadeProdutos}x</span> ${nomeProduto} <span class="texto-azul"> R$${valorUnitario}</span>
     </section > 
     `

    totalGeral += preco;

    let textoPreco = document.getElementById('valor-total');
    textoPreco.innerHTML = `R$${totalGeral}`

    document.getElementById('quantidade').value = 0;

    limpar();
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'
}