// declaração dos campos
let Pergunta = document.querySelector("#pergunta");
let respostasContainer = document.querySelector("#respostas");
let mensagem = document.querySelector("#mensagem");
let contadorErrosContainer = document.querySelector("#contador-erros");
let contadorAcertosContainer = document.querySelector("#contador-acertos");

// Variáveis de Placar
let totalErros = 0;
let totalAcertos = 0;

// armazenar perguntas
const perguntas = [
    {
        pergunta: "Qual destes saltos é conhecido por ser o único na patinação artística onde o atleta decola de frente?",
        respostas: [
            { option: "Salchow", correct: false },
            { option: "Lutz", correct: false },
            { option: "Axel", correct: true },
            { option: "Loop", correct: false }
        ]
    },

    {
        pergunta: "O que são os 'Toe Picks' localizados na ponta das lâminas dos patins de patinação artística?",
        respostas: [
            { option: "Dispositivos magnéticos para aumentar a velocidade nas retas.", correct: false },
            { option: "Pequenos dentes de metal usados para dar impulso em saltos e fixação no gelo.", correct: true },
            { option: "Travas de segurança usadas exclusivamente para frear o patinador em emergências.", correct: false },
            { option: "Protetores plásticos para não arranhar o gelo fora das apresentações.", correct: false }
        ]
    },

    {
        pergunta: "Qual é o nome da curva que deixa no gelo um desenho semelhante ao número 3?",
        respostas: [
            { option: "Crossover", correct: false },
            { option: "3-Turn (Volta em 3)", correct: true },
            { option: "Hydroblading", correct: false },
            { option: "Biellmann", correct: false }
        ]
    },

    {
        pergunta: "No Hóquei no Gelo, o disco utilizado no lugar da bola é feito de qual material?",
        respostas: [
            { option: "Plástico oco revestido", correct: false },
            { option: "Madeira comprimida leve", correct: false },
            { option: "Borracha vulcanizada", correct: true },
            { option: "Ferro maleável encapado", correct: false }
        ]
    },

    {
        pergunta: "Qual é a principal diferença mecânica entre os patins de hóquei e os de patinação artística no gelo?",
        respostas: [
            { option: "Os patins de hóquei não possuem toe picks e a lâmina é mais curva.", correct: true },
            { option: "Os patins de hóquei são feitos inteiramente de couro macio.", correct: false },
            { option: "Os patins de hóquei possuem duas lâminas paralelas.", correct: false },
            { option: "As lâminas de hóquei são três vezes mais longas.", correct: false }
        ]
    },

    {
        pergunta: "No Hóquei em Patins Tradicional, qual tipo de patim é utilizado pelos atletas?",
        respostas: [
            { option: "Patins Inline de 3 rodas grandes", correct: false },
            { option: "Patins Quad (4 rodas paralelas)", correct: true },
            { option: "Patins Inline de velocidade com 5 rodas", correct: false },
            { option: "Patins Aggressive", correct: false }
        ]
    },

    {
        pergunta: "O que acontece quando um jogador recebe uma penalidade de tempo no hóquei?",
        respostas: [
            { option: "É expulso definitivamente.", correct: false },
            { option: "Paga uma multa ao árbitro.", correct: false },
            { option: "Vai para o Penalty Box por um período determinado.", correct: true },
            { option: "O adversário ganha três pontos.", correct: false }
        ]
    },

    {
        pergunta: "Onde fica localizado o freio nos patins Quad tradicionais?",
        respostas: [
            { option: "Atrás do calcanhar.", correct: false },
            { option: "Na frente, abaixo dos dedos (Toe Stop).", correct: true },
            { option: "No centro da base.", correct: false },
            { option: "Não possuem freio.", correct: false }
        ]
    },

    {
        pergunta: "Qual esporte coletivo de contato é disputado em uma pista oval usando patins Quad?",
        respostas: [
            { option: "Slalom Crossover", correct: false },
            { option: "Roller Derby", correct: true },
            { option: "Figure Circle", correct: false },
            { option: "Artistic Dance", correct: false }
        ]
    },

    {
        pergunta: "Nos patins Quad, como são chamadas as peças responsáveis pelas curvas e inclinações?",
        respostas: [
            { option: "Rolamentos", correct: false },
            { option: "Cuffs", correct: false },
            { option: "Trucks", correct: true },
            { option: "Liners", correct: false }
        ]
    },

    {
        pergunta: "Para patinar na rua, qual dureza de roda costuma ser mais recomendada?",
        respostas: [
            { option: "Acima de 90A", correct: false },
            { option: "Entre 78A e 82A", correct: true },
            { option: "Plástico maciço sem indicação", correct: false },
            { option: "Metal revestido", correct: false }
        ]
    },

    {
        pergunta: "O que caracteriza uma configuração Rockered (banana)?",
        respostas: [
            { option: "Todas as rodas tocam o chão igualmente.", correct: false },
            { option: "As rodas da frente e de trás ficam mais altas ou são menores.", correct: true },
            { option: "As rodas centrais são removidas.", correct: false },
            { option: "As rodas ficam inclinadas a 45 graus.", correct: false }
        ]
    },

    {
        pergunta: "Qual é o nome da técnica de frenagem onde um pé fica perpendicular ao outro formando um T?",
        respostas: [
            { option: "Powerslide", correct: false },
            { option: "Parallel Slide", correct: false },
            { option: "T-Stop", correct: true },
            { option: "Soul Grind", correct: false }
        ]
    },

    {
        pergunta: "Qual é a principal vantagem dos patins Triskate (3WD)?",
        respostas: [
            { option: "São mais fáceis para ficar parado.", correct: false },
            { option: "Permitem mais velocidade e passam melhor por irregularidades.", correct: true },
            { option: "São obrigatórios na patinação artística.", correct: false },
            { option: "São mais baixos que os modelos tradicionais.", correct: false }
        ]
    },

    {
        pergunta: "Qual é o nome da bota acolchoada interna de um patim inline?",
        respostas: [
            { option: "Frame", correct: false },
            { option: "Liner", correct: true },
            { option: "Cuff", correct: false },
            { option: "Spacer", correct: false }
        ]
    }
];

// controla perguntas já usadas
let perguntasUsadas = [];


// função aleatória
function numeroAleatorio() {
    return Math.floor(Math.random() * perguntas.length);
}


// carregar pergunta
function loadPergunta() {

    // terminou tudo
    if (perguntasUsadas.length === perguntas.length) {

        Pergunta.innerHTML = `Quiz Concluído!<br><small style="font-size: 1.2rem; color: #aaa;">Acertos: ${totalAcertos} | Erros: ${totalErros}</small>`;

        respostasContainer.innerHTML = "";

        const button = document.createElement("button");

        button.innerHTML = "Reiniciar Quiz";

        button.classList.add("resposta");
        button.style.textAlign = "center";

        button.addEventListener("click", () => {

            // animação do botão
            anime({
                targets: button,

                duration: 350,
                easing: 'easeInOutSine',
                direction: 'alternate',

                scale: 1.2,

                complete: function () {

                    anime({
                        targets: button,
                        scale: 1,
                    });

                }
            });

            // reinicia quiz e limpa placares
            perguntasUsadas = [];
            totalErros = 0;
            totalAcertos = 0;
            contadorErrosContainer.innerHTML = totalErros;
            contadorAcertosContainer.innerHTML = totalAcertos;

            mensagem.innerHTML = "";
            Pergunta.innerHTML = "";

            setTimeout(() => {
                loadPergunta();
            }, 400);

        });

        respostasContainer.appendChild(button);

        return;
    }

    let indice;

    // evita repetir perguntas
    do {
        indice = numeroAleatorio();
    } while (perguntasUsadas.includes(indice));

    perguntasUsadas.push(indice);

    const item = perguntas[indice];

    Pergunta.innerHTML = item.pergunta;

    respostasContainer.innerHTML = "";

    item.respostas.forEach((resposta) => {

        const button = document.createElement("button");

        button.innerHTML = resposta.option;

        button.classList.add("resposta");

        button.addEventListener("click", () => {

            // animação do clique
            anime({
                targets: button,

                duration: 250,
                easing: 'easeInOutSine',
                direction: 'alternate',

                scale: 1.03,

                complete: function () {

                    anime({
                        targets: button,
                        scale: 1,
                    });

                }
            });

            // acertou
            if (resposta.correct) {

                mensagem.innerHTML = "Acertou!";

                mensagem.classList.remove("errou");
                mensagem.classList.add("acertou");

                // Incrementa e atualiza o contador de acertos
                totalAcertos++;
                contadorAcertosContainer.innerHTML = totalAcertos;

                // animação da mensagem
                anime({
                    targets: mensagem,

                    duration: 350,
                    easing: 'easeInOutSine',
                    direction: 'alternate',

                    scale: 1.2,

                    complete: function () {

                        anime({
                            targets: mensagem,
                            scale: 1,
                        });

                    }
                });

                // próxima pergunta
                setTimeout(() => {

                    mensagem.innerHTML = "";

                    loadPergunta();

                }, 1000);

            }

            // errou
            else {

                mensagem.innerHTML = "Errou!";

                mensagem.classList.remove("acertou");
                mensagem.classList.add("errou");

                // Incrementa e atualiza o contador de erros
                totalErros++;
                contadorErrosContainer.innerHTML = totalErros;

                // animação de erro (shake)
                anime({
                    targets: button,

                    keyframes: [
                        { translateX: -6 },
                        { translateX: 7 },
                    ],

                    direction: 'alternate',
                    duration: 120,
                    loop: 3,
                    easing: 'easeInOutSine',
                });

            }

        });

        respostasContainer.appendChild(button);

    });

}

// iniciar quiz
loadPergunta();