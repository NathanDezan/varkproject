import * as auxFunction from './auxFunction'

function mapVarkChoices(writeData, questionsResponse){
    var answerInLine = [];
    var mapVark = [
      ['Iria com ela.', 'Explicaria como chegar lá.', 'Escreveria como chegar lá (sem mapa).', 'Desenharia ou daria um mapa a ela.'],
      ['Vê-la em sua mente e escolher como a vê.', 'Pronunciá-la mentalmente para descobrir como escrevê-la.', 'Procurá-la num dicionário.', 'Escrever as duas versões e escolher uma.'],
      ['Descrever alguns dos lugares principais.', 'Usar um mapa ou a Internet para mostrar-lhes os locais.', 'Dar-lhes uma cópia impressa do itinerário.', 'Telefonar-lhes, mandar-lhes um mensagem de texto ou um e-mail.'],
      ['Cozinhar algo que você já conhece e sem precisar de instruções.', 'Pedir sugestões a um amigo.', 'Folhar um livro de receitas para tirar ideias baseadas nas fotos das mesmas', 'Usar um livro de receitas onde você sabe que tem uma boa receita.'],
      ['Falaria sobre o tema, ou arranjaria alguém que lhes falasse sobre isto.', 'Mostraria figuras na Internet, fotografias ou livros de fotos.', 'Os levaria para um passeio em parques ou reservas de vida selvagem.', 'Você lhes daria um livro ou panfletos sobre o assunto.'],
      ['Experimentá-lo ou testá-lo.', 'A leitura de detalhes sobre o aparelho.', 'Se ele tem a aparência boa e parece ser de qualidade.', 'As explicações do vendedor sobre as características do aparelho.'],
      ['Observando uma demonstração.', 'Escutando as explicações de um amigo e fazendo perguntas.', 'Diagramas e gráficos - dicas visuais.', 'Através de instruções escritas - p.ex. um manual ou um livro texto.'],
      ['Indicaria um "site" ou algo para ler a respeito.', 'Que usasse um modelo plástico de joelho para lhe mostrar o que está errado.', 'Contaria o que esta errado.', 'Mostraria num diagrama do que está errado.'],
      ['Ler as instruções que vieram com o programa.', 'Conversar com pessoas que conhecem o programa.', 'Usaria os controles ou teclado.', 'Seguir os diagramas do livro que veio com ele.'],
      ['Coisas que eu possa clicar, mudar ou tentar.', 'Uma aparência interessante e características visuais.', 'Descrições por escrito, listas e explicações.', 'Canais de áudio onde eu posso ouvir música, programas de rádio ou entrevistas.'],
      ['Ele possuir um visual atraente.', 'Ter lido rapidamente algumas partes dele.', 'Um amigo ter falado sobre ele e o recomendado.', 'Ele possuir estórias da vida real, experiências e exemplos.'],
      ['A oportunidade de perguntar e falar sobre a câmera e suas características.', 'Instruções claras e listas com pontos detalhando o que fazer.', 'Diagramas mostrando a câmera e o que cada parte faz.', 'Muitos exemplos de fotos boas e ruins para saber melhorá-las.'],
      ['Demonstrações, modelos ou sessões práticas.', 'Perguntas e respostas, debates, discussões em grupo ou palestrantes convidados.', 'Fotocópias, livros ou materiais de leitura.', 'Diagramas, tabelas e gráficos.'],
      ['Basear-se em exemplos do que você fez.', 'Usar uma descrição por escrito de seus resultados.', 'Basear-se nas informações que alguém lhe falasse.', 'Usar gráficos mostrando o que você alcançou.'],
      ['Escolher algo que você já tenha experimentado antes.', 'Pedir sugestões ao garçom ou perguntar a amigos por recomendações.', 'Escolher baseado nas informações do menu.', 'Observar o que os outros estão comendo ou olhar fotos dos pratos.'],
      ['Fazer diagramas ou utilizar gráficos para ajudá-lo a explicar as coisas.', 'Escrever algumas palavras chaves e praticar seu discurso várias vezes.', 'Escrever todos os detalhes de seu discurso e o decoraria após lê-lo diversar vezes.', 'Reunir muitos exemplos e estórias para fazer seu discurso ficar real e prático.']];
  
    for(var i = 0; questionsResponse[i] != null; i++){
      var answer = [];
      var answerResponse = questionsResponse[i].getResponse();
      for(var j = 0; j < 4; j++){
        for(var k = 0; k < 4; k++){
          if(mapVark[i][j] == answerResponse[k]){
            answer[j] = "1";
          }else if(answer[j] != "1"){
            answer[j] = "0";
          }
        }
      }
      for(var z = 0; z < 4; z++){
        answerInLine.push(answer[z].toString());
      }
    }
    writeData.appendRow(answerInLine);
}
  
function sumVark(writeData, email){
    var mapVarkLetter = ['K', 'A', 'R', 'V', 'V', 'A', 'R', 'K', 'K', 'V', 'R', 'A', 'K', 'A', 'V', 'R', 'A', 'V', 'K', 'R', 'K', 'R', 'V', 'A', 'K', 'A', 'V', 'R', 'R', 'K', 'A', 'V', 'R', 'A', 'K', 'V', 'K', 'V', 'R', 'A', 'V', 'R', 'A', 'K', 'A', 'R', 'V', 'K', 'K', 'A', 'R', 'V', 'K', 'R', 'A', 'V', 'K', 'A', 'R', 'V', 'R', 'V', 'K', 'A'];
    var v = 0, a = 0, r = 0, k = 0;
    var position = writeData.getLastRow();
    var mapVarkOccurrence = [];

    for(var i = 0; i < 64; i++){
        mapVarkOccurrence.push(writeData.getRange(position, i+1).getValue().toString());
    }
    for(var j = 0; j < mapVarkOccurrence.length; j++){
        if(mapVarkOccurrence[j] == 1){
        if(mapVarkLetter[j] == "V"){
            v++;
        }else if(mapVarkLetter[j] == "A"){
            a++;
        }else if(mapVarkLetter[j] == "R"){
            r++;
        }else if(mapVarkLetter[j] == "K"){
            k++;
        }
        }
    }
    Logger.log(v + " | " + a + " | " + r + " | " + k);
    var text = eLearning(0, a, r, k);
    sendEmails(email, v, a, r, k, text);
}

function eLearning(v, a, r, k){
    var bValue = v;
    var vValues = [v, a, r, k];
    var learning = [];
    var ttx = ["v", "a", "r", "k"];
    var letterLearning = [];
    var text = "";
    for(var i = 0; i < vValues.length; i++){
        if(vValues[i] > bValue){
        bValue = vValues[i];
        }
    }

    for(var i = 0; i < vValues.length; i++){
        if(vValues[i] == bValue){
        learning.push(vValues[i]);
        letterLearning.push(ttx[i]);
        }
    }

    for(var i = 0; i < letterLearning.length; i++){
        if(letterLearning[i] == "v"){
        text = text.concat("Visual ");
        }else if(letterLearning[i] == "a"){
        text = text.concat("Auditivo ");      
        }else if(letterLearning[i] == "r"){
        text = text.concat("Leitor/Escritor ");
        }else if(letterLearning[i] == "k"){
        text = text.concat("Cinestésico ");
        }
    }

    text = replaceAll(text, " ", " | ");
    return text;
}