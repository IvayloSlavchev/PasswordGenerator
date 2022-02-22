let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lowerCase(){
    let passwordLength = 16;
    let password = " ";
    alpha = alpha.toLowerCase();
    for(let i = 0; i < passwordLength; i++){
        let lowRand = Math.floor(Math.random() * alpha.length);
        password += alpha.substring(lowRand, lowRand + 1);
    }
    document.getElementById("lowerCase").value = password;
}
function upperCase(){
    let password = " ";
    let passLength = 16;
    alpha = alpha.toUpperCase();
    for(let i = 0; i < passLength; i++){
        upRand = Math.floor(Math.random() * alpha.length);
        password += alpha.substring(upRand, upRand + 1);
    }
    document.getElementById("upperCase").value = password;
}
function SymbolsCase(){
    let symbo = "!@#$%^&*(){}-,.";
    let sybLenght = 16;
    let password = " ";
    for(let i = 0; i < sybLenght; i++){
        let symbRand = Math.floor(Math.random() * symbo.length);
        password += symbo.substring(symbRand, symbRand + 1)
    }
    document.getElementById("SymbolsCase").value = password;
}
function everyElement(){
    let everything = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}-,.1234567890";
    everything = everything.toLowerCase();
    let lenght = 16;
    let password = " ";
    for(let i = 0; i < lenght; i++){
        let evePass = Math.floor(Math.random() * everything.length);
        password += everything.substring(evePass, evePass + 1);
    }
    document.getElementById("EverythingCase").value = password;
}
function showTime(){
    let dateNow = new Date();
    let showHour = dateNow.getHours();
    let showMinutes = dateNow.getMinutes();
    let sum = showHour + ":" + showMinutes;
    document.querySelector("#timeNow").value = sum;
}
function generate(){
    lowerCase();
    upperCase();
    SymbolsCase();
    everyElement();
    showTime();
}

















