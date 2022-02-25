var responses = {
1: {C01K: false, C01A: false, C01R: false, C01V: false}, 2: {C02V: false, C02A: false, C02R: false, C02K: false}, 
3: {C03K: false, C03V: false, C03R: false, C03A: false}, 4: {C04K: false, C04A: false, C04V: false, C04R: false}, 
5: {C05A: false, C05V: false, C05K: false, C05R: false}, 6: {C06K: false, C06R: false, C06V: false, C06A: false}, 
7: {C07K: false, C07A: false, C07V: false, C07R: false}, 8: {C08R: false, C08K: false, C08A: false, C08V: false}, 
9: {C09R: false, C09A: false, C09K: false, C09V: false}, 10: {C10K: false, C10V: false, C10R: false, C10A: false}, 
11: {C11V: false, C11R: false, C11A: false, C11K: false}, 12: {C12A: false, C12R: false, C12V: false, C12K: false}, 
13:{C13K: false, C13A: false, C13R: false, C13V: false}, 14: {C14K: false, C14R: false, C14A: false, C14V: false},
15:{C15K: false, C15A: false, C15R: false, C15V: false}, 16: {C16V: false, C16A: false, C16R: false, C16K: false}};

var informationForm = {Name: "", Age: "", Gender: "", RGA: "", Email: "", Class: "", Function: []};

var countVARK = {V: 0, A: 0, R: 0, K: 0};

var functionGroup = {G: false, A: false, P: false, T: false};

function collectResponses(component){
    var nameObject = component.getAttribute("name");
    var nameString = String(nameObject);

    if(nameString.includes("01") == true){
        C01(nameString);
    }
    if(nameString.includes("02") == true){
        C02(nameString);
    }
    if(nameString.includes("03") == true){
        C03(nameString);
    }
    if(nameString.includes("04") == true){
        C04(nameString);
    }
    if(nameString.includes("05") == true){
        C05(nameString);
    }
    if(nameString.includes("06") == true){
        C06(nameString);
    }
    if(nameString.includes("07") == true){
        C07(nameString);
    }
    if(nameString.includes("08") == true){
        C08(nameString);
    }
    if(nameString.includes("09") == true){
        C09(nameString);
    }
    if(nameString.includes("10") == true){
        C10(nameString);
    }
    if(nameString.includes("11") == true){
        C11(nameString);
    }
    if(nameString.includes("12") == true){
        C12(nameString);
    }
    if(nameString.includes("13") == true){
        C13(nameString);
    }
    if(nameString.includes("14") == true){
        C14(nameString);
    }
    if(nameString.includes("15") == true){
        C15(nameString);
    }
    if(nameString.includes("16") == true){
        C16(nameString);
    }
}

function C01(nameString){
    if(nameString == "C01K"){
        responses[1].C01K = !(responses[1].C01K);
    }
    if(nameString == "C01A"){
        responses[1].C01A = !(responses[1].C01A);
    }
    if(nameString == "C01R"){
        responses[1].C01R = !(responses[1].C01R);
    }
    if(nameString == "C01V"){
        responses[1].C01V = !(responses[1].C01V);
    }
}

function C02(nameString){
    if(nameString == "C02V"){
        responses[2].C02V = !(responses[2].C02V);
    }
    if(nameString == "C02A"){
        responses[2].C02A = !(responses[2].C02A);
    }
    if(nameString == "C02R"){
        responses[2].C02R = !(responses[2].C02R);
    }
    if(nameString == "C02K"){
        responses[2].C02K = !(responses[2].C02K);
    }
}

function C03(nameString){
    if(nameString == "C03K"){
        responses[3].C03K = !(responses[3].C03K);
    }
    if(nameString == "C03V"){
        responses[3].C03V = !(responses[3].C03V);
    }
    if(nameString == "C03R"){
        responses[3].C03R = !(responses[3].C03R);
    }
    if(nameString == "C03A"){
        responses[3].C03A = !(responses[3].C03A);
    }
}

function C04(nameString){
    if(nameString == "C04K"){
        responses[4].C04K = !(responses[4].C04K);
    }
    if(nameString == "C04A"){
        responses[4].C04A = !(responses[4].C04A);
    }
    if(nameString == "C04V"){
        responses[4].C04V = !(responses[4].C04V);
    }
    if(nameString == "C04R"){
        responses[4].C04R = !(responses[4].C04R);
    }
}

function C05(nameString){
    if(nameString == "C05A"){
        responses[5].C05A = !(responses[5].C05A);
    }
    if(nameString == "C05V"){
        responses[5].C05V = !(responses[5].C05V);
    }
    if(nameString == "C05K"){
        responses[5].C05K = !(responses[5].C05K);
    }
    if(nameString == "C05R"){
        responses[5].C05R = !(responses[5].C05R);
    }
}

function C06(nameString){
    if(nameString == "C06K"){
        responses[6].C06K = !(responses[6].C06K);
    }
    if(nameString == "C06R"){
        responses[6].C06R = !(responses[6].C06R);
    }
    if(nameString == "C06V"){
        responses[6].C06V = !(responses[6].C06V);
    }
    if(nameString == "C06A"){
        responses[6].C06A = !(responses[6].C06A);
    }
}

function C07(nameString){
    if(nameString == "C07K"){
        responses[7].C07K = !(responses[7].C07K);
    }
    if(nameString == "C07A"){
        responses[7].C07A = !(responses[7].C07A);
    }
    if(nameString == "C07V"){
        responses[7].C07V = !(responses[7].C07V);
    }
    if(nameString == "C07R"){
        responses[7].C07R = !(responses[7].C07R);
    }
}

function C08(nameString){
    if(nameString == "C08R"){
        responses[8].C08R = !(responses[8].C08R);
    }
    if(nameString == "C08K"){
        responses[8].C08K = !(responses[8].C08K);
    }
    if(nameString == "C08A"){
        responses[8].C08A = !(responses[8].C08A);
    }
    if(nameString == "C08V"){
        responses[8].C08V = !(responses[8].C08V);
    }
}

function C09(nameString){
    if(nameString == "C09R"){
        responses[9].C09R = !(responses[9].C09R);
    }
    if(nameString == "C09A"){
        responses[9].C09A = !(responses[9].C09A);
    }
    if(nameString == "C09K"){
        responses[9].C09K = !(responses[9].C09K);
    }
    if(nameString == "C09V"){
        responses[9].C09V = !(responses[9].C09V);
    }
}

function C10(nameString){
    if(nameString == "C10K"){
        responses[10].C10K = !(responses[10].C10K);
    }
    if(nameString == "C10V"){
        responses[10].C10V = !(responses[10].C10V);
    }
    if(nameString == "C10R"){
        responses[10].C10R = !(responses[10].C10R);
    }
    if(nameString == "C10A"){
        responses[10].C10A = !(responses[10].C10A);
    }
}

function C11(nameString){
    if(nameString == "C11V"){
        responses[11].C11V = !(responses[11].C11V);
    }
    if(nameString == "C11R"){
        responses[11].C11R = !(responses[11].C11R);
    }
    if(nameString == "C11A"){
        responses[11].C11A = !(responses[11].C11A);
    }
    if(nameString == "C11K"){
        responses[11].C11K = !(responses[11].C11K);
    }
}

function C12(nameString){
    if(nameString == "C12A"){
        responses[12].C12A = !(responses[12].C12A);
    }
    if(nameString == "C12R"){
        responses[12].C12R = !(responses[12].C12R);
    }
    if(nameString == "C12V"){
        responses[12].C12V = !(responses[12].C12V);
    }
    if(nameString == "C12K"){
        responses[12].C12K = !(responses[12].C12K);
    }
}

function C13(nameString){
    if(nameString == "C13K"){
        responses[13].C13K = !(responses[13].C13K);
    }
    if(nameString == "C13A"){
        responses[13].C13A = !(responses[13].C13A);
    }
    if(nameString == "C13R"){
        responses[13].C13R = !(responses[13].C13R);
    }
    if(nameString == "C13V"){
        responses[13].C13V = !(responses[13].C13V);
    }
}

function C14(nameString){
    if(nameString == "C14K"){
        responses[14].C14K = !(responses[14].C14K);
    }
    if(nameString == "C14R"){
        responses[14].C14R = !(responses[14].C14R);
    }
    if(nameString == "C14A"){
        responses[14].C14A = !(responses[14].C14A);
    }
    if(nameString == "C14V"){
        responses[14].C14V = !(responses[14].C14V);
    }
}

function C15(nameString){
    if(nameString == "C15K"){
        responses[15].C15K = !(responses[15].C15K);
    }
    if(nameString == "C15A"){
        responses[15].C15A = !(responses[15].C15A);
    }
    if(nameString == "C15R"){
        responses[15].C15R = !(responses[15].C15R);
    }
    if(nameString == "C15V"){
        responses[15].C15V = !(responses[15].C15V);
    }
}

function C16(nameString){
    if(nameString == "C16V"){
        responses[16].C16V = !(responses[16].C16V);
    }
    if(nameString == "C16A"){
        responses[16].C16A = !(responses[16].C16A);
    }
    if(nameString == "C16R"){
        responses[16].C16R = !(responses[16].C16R);
    }
    if(nameString == "C16K"){
        responses[16].C16K = !(responses[16].C16K);
    }
}

function sendResult(){
    var empty = true;
    for(var item in responses){
        for(var sub_item in responses[item]){
            if(empty == true && responses[item][sub_item] == true){
                empty = false;
            }
        }
    }
        
    if(empty == true){
        resultEmpty();
    }else{
        awaitResult();
        calcuteResult(responses);
    }
}

function resultEmpty(){
    var element = document.getElementById("empty-form");
    element.textContent = "O formulário não pode estar em branco!";
}

function awaitResult(){
    var element = document.getElementById("empty-form");
    element.textContent = "Aguarde um momento!";
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

function calcuteResult(resp){

    for(var item in resp){
        for(var sub_item in resp[item]){
            var itemString = String(sub_item);
            if(itemString.includes("V") == true && responses[item][sub_item] == true){
                countVARK.V++;
            }
            if(itemString.includes("A") == true && responses[item][sub_item] == true){
                countVARK.A++;
            }
            if(itemString.includes("R") == true && responses[item][sub_item] == true){
                countVARK.R++;
            }
            if(itemString.includes("K") == true && responses[item][sub_item] == true){
                countVARK.K++;
            }
        }
    }
    console.log(countVARK);
    collectPersonalInformation();
    
    var contentVARK = {Quiz: "Vark", Information: informationForm, Responses: responses, Result: countVARK};
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

    for(var item in countVARK){
        if(countVARK[item] > bigValue){
            bigValue = countVARK[item];
            letterValue = item;
        }else if(countVARK[item] == bigValue && countVARK[item] != 0 && bigValue != 0){
            triggerMulti = true;
        }
    }

    if(triggerMulti == true){
        multimodalVARK();
    }else if(letterValue == "V"){
        visualVARK();
    }else if(letterValue == "A"){
        auralVARK();
    }else if(letterValue == "R"){
        readwriteVARK();
    }else if(letterValue == "K"){
        kinesteticVARK();
    }
}

function visualVARK(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Visual!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=vark.html>VARK</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function auralVARK(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Auditivo!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=vark.html>VARK</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function readwriteVARK(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é de Leitura/Escrita!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=vark.html>VARK</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function kinesteticVARK(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Cinestésica!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=vark.html>VARK</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}

function multimodalVARK(){
    var string = "<div class=container><h3 class=card-title>Seu tipo de aprendizado é Multimodal!</h3></div>" +
    "<div class=container><h5 class=card-title>Para melhor entendimento acesse a aba <a href=vark.html>VARK</a> no menu e verifique as melhores estratégias para aprendizado!<br><br><br><br><br><br><br><br><br><br><br><br>" +
    "</h5></div>";

    document.getElementById("div-external").innerHTML = string;
}