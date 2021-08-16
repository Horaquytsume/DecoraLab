// Criação de uma função sem retorno e sem argumentos
function mensagem(){
    alert("Você clicou no botão e está executando");
}

// Função com argumentos e sem retorno
function dados(nome,email){
    alert(
        "O seu nome é "+nome.toUpperCase()+"\n"+
        "O seu email é "+email.toLowerCase()
    );
}

function chamaDados(){
    dados(
        prompt("Digite o seu nome"),
        prompt("Digite o seu e-mail")
    );
}

// Função com retorno.
function qualData(){
    // retorna a data do sistema.
    return new Date().toLocaleDateString();
}

// Função anonima, vinculada a uma constante
const soma = function(numero1,numero2){return numero1+numero2};

// Função de seta
const media = (numero1,numero2)=>{return (numero1+numero2)/2};


function acrescimo(preco, percentual){
    
    return preco * (1+calcPercente(percentual));

    function calcPercente(percentual){
        return percentual/100;
    }

}

