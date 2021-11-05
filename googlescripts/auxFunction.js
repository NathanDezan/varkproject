function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function sendEmails(email, v, a, r, k, text) {
    var message = "O acrônimo em inglês VARK representa: V (<em>Visual</em>), A (<em>Aural</em>), R (<em>Read/Write</em>) e K (<em>Kinesthetic</em>). " + 
    "<br><br><b>Cálculo da pontuação obtida em relação às respostas:</b><br><br>";
    var messageResults = "<b>Respostas para Visual: </b>" + v + "<br>" + "<b>Respostas para Auditivo: </b>" + a + "<br>" + "<b>Respostas para Leitor/Escritor: </b>" + 
    r + "<br>" + "<b>Respostas para Cinestésico: </b>" + k + "<br>" + "<br>";
    var lLearning = "Seu aprendizado é: " + text;
    var messageGuide = "<b>Visual:</b> Pessoas desse estilo de aprendizagem preferem aprender utilizando recursos gráficos, ou seja, símbolos visuais para apresentar conceitos," +
    "raciocínios ou ideias e as relações entre esses recursos.<br><b>Algumas atividades:</b> mapas, diagramas, gráficos, esquemas, cores, textos escritos com destaques em cores e fontes," +
    "diferentes fontes em relação a cores e tamanho, desenhos, mapas mentais e/ou mapa conceitual.<br><b>Estratégias:</b> Utilizar imagens para ajudar recordar ideias ou conceitos." +
    "Mapas mentais e/ou conceituais podem ser uma maneira intuitiva para representar um fluxo de pensamento. Flashcards (conjunto de cartões que trazem informações, como palavras ou números," +
    "em um ou em ambos os lados) com imagens pode ser muito útil no estudo e memorização.<br><br><b>Auditivo:</b> Pessoas desse estilo de aprendizagem preferem ouvir e falar." +
    "Utilizam variações no tom de voz de quem fala para recordar e entender a mensagem.<br><b>Algumas atividades:</b> palestras, apresentações, podcasts, grupos de discussão, programas de rádio, telefone," +
    "conversas, vídeo + áudio, seminários e música.<br><b>Estratégias:</b> Gravar as aulas e estudar o conteúdo posteriormente e complementar os estudos com vídeos disponíveis na internet." +
    "Incluir vídeos ou arquivos de voz as suas anotações. Esse estilo de aprendizagem, teoricamente seja o que mais representa o modelo tradicional de estudo na sala de aula.<br><br><b>Leitor/Escritor:</b>" +
    "Pessoas desse estilo de aprendizagem preferem as informações apresentadas por meio de palavras na forma de texto, como artigos, manuais e relatórios.<br><b>Algumas atividades:</b> dicionários, periódicos, " +
    "enciclopédias, páginas da internet que apresenta muito texto escrito, livros, textos, apostilas, leitura, feedback por escrito, anotações e redação.<br><b>Estratégias:</b>" +
    "Organizar o conhecimento no formato de listas, glossários e notas, inclusive transformando gráficos e diagramas em frases escritas. Sugere-se a leitura do material e a reescrita do mesmo de maneira diferente." +
    "Esse estilo de aprendizagem é o mais popular no ambiente acadêmico, em que ler e escrever são habilidades valorizadas por professores e alunos." +
    "<br><br><b>Cinestésico:</b> Pessoas desse estilo de aprendizagem preferem atividades práticas e movimentos. Caracterizam-se pessoas que utilizam o corpo para criar ou fazer algo." +
    "<br><b>Algumas atividades:</b> executar ao contrário de ver ou ouvir os outros fazendo, palestras, demonstrações, atividade esportiva, encenação, atividades com experiências em laboratórios," +
    "role playing (é um jogo em que os jogadores as vezes fingem ser outra pessoa, em épocas diferentes ou nos dias atuais), e qualquer outra atividade que possibilita o movimento do corpo." +
    "<br><b>Estratégias:</b> Organizar as informações de seu modo para ajudar nos estudos. Construir um ambiente imersivo de estudo (por exemplo: simulador da vida real em ambientes virtuais)." +
    "Pessoas desse estilo de aprendizagem possui muita energia e geralmente realizam outras atividades paralelas ao processo de aprendizado."

    var send = {
        to: email,
        subject: "Tipo de aprendizado VARK - Resultado",
        htmlBody: message + messageResults + lLearning + "<br><br><b>Guia para os aprendizados:</b><br><br>" + messageGuide,
        name: "Vark Project"
    };

    MailApp.sendEmail(send);
}