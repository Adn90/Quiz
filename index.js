const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "let myVar;",
      "new var myVar;",
      "variable myVar;",
    ],
    correta: 0
  },
  {
    pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array?",
    respostas: [
      "push()",
      "pop()",
      "shift()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'getElementById()' faz em JavaScript?",
    respostas: [
      "Seleciona um elemento pelo seu nome de classe",
      "Seleciona um elemento pelo seu ID",
      "Seleciona um elemento pelo seu nome de tag",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função JavaScript é usada para imprimir mensagens no console?",
    respostas: [
      "logMessage()",
      "print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função de 'typeof' em JavaScript?",
    respostas: [
      "Retorna o tipo de uma variável",
      "Define o tipo de uma variável",
      "Compara o tipo de duas variáveis",
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "função myFunction()",
      "var myFunction = function()",
      "function myFunction()",
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
    respostas: [
      "Remove um ouvinte de evento de um elemento",
      "Adiciona um ouvinte de evento a um elemento",
      "Substitui um ouvinte de evento de um elemento",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "<!-- Este é um comentário -->",
      "/* Este é um comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '&&' faz em JavaScript?",
    respostas: [
      "Operador de igualdade",
      "Operador de adição",
      "Operador lógico E",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método JavaScript é usado para converter uma string em um número?",
    respostas: [
      "parseInt()",
      "convertToNumber()",
      "stringToNumber()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'querySelector()' faz em JavaScript?",
    respostas: [
      "Seleciona o primeiro elemento que corresponde a um seletor CSS",
      "Seleciona todos os elementos que correspondem a um seletor CSS",
      "Seleciona um elemento pelo seu ID",
    ],
    correta: 0
  },
];

const respostasCorretas = new Set();
const totalDePerguntas = perguntas.length;

const quiz = document.querySelector('#quiz');
const template = document.querySelector("template");
for (const item of perguntas) {  
  const quizItem = template.content.cloneNode(true); // copia o que tem dentro da tag
  quizItem.querySelector('h3').textContent = item.pergunta;
  dtBuild(item, quizItem);
  // remove item fixo do html
  quizItem.querySelector('dl dt').remove();

  quiz.appendChild(quizItem);
}

function dtBuild(item, quizItem) {
  for (const resposta of item.respostas) {
    // procura dentro do dl, o dt
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', `pergunta-${perguntas.indexOf(item)}`);
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    dt.querySelector('input').onchange = (event) => {
      respostasCorretas.delete(item);
      if (event.target.value == item.correta) {
        respostasCorretas.add(item);
      }
      atualizarAcertos();
    }    
    quizItem.querySelector('dl').appendChild(dt);    
  }
}

function atualizarAcertos() {
  const mostrarTotal = document.querySelector("#acertos span");
  mostrarTotal.textContent = `${respostasCorretas.size} de ${totalDePerguntas}`;
}