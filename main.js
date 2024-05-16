Skip to main content
Google Sala de Aula
Google Sala de Aula
Matematica II - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
Início
Agenda
Minhas inscrições
Pendentes
B
Biologia Ii - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
M
Matematica - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
F
Fisica - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
F
FÍSICA 3 - 3B - - ROBÓTICA- Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
M
Matematica II - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
F
Física 2 - 3B - ENERGIA E ASTRONOMIA - Tarde -
1 CENTENARIO, C E C-M-EF M P
L
Lingua Portuguesa - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
3
3º Ano B-Cidadania E Civismo - Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
M
Matematica Iii - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
E
Educacao Financeira - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
Q
Quimica I - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
P
Projeto De Vida - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
E
Educacao Fisica - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
Turmas arquivadas
Configurações
Mural
Atividades
Pessoas
Matematica II - 3º Ano B Tarde - Médio 1 CENTENARIO, C E C-M-EF M P
Matematica II - 3º Ano B Tarde - Médio
1 CENTENARIO, C E C-M-EF M P
Próximas atividades
Nenhuma atividade para a próxima semana!

Escreva um aviso para sua turma

Aviso: "Arquivo JavaScript para o gerador de…"
VINICIUS AUGUSTO NETZEL
Criado em: 22 de abr.22 de abr.
Arquivo JavaScript para o gerador de senhas.

main.js
JavaScript

Adicionar comentário para a turma...


Aviso: "Arquivo do JavaScript atualizado para…"
VINICIUS AUGUSTO NETZEL
Criado em: 31 de mar.31 de mar.
Arquivo do JavaScript atualizado para trabalhar nas próximas aulas. Assunto: Contagem regressiva dos objetivos de vocês.

main.js
JavaScript

Adicionar comentário para a turma...


Aviso: "Arquivo java script para trabalhar a…"
VINICIUS AUGUSTO NETZEL
Criado em: 10 de mar.10 de mar.
Arquivo java script para trabalhar a partir dessa semana.

main.js
JavaScript

Adicionar comentário para a turma...


Aviso: "Lista dos comandos em HTML."
VINICIUS AUGUSTO NETZEL
Criado em: 25 de fev.25 de fev.
Lista dos comandos em HTML.

HTML: o que é, como aprender e um Guia para iniciantes | Alura
https://www.alura.com.br/artigos/html

Adicionar comentário para a turma...

Mural
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%¨&*()+-';
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();

}
function aumentaTamanho() {
    if (tamanhoSenha < 100) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}



for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha
}

geraSenha()

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }

    let senha = '';

    for (let i = 0; i < tamanhoSenha; i++) {

        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && tamanhoSenha < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent ="Um computador pode levar até " + Math.floor((2 ** entropia)/(100e6*60*60*24))+" dias para descobrir essa senha";
}
main.js
Exibindo main.js…