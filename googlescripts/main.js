function main() {
    var planID = "1LADfAPcvDQdvbz013OSvJTNA1-AKcL2UvQoUeY-OL60"; // ID DA PLANILHA
    var formID = "1tOSmi7U26zIKji8rEtq84u3d0SaqRLfiJTJwEz5YSPc"; // ID DO FORM
    var form = FormApp.openById(formID); // ATRIBUI O FORM A VARIAVEL "FORM"
    var writeData = SpreadsheetApp.openById(planID).getSheetByName("map"); // ATRIBUI A PAGINA "MAP" DA PLANILHA PARA A VARIAVEL "WRITEDATA"
  
    var allResponse = form.getResponses();
    var qtdResponse = allResponse.length;
    var lastResponse = allResponse[qtdResponse - 1]; // [qtdResponse - 1] PEGA O ULTIMO FORM PREENCHIDO *** MAS E POSSIVEL SELECIONAR O FORM A SER EXIBIDO [qtdResponse - 4]
    var questionsResponse = lastResponse.getItemResponses();
  
    mapVarkChoices(writeData, questionsResponse);
    sumVark(writeData, lastResponse.getRespondentEmail());
  }
  
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
  
  function sendEmails(email, v, a, r, k, text) {
    var message = "O acrônimo em inglês VARK representa: V (<em>Visual</em>), A (<em>Aural</em>), R (<em>Read/Write</em>) e K (<em>Kinesthetic</em>). " + "<br><br><b>Cálculo da pontuação obtida em relação às respostas:</b><br><br>";
    var messageResults = "<b>Respostas para Visual: </b>" + v + "<br>" + "<b>Respostas para Auditivo: </b>" + a + "<br>" + "<b>Respostas para Leitor/Escritor: </b>" + r + "<br>" + "<b>Respostas para Cinestésico: </b>" + k + "<br>" + "<br>";
    var lLearning = "Seu aprendizado é: " + text;
    var messageGuide = "<b>Visual:</b> Pessoas desse estilo de aprendizagem preferem aprender utilizando recursos gráficos, ou seja, símbolos visuais para apresentar conceitos, raciocínios ou ideias e as relações entre esses recursos.<br><b>Algumas atividades:</b> mapas, diagramas, gráficos, esquemas, cores, textos escritos com destaques em cores e fontes, diferentes fontes em relação a cores e tamanho, desenhos, mapas mentais e/ou mapa conceitual.<br><b>Estratégias:</b> Utilizar imagens para ajudar recordar ideias ou conceitos. Mapas mentais e/ou conceituais podem ser uma maneira intuitiva para representar um fluxo de pensamento. Flashcards (conjunto de cartões que trazem informações, como palavras ou números, em um ou em ambos os lados) com imagens pode ser muito útil no estudo e memorização.<br><br><b>Auditivo:</b> Pessoas desse estilo de aprendizagem preferem ouvir e falar. Utilizam variações no tom de voz de quem fala para recordar e entender a mensagem.<br><b>Algumas atividades:</b> palestras, apresentações, podcasts, grupos de discussão, programas de rádio, telefone, conversas, vídeo + áudio, seminários e música.<br><b>Estratégias:</b> Gravar as aulas e estudar o conteúdo posteriormente e complementar os estudos com vídeos disponíveis na internet. Incluir vídeos ou arquivos de voz as suas anotações. Esse estilo de aprendizagem, teoricamente seja o que mais representa o modelo tradicional de estudo na sala de aula.<br><br><b>Leitor/Escritor:</b> Pessoas desse estilo de aprendizagem preferem as informações apresentadas por meio de palavras na forma de texto, como artigos, manuais e relatórios.<br><b>Algumas atividades:</b> dicionários, periódicos, enciclopédias, páginas da internet que apresenta muito texto escrito, livros, textos, apostilas, leitura, feedback por escrito, anotações e redação.<br><b>Estratégias:</b> Organizar o conhecimento no formato de listas, glossários e notas, inclusive transformando gráficos e diagramas em frases escritas. Sugere-se a leitura do material e a reescrita do mesmo de maneira diferente. Esse estilo de aprendizagem é o mais popular no ambiente acadêmico, em que ler e escrever são habilidades valorizadas por professores e alunos.<br><br><b>Cinestésico:</b> Pessoas desse estilo de aprendizagem preferem atividades práticas e movimentos. Caracterizam-se pessoas que utilizam o corpo para criar ou fazer algo.<br><b>Algumas atividades:</b> executar ao contrário de ver ou ouvir os outros fazendo, palestras, demonstrações, atividade esportiva, encenação, atividades com experiências em laboratórios, role playing (é um jogo em que os jogadores as vezes fingem ser outra pessoa, em épocas diferentes ou nos dias atuais), e qualquer outra atividade que possibilita o movimento do corpo.<br><b>Estratégias:</b> Organizar as informações de seu modo para ajudar nos estudos. Construir um ambiente imersivo de estudo (por exemplo: simulador da vida real em ambientes virtuais). Pessoas desse estilo de aprendizagem possui muita energia e geralmente realizam outras atividades paralelas ao processo de aprendizado."
  
    var send = {
      to: email,
      subject: "Tipo de aprendizado VARK - Resultado",
      htmlBody: message + messageResults + lLearning + "<br><br><b>Guia para os aprendizados:</b><br><br>" + messageGuide,
      name: "Vark Project"
    };
  
    //MailApp.sendEmail(email, "Tipo de aprendizado VARK - Resultado",
    //{
      //htmlBody: message + messageResults + lLearning + "<br><br><b>Guia para os aprendizados:</b><br><br>" + messageGuide
    //});
    MailApp.sendEmail(send);
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
  
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }