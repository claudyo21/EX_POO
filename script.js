//Questão 1:
//Crie uma array chamada jogos com os valores 'Futebol', 'Basquete', 'Vôlei'. Verifique se 'Basquete' está presente na array e exiba a mensagem "Encontrado" se estiver.

let jogos = ['Futebol', 'Basquete', 'Vôlei']
if (jogos.includes('Basquete')) {
    console.log("Encontrado");
} else {
    console.log("Não Encontrado");
}
// Questão 2:
// Crie uma array chamada frutas com os valores 'Maçã', 'Banana', 'Uva'.Verifique se 'Laranja' está presente na array e exiba a mensagem "Não encontrado" se não estiver.

let frutas = ['Maçã','Banana','Uva']
let notFrutas = frutas.includes('Laranja')
if(notFrutas){
    console.log("Encontrado");
}else{
    console.log("Não encontrado");
}

//     Ordenação
// Questão 1:
// Crie uma array chamada nomes com os valores 'Carlos', 'Ana', 'Beatriz'.Ordene a array em ordem alfabética.

let nomes =['Carlos','Ana','Beatriz']
nomes.sort()
console.log(nomes);

//     Questão 2:
// 		Crie uma array chamada numeros com os valores 10, 5, 8, 1. Ordene a array em ordem crescente.

let numeros = [10,5,8,1]
numeros.sort()
console.log(numeros);

//     Funções
// 		Questão 1:
// 		Crie uma função chamada calculaQuadrado que recebe um número como parâmetro e retorna o quadrado desse número.Teste a função com o valor 4.

    function calcularQuadrado(a){
        let calcular = a * a
        return calcular
    }
    console.log(calcularQuadrado(4))

// 		Questão 2:
// 		Crie uma função chamada cumprimentar que recebe um nome como parâmetro e retorna uma mensagem de saudação, por exemplo, "Olá, João!".Teste a função com o nome 'Maria'.
    function comprimentar(){
        let nome = 'Maria'
        return nome
    }
    console.log('Óla'+comprimentar(nome))
// 		Flexibilidade de Parâmetros
// 		Questão 1:""
// 		Crie uma função chamada somar que recebe dois parâmetros e retorna a soma deles.Teste a função com os valores 3 e 7.

// 		Questão 2:
// 		Crie uma função chamada somarVarios que recebe um número variável de parâmetros e retorna a soma de todos eles.Teste a função com os valores 1, 2, 3 e 4.

// 		Escopo de Variáveis
// 		Questão 1:
// 		Declare uma variável global chamada cidade com o valor 'São Paulo'.Dentro de uma função, declare uma variável local com o mesmo nome e valor 'Rio de Janeiro'.Exiba os valores das duas variáveis.

//     Questão 2:
// 		Declare uma variável dentro de um bloco if e tente acessá - la fora do bloco.Observe o comportamento.

// 		Funções Anônimas
// 		Questão 1:
// 		Crie uma função anônima que recebe um número como parâmetro e retorna o dobro desse número.Atribua essa função a uma variável chamada dobrar.

//     Questão 2:
// 		Crie uma função anônima que recebe uma string como parâmetro e retorna a string em letras maiúsculas.Atribua essa função a uma variável chamada maiuscula.

// 		Funções de Callback
// 		Questão 1:
// 		Crie uma função chamada processar que recebe dois parâmetros: um número e uma função de callback.A função processar deve aplicar o callback ao número e retornar o resultado.Teste com uma função de callback que triplica o número.

//     Questão 2:
// 		Crie uma função chamada lerArquivo que recebe um nome de arquivo e duas funções de callback: sucesso e erro.A função deve simular a leitura de um arquivo e chamar sucesso se o arquivo for encontrado ou erro se não for encontrado.Teste com callbacks que exibem mensagens apropriadas.

// 		Arrow Functions
// 		Questão 1:
// 		Crie uma arrow function que recebe dois números e retorna a soma deles.Atribua essa função a uma variável chamada soma.

//     Questão 2:
// 		Crie uma arrow function que recebe um número e retorna "par" se o número for par e "ímpar" se o número for ímpar.Atribua essa função a uma variável chamada parOuImpar.

// 		Funções Nativas para Manipular Strings
// 		Questão 1:
// 		Crie uma string chamada texto com o valor "JavaScript é incrível".Use um método nativo para converter toda a string para letras maiúsculas.

//     Questão 2:
// 		Crie uma string chamada frase com o valor "Aprender JavaScript".Use um método nativo para substituir "JavaScript" por "programação".

// 		Funções Nativas para Matemática
// 		Questão 1:
// 		Use a função Math.random() para gerar um número aleatório entre 0 e 1. Multiplique esse número por 10 e arredonde para baixo.

//     Questão 2:
// 		Use a função Math.ceil() para arredondar o número 7.3 para cima.
