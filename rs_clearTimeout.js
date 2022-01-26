/*
    TIMERS
    Uma mandeira de trabalharmos com o tempo dentro do NodeJs

    O QUE VAMOS APRENDER
    setTimeout = vai esperar um certo tempo e rodar uma função
    clearTimeout = vai cancelar o setTimeout
    setInterval = intervalo, de tempo em tempo vai executar uma função
    clearInterval = cancela o intervalo criado

    IREMOS PRATICAR UM POUCO MAIS DE 
    Assíncronismo
    Callbacks
*/

// setTimeout vai rodar uma função depois de x milissegundos
// clearTimeout cancela um Timeout

const timeOut = 3000;
const finished = () => console.log("done!");

let timer = setTimeout(finished, timeOut); //aguarda 3 segundos e roda a função,  é uma função de callback pois é chamada de volta depois de 3 segundos
clearTimeout(timer) //cancela o timeout que foi guardado dentro da variavel timer