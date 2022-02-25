var responses = {
    1: false, 2: false, 3: false, 4: false, 5: false,
    6: false, 7: false, 8: false, 9: false, 10: false,
    11: false, 12: false, 13: false, 14: false, 15: false,
    16: false, 17: false, 18: false, 19: false, 20: false,
    21: false, 22: false, 23: false, 24: false, 25: false,
    26: false, 27: false, 28: false, 29: false, 30: false,
    31: false, 32: false, 33: false, 34: false, 35: false,
    36: false, 37: false, 38: false, 39: false, 40: false,
    41: false, 42: false, 43: false, 44: false, 45: false,
    46: false, 47: false, 48: false, 49: false, 50: false,
    51: false, 52: false, 53: false, 54: false, 55: false,
    56: false, 57: false, 58: false, 59: false, 60: false,
    61: false, 62: false, 63: false, 64: false, 65: false,
    66: false, 67: false, 68: false, 69: false, 70: false,
    71: false, 72: false, 73: false, 74: false, 75: false,
    76: false, 77: false, 78: false, 79: false, 80: false}

var informationForm = {Name: "", Age: "", Gender: "", RGA: "", Email: "", Class: "", Function: []};

var countCHAEA = {A: 0, R: 0, T: 0, P: 0};

var functionGroup = {G: false, A: false, P: false, T: false};

function collectResponses(component){
    var nameObject = component.getAttribute("name");
    var nameString = String(nameObject);
    
    responses[nameString] = !responses[nameString];
}

function sendResult(){
    var empty = true;
    for(let i in responses){
        if(empty == true && responses[i] == true){
            empty = false;
        }
    }
        
    if(empty == true){
        resultEmpty();
    }else{
        awaitResult();
        calcuteResult();
    }
}

function collectPersonalInformation(){
    var personalName = document.getElementById("name").value;
    var personalRGA = document.getElementById("rga").value;
    var personalEmail = document.getElementById("email").value;
    var personalAge = document.getElementById("age").value;

    var selectGen = document.getElementById('gen');
    var optionGen = selectGen.options[selectGen.selectedIndex];

    var selectMateria= document.getElementById('materia');
    var optionMateria = selectMateria.options[selectMateria.selectedIndex];

    

    informationForm.Name = personalName;
    informationForm.RGA = personalRGA;
    informationForm.Email = personalEmail;
    informationForm.Age = personalAge;
    informationForm.Gender = optionGen.value;
    informationForm.Class = optionMateria.value;

    if(functionGroup.G == true){
        informationForm.Function.push("Gerente de Projetos");
    }
    if(functionGroup.A == true){
        informationForm.Function.push("Analista de Sistema");  
    }
    if(functionGroup.P == true){
        informationForm.Function.push("Programador");  
    }
    if(functionGroup.T == true){
        informationForm.Function.push("Testador");  
    }
}

function groupGAPT(component){
    var nameObject = component.getAttribute("name");
    var nameString = String(nameObject);
    
    functionGroup[nameString] = !functionGroup[nameString];
}

function resultEmpty(){
    var element = document.getElementById("empty-form");
    element.textContent = "O formulário não pode estar em branco!";
}

function awaitResult(){
    var element = document.getElementById("empty-form");
    element.textContent = "Aguarde um momento!";
}

function calcuteResult(){
    const arrayActive = [3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77];
    const arrayReflective = [10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 55, 58, 63, 65, 69, 70, 79];
    const arrayTeoric = [2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 60, 64, 66, 71, 78, 80];
    const arrayPragmatic = [1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 56, 57, 59, 62, 68, 72, 73, 76];


    for(let i in arrayActive){
        if(responses[arrayActive[i]] == true){
            countCHAEA.A++;
        }
    }

    for(let i in arrayReflective){
        if(responses[arrayReflective[i]] == true){
            countCHAEA.R++;
        }
    }

    for(let i in arrayTeoric){
        if(responses[arrayTeoric[i]] == true){
            countCHAEA.T++;
        }
    }

    for(let i in arrayPragmatic){
        if(responses[arrayPragmatic[i]] == true){
            countCHAEA.P++;
        }
    }

    console.log(countCHAEA);
    collectPersonalInformation();
    
    var contentVARK = {Quiz: "Chaea", Information: informationForm, Responses: responses, Result: countCHAEA};
    axios.post('/result', contentVARK).then((response) => {
        setTimeout(redirectResult, 2000);
    }).catch((error) => {
        console.log(error);
    });
}

function redirectResult(){
    typeLearning();
}

function typeLearning(){
    var bigValue = -1;
    var letterValue = "";
    var triggerMulti = false;

    for(var item in countCHAEA){
        if(countCHAEA[item] > bigValue){
            bigValue = countCHAEA[item];
            letterValue = item;
        }
        if(countCHAEA[item] == bigValue){
            triggerMulti = true;
        }
    }

    if(letterValue == "A"){
        activeCHAEA();
    }else if(letterValue == "R"){
        reflexiveCHAEA();
    }else if(letterValue == "T"){
        teoricCHAEA();
    }else if(letterValue == "P"){
        pragmaticCHAEA();
    }
}

function activeCHAEA(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Ativo!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=chaea.html>CHAEA</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function reflexiveCHAEA(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Reflexivo!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=chaea.html>CHAEA</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function teoricCHAEA(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Teórico</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=chaea.html>CHAEA</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function pragmaticCHAEA(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Pragmático!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=chaea.html>CHAEA</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}