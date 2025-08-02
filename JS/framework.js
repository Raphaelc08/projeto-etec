(function () {


  //Variaveis que recebem eventos
  let abrircar = document.getElementById('abrircar');
  let produtosHeader = document.getElementById('produtos-nav1')

  // Criando variaveis funções onclick
  let carrinho = document.getElementById('carrinho')
  let overlaycarrinho = document.getElementById('overlay');
  let produtos = document.getElementById('produtos-nav');
  let overlayprodutos = document.getElementById('overlayprod');

  // Aberturas Carrinho, produtos e search

  function abrirCarrinho() {
    carrinho.classList.add('aberto');
    overlaycarrinho.classList.add('visivel');
  }

  function abrirProdutos() {
    produtos.classList.add('aberto');
    overlayprodutos.classList.add('visivel');
  }





  produtosHeader.addEventListener('click', function (e) {
    e.preventDefault();
    abrirProdutos();
  });
  abrircar.addEventListener('click', function (e2) {
    e2.preventDefault();
    abrirCarrinho();
  });

  const searchInput = document.querySelector('.search-input');
  document.querySelector('.search-toggle').addEventListener('click', function (f) {
    f.preventDefault();

    searchInput.classList.toggle('ativo');

    // Foca no input quando ativado
    if (searchInput.classList.contains('ativo')) {
      searchInput.focus();
    }
  });


  // Fechar ao pressionar ESC
  document.addEventListener('keyup', function (esc) {
    if (esc.key === 'Escape') {
      searchInput.classList.remove('ativo');
      carrinho.classList.remove('aberto');
      overlaycarrinho.classList.remove('visivel');
      produtos.classList.remove('aberto');
      overlayprodutos.classList.remove('visivel');
    }
  });

  // Fechamentos
  const fecharcar = document.querySelector('.fecharcarrinho')
  function fecharProdutos() {
    produtos.classList.remove('aberto');
    overlayprodutos.classList.remove('visivel');
  }

  function fecharCarrinho() {

    carrinho.classList.remove('aberto');
    overlaycarrinho.classList.remove('visivel');
  }


  fecharcar.addEventListener('click', function (e3) {
    e3.preventDefault();
    fecharCarrinho();
  });

  overlaycarrinho.addEventListener('click', function (e4) {
    e4.preventDefault();
    fecharCarrinho();
  });

const fecharprods = document.querySelector('.fecharprodutos');
  fecharprods.addEventListener('click', function (e5) {
    e5.preventDefault();
    fecharProdutos();
  });

fecharprods.addEventListener('click', function (e6) {
    e6.preventDefault();
    fecharProdutos();
  });
})();