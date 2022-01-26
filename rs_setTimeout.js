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

const timeOut = 3000;
const finished = () => console.log("done!");

setTimeout(finished, timeOut); //aguarda 3 segundos e roda a função,  é uma função de callback pois é chamada de volta depois de 3 segundos
console.log('Mostrar') // mostra antes de finished


