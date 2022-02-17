var responses = {1: {C01K: false, C01A: false, C01R: false, C01V: false}, 2: {1: "", 2: "", 3: "", 4: ""}, 3: {1: "", 2: "", 3: "", 4: ""}, 
4: {1: "", 2: "", 3: "", 4: ""}, 5: {1: "", 2: "", 3: "", 4: ""}, 6: {1: "", 2: "", 3: "", 4: ""}, 7: {1: "", 2: "", 3: "", 4: ""}, 
8: {1: "", 2: "", 3: "", 4: ""}, 9: {1: "", 2: "", 3: "", 4: ""}, 10: {1: "", 2: "", 3: "", 4: ""}, 11: {1: "", 2: "", 3: "", 4: ""}, 
12: {1: "", 2: "", 3: "", 4: ""}, 13:{1: "", 2: "", 3: "", 4: ""}, 14: {1: "", 2: "", 3: "", 4: ""}, 15:{1: "", 2: "", 3: "", 4: ""}, 16: {1: "", 2: "", 3: "", 4: ""}};

function collectResponses(){
    var otherCheckbox = document.getElementById("C01K");

    console.log(otherCheckbox);
}

collectResponses();

function test(component){
    var nameObject = component.getAttribute("name");
    var nameString = String(nameObject);

    if(nameString.includes("01") == true){
        if(nameString == "C01K"){
            responses[1].C01K = !(responses[1].C01K);
            console.log(responses[1]);
        }
        if(nameString == "C01A"){
            responses[1].C01A = !(responses[1].C01A);
            console.log(responses[1]);
        }
        if(nameString == "C01R"){
            responses[1].C01R = !(responses[1].C01R);
            console.log(responses[1]);
        }
        if(nameString == "C01V"){
            responses[1].C01V = !(responses[1].C01V);
            console.log(responses[1]);
        }
    }else{
        console.log("false");
    }
}