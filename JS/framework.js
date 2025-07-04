   function abrirCarrinho() {
      document.getElementById('carrinho').classList.add('aberto');
      document.getElementById('overlay').classList.add('visivel');
    }

    function fecharCarrinho() {

      document.getElementById('carrinho').classList.remove('aberto');
      document.getElementById('overlay').classList.remove('visivel');
    }
    //Script da nav produtos

    function abrirProdutos() {
      document.getElementById('produtos-nav').classList.add('aberto');
      document.getElementById('overlayprod').classList.add('visivel');
    }

    function fecharProdutos() {
      document.getElementById('produtos-nav').classList.remove('aberto');
      document.getElementById('overlayprod').classList.remove('visivel');
    }


document.getElementById('produtos-nav1').addEventListener('click', function(e) {
  e.preventDefault(); 
  abrirProdutos();    
});
    

    document.querySelector('.search-toggle').addEventListener('click', function (f) {
    f.preventDefault();
      const searchInput = document.querySelector('.search-input');
      searchInput.classList.toggle('ativo');

      // Foca no input quando ativado
      if (searchInput.classList.contains('ativo')) {
        searchInput.focus();
      }
    });

    // Fechar ao clicar fora
   

    // Fechar ao pressionar ESC
    document.addEventListener('keyup', function (esc) {
      if (esc.key === 'Escape') {
        document.querySelector('.search-input').classList.remove('ativo');
        document.getElementById('carrinho').classList.remove('aberto');
        document.getElementById('overlay').classList.remove('visivel');
              document.getElementById('produtos-nav').classList.remove('aberto');
      document.getElementById('overlayprod').classList.remove('visivel');
      }
    });