$(document).ready(function () {
    let produto = document.getElementById('estoque-produto');
    produto.style.display = 'block';
    console.log('carregado');
});

let changeFilter = function (filter) {
    let produto = document.getElementById('estoque-produto');
    let morador = document.getElementById('estoque-morador');

    switch (filter) {
        case 'produto':
            produto.style.display = 'block';
            morador.style.display = 'none';
            break;

        case 'morador':
            produto.style.display = 'none';
            morador.style.display = 'block';
            break;
    }
}