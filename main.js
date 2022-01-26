/*
    BEST ME APP
    Encontre sua melhor versão!

    Use o App ao final de cada dia para refletir sobre sua jornada.

    O que vamos aprender?
    A se comunicar com o processo enquanto ele estiver rodando
    [] process.stdout
    [] process.stdin
    [] process.on

    *Assincronismo
*/

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",    
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ") //Processo de saída padrão para escrever algo.
}

ask()

const answers = []

process.stdin.on("data", data => { //fica ouvindo o processo se caso algum dado entrar no sistema ele executa uma função
    answers.push( data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else { 
        process.exit() // para o processo
    }
    
})

process.on('exit', () => { //quando o process.on ouve o exit ele mostra o texto.
    console.log(`
    Bacana Mayk!
    
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}
    
    O que te deixou feliz hoje:
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje!!
    
    Volte amanhã para novas reflexões!!
    `)
})