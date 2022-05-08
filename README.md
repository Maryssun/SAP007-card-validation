# Algoritmo de Luhn

## Sumário

- [1. Introdução](#1-introdução)
- [2. Ideação do projeto](#2-ideação-do-projeto)
- [3. Implementações futuras](#3-implementações-futuras)
- [4. Metodologia Ágil](#5-metodologia-agil)
- [5. Design do projeto](#6-design-do-projeto)
- [6. Capturas de tela](#7-capturas-de-tela)
- [7. Tecnologias utilizadas](#8-tecnologias-utilizadas)
- [8. Como usar](#9-como-usar)
- [9. Autora](#9-autora)

---

## 1. Introdução

O algoritmo de Luhn foi desenvolvido por Hans Peter Luhn, da IBM, em 1954. Ele é capaz de detectar um erro simples em um dígito, assim como a maioria das transposições de um dígito com os dígitos adjacentes. Este algoritmo verifica se um número de cartão é bem formado. Saiba mais em: [UFRGS](http://www.inf.ufrgs.br/arq/wiki/lib/exe/fetch.php?media=wiki:trab:cesar:2008-2-numero_de_cartao_de_credito.pdf)

Este algoritmo nos retorna o resultado realizando o seguinte teste:

1.  Inverte o número, no sentido da esquerda pra direita. 
    Por exemplo, o número 1234567890123 seria reescrito como 3210987654321. 
    
2.  Soma o número dobrando as posições pares. <br>
    Caso o resultado da multiplicação seja um número com dois algarismos, soma os algarismos entre si. <br><br>
    Exemplo: <br> 3 + (2 * 2) + 1 + (0 * 2) + 9 + (8 * 2) + 7 + (6 * 6) + 5 + (4 * 4) + 3 + (2 * 2) + 1 <br>
             3 + (4) + 1 + (0) + 9 + (1 + 6) + 7 + (1 + 2) + 5 + (8) + 3 + (4) + 1, 16 fica 7 ( 1 + 6 ), 12 fica 3 ( 1 + 2 ). <br>
             3 + (4) + 1 + (0) + 9 + (7) + 7 + (3) + 5 + (8) + 3 + (4) + 1 

3.  Se o resultado dessa soma for divisível por 10, é válido, senão é inválido.

## 2. Ideação do projeto

O objetivo desse projeto é simular uma página de oferta de um serviço onde encontra-se na etapa de inserção de dados referentes ao cartão de crédito. No qual faz a validação do número do cartão utilizando o algortimo de Luhn.

## 3. Implementações futuras

A implementar função que identifique a bandeira do cartão e ao identificar mostrar o logotipo.

## 4. Metodologia Ágil

Para me organizar durante as Sprints do projeto, utilizei o Trello. O que facilitou alcançar objetivos maiores através dos baby steps. 
Assim como as cerimonias da metodologia ágil: Daily, Sprint Planning, Sprint Review, Sprint Retrospective, e Sprint Checkout.

## 5. Design do projeto

Fiz um prototipo de baixa fidelidade utilizando folha de papel e lápis.

<!-- <img src="" alt=""/> -->

## 6. Capturas de tela

<kbd>
  <img src="src/imagens/pagina.png" alt="captura de tela da pagina"/><br/>
</kbd>

## 7. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Node.js
- Git e GitHub
- Trello

## 8. Como usar

Você precisará usar o Node.js

Clonar o projeto

` $ git clone https://github.com/Lud-ic/SAP007-card-validation.git`

Instalar as dependências do projeto

` $ npm install or yarn install`

Iniciar a aplicação

` $ npm start or yarn start`

Realizar os testes unitários

` $ npm test or yarn test`


## .9 Autora


<td>
  <div align= "center">
    <img alt="Dayanne Maryssol" height="150" src="https://avatars.githubusercontent.com/u/92697749?v=4"> 
  </div>
  <h3 align="center"><a href="https://github.com/Maryssun">Dayanne Maryssol de Andrade Almeida</a></h3>
  <h4 align="center">Projeto do Bootcamp da <em><a href="https://hub.laboratoria.la/br">Laboratoria</a></em></h4>
  <div align="center">
    <a href = "mailto:maryssol.dayanne@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
     <a href="https://www.linkedin.com/in/dayannemaryssol/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  </div>
  </div>
</td>
