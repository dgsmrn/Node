// process mostra informações de todos os processos que estão rodando no node

// argv é uma lista de argumentos. Existe a possibilidade de passar argumentos para dentro do programa
console.log(process.argv)

// executar no console node process.js Douglas Carvalho
const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`Seu nome é ${firstName} ${lastName}`)
