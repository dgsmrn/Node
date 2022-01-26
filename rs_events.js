/*
    EVENT MODULE
    É um mecanismo para
        Disparar eventos
        Ouvir eventos
        Fazer alguma ação quando ouvir o evento
        É a base para muitos outros módulos como: http, stream, file systemm, etc..

    O QUE VAMOS APRENDER
    Utilizar os eventos
    Disparar eventos
    Ouvir eventos
    Executar ações para determinados eventos
    Entender como ele é a base para outros módulos

*/

const {EventEmitter} = require('events')

const ev = new EventEmitter()
//console.log(ev)

ev.once('saySomething', (message) => {console.log('Eu ouvi você apenas uma vez: ', message)}) //Ao ouvir o evento executa uma função apenas uma vez

ev.on('saySomething', (message) => {console.log('Eu ouvi você: ', message)}) //sempre que ouvir o evento executa uma função

ev.emit('saySomething', "Mayk") //emite o evento saySomething
ev.emit('saySomething', "João")
ev.emit('saySomething', "Camila")










