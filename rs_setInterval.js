// seInterval irá rodar uma função N vezes
// depois de X milissegundos

const timeOut = 1000
const checking = () => console.log('Checking!')

setInterval(checking, timeOut); // Registra uma função que é executada a cada 1000 milissegundos