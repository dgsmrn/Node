
// require é uma maneira de chamar módulos do node seja um modulo nativo, instalado ou criado
// path é um modulo que já existe dentro do node
const path = require('path')
console.log(path.basename(__filename))

//meus módulos
// Para chamar um módulo criado precisamos parar sua localização como parâmetro
const myModule = require('./rs_exports')
console.log(myModule)
