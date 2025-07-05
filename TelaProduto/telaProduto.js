document.addEventListener('DOMContentLoaded', function() {
    const quantityBox = document.querySelector('.quantity-box');
    const input = quantityBox.querySelector('input');
    const menos = quantityBox.querySelector('.menos');
    const mais = quantityBox.querySelector('.mais');
    
    // Configura o valor inicial e máximo
    let value = 1;
    const max = 20;
    const min = 1;
    
    // Atualiza o valor do input
    function updateValue(newValue) {
        value = Math.max(min, Math.min(max, newValue));
        input.value = value;
    }
    
    // Evento para o botão -
    menos.addEventListener('click', function() {
        updateValue(value - 1);
    });
    
    // Evento para o botão +
    mais.addEventListener('click', function() {
        updateValue(value + 1);
    });
    
    // Validação ao digitar
    input.addEventListener('input', function() {
        let num = parseInt(this.value) || min;
        updateValue(num);
    });
    
    // Validação ao sair do campo
    input.addEventListener('blur', function() {
        if (this.value === '') {
            updateValue(min);
        }
    });
});