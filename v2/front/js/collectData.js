var responses = {
1: {C01K: false, C01A: false, C01R: false, C01V: false}, 2: {C02V: false, C02A: false, C02R: false, C02K: false}, 
3: {C03K: false, C03V: false, C03R: false, C03A: false}, 4: {C04K: false, C04A: false, C04V: false, C04R: false}, 
5: {C05A: false, C05V: false, C05K: false, C05R: false}, 6: {C06K: false, C06R: false, C06V: false, C06A: false}, 
7: {C07K: false, C07A: false, C07V: false, C07R: false}, 8: {C08R: false, C08K: false, C08A: false, C08V: false}, 
9: {C09R: false, C09A: false, C09K: false, C09V: false}, 10: {C10K: false, C10V: false, C10R: false, C10A: false}, 
11: {C11V: false, C11R: false, C11A: false, C11K: false}, 12: {C12A: false, C12R: false, C12V: false, C12K: false}, 
13:{C13K: false, C13A: false, C13R: false, C13V: false}, 14: {C14K: false, C14R: false, C14A: false, C14V: false},
15:{C15K: false, C15A: false, C15R: false, C15V: false}, 16: {C16V: false, C16A: false, C16R: false, C16K: false}};

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
    console.log(responses);
}