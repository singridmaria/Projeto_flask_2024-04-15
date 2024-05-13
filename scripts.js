document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventdefault();

    //obter valores do forms
    var nome = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;

    var dados = {
        name: nome,
        price: preco
    }
    
    console.log(dados)

    //requisição AJAX para API

    fetch('http://127.0.0.1:51235/criar',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })

});