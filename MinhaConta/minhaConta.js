



//Estilização do input do tipo arquivo

  const input = document.getElementById('fileInput');
  const fileName = document.getElementById('fileName');

  input.addEventListener('change', function() {
    if (this.files.length > 0) {
      fileName.innerHTML = this.files[0].name;
    } else {
      fileName.innerHTML = 'Nenhum arquivo selecionado';
    }
  });