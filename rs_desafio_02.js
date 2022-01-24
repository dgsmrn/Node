/*  Crie 2 arquivos javascript
    O primeiro, irá exportar uma função chamada getFlag()
    que receberá um argumento do tipo String.
    Essa função deverá buscar dentro do array process.argv a flag desejada, que á a String
    e retornar o valor da flag

    O segundo irá importar a funçaõ e passar a flag desejada

    Iremos rodar no terminal o segundo arquivo passando as flags ==name e ==greeting
    para que seja impresso no terminal a saudação e o nome da pessoa. */

const getFlagValue = require("./rs_desafio_01");
console.log(`Oi ${getFlagValue("==name")}. ${getFlagValue("==greeting")}`);

//rodar no terminal node rs_desafio_02 ==greeting "Tudo bem?" ==name "Douglas"