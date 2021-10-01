
function Chutar(){
    console.log("Função chutar")

// sortear um número aleatório secreto

let numeroSecreto = 3



// pegar um número digitado e converter para inteiro


let chute = parseInt(document.querySelector("#valor").value)
//console.log(numeroSecreto , chute)

//comparar o número digitado com o número aleatório secreto

if(numeroSecreto == chute){
    //se tiver correto e os números forem iguais,
    //mostrar a mensagem que a pessoa acertou
    document.querySelector(".resultado").innerHTML = "Você acertou"
}

else

{
    
// se tiver errado e os números forem 
//diferentes, mostrar a mensagem que a pessoa errou
 document.querySelector(".resultado").innerHTML = "Você errou"


}

/**

     * OPERADORES RELACIONAIS

     * < --> menor

     * > --> maior

     * <= --> menor ou igual

     * >= --> maior ou igual

     * == --> igual

     * != --> diferente

     */





}