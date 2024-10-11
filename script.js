//DANDO NOME PARA AS VARIAVEIS E TRAZENDO ID
const calcular = document.getElementById("calcular");


//CRIANDO A FUNÇÃO IMC
function imc (){
    const nome = document.getElementById("nome").value;//const é que vai dar o nome pra variavel
    //document.getElementById está falando pra pegar o ID cujo o nome é (x)
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    
    if(nome !=='' && altura!=='' && peso !==''){
        
        //calculando o IMC
        //variavel = peso / alltura x altura
        //.toFixed é para arredondar 2 casas
        const valorIMC = (peso / (altura*altura)).toFixed(2);


        let classificacao = ""; //let pq ela tem que ser alterada, variavel recebe "" => nada
        if (valorIMC <18.5){
            classificacao = "Abaixo do Peso.";
        }
        else if (valorIMC <25){ //else if, se determinada condição for verdadeira, se for falsa executa a afirmação dentro do else
            classificacao = "com peso ideal !";
        }
        else if(valorIMC <30){ 
            classificacao = "levemente acima do Peso.";
        }
        else if (valorIMC <35){ 
            classificacao ="com obesidade grau I";}
        else if (valorIMC <40){
            classificacao = "com obesidade grau II";}
        else{
            classificacao = "com obesidade grau III. CUIDE-SE !!";
        }
    

        resultado.textContent = `Olá ${nome} !!  Seu IMC é ${valorIMC} e você está ${classificacao}` //acento grave ` para incluir variaveis $ e abre chaves {}
    }else{ 
        resultado.textContent = "Preencha todos os campos!!!"; //textContent é para o conteudo dentro da div input
    }

}
//calcular.escutar quando alguem "click" excutar o imc
calcular.addEventListener ("click", imc);


