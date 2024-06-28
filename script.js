const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
       enunciado: "Qual o ano de fabricação do Opala?",
       alternativas: [
           {
               texto: "Opala",
               afirmacao: "Beberão pra cacete, carro de mafioso"
           },
           {
               texto: "Monza",
               afirmacao: "Clássico, um dos melhores Chevrolet em 1986"
           }
       ]
   },
   {
       enunciado: "Qual o ano de fabricação do Maverick?",
       alternativas: [
           {
               texto: "Maverick",
               afirmacao: "1969"
           },
           {
               texto: "Um dos melhores Fords da época",
               afirmacao: "Duas opções de motores de seis cilindros – 2.8 ou 3.3 litros – e tinha como objetivo ser uma opção barata"
           }
       ]
   },
   {
       enunciado: "Qual o último ano de fabricação do Maverick?",
       alternativas: [
           {
               afirmacao: "1979"
           },
           {
               afirmacao: "1973"
           }
       ]
   },
   {
       enunciado: "Qual o ano da criação da Caravan?",
       alternativas: [
           {
               afirmacao: "1975"
           },
           {
               afirmacao: "1998"
           }
       ]
   },
   {
       enunciado: "Qual foi o ano de criação do Chevette?",
       alternativas: [
           {
               texto: "O Chevette foi lançado em 1973, completando agora 50 anos",
               afirmacao: "1973"
           },
           {
               texto: "O Chevette foi lançado em 1963, completando agora 60 anos",
               afirmacao: ""
           }
       ]
   }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.innerHTML = ""; // Limpar o conteúdo anterior das alternativas
   mostraAlternativas();
}

function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto || alternativa.afirmacao; // Usar texto ou afirmacao como texto do botão
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}

function respostaSelecionada(opcaoSelecionada) {
   const afirmacao = opcaoSelecionada.afirmacao || ""; // Caso afirmacao não exista, usar string vazia
   historiaFinal += afirmacao + " ";
   atual++;
   mostraPergunta();
}

function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.innerHTML = ""; // Limpar o conteúdo das alternativas no resultado
}

mostraPergunta();


