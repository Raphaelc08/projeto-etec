function toggleAccordion() {
  const content = document.getElementById("accordion-content");
  
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }

  content.classList.toggle("aberto");
  const content2 = document.getElementsByClassName("coluna-esquerda");
  content2.classList.toggle("aberto");
}




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