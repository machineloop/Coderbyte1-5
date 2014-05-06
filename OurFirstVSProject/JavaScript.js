function LetterChanges(str) {
    var alphabetArray = "abcdefghijklmnopqrstuvwxyza".split("");
    var strArray = str.split("");
    for (var i = 0; i < strArray.length; i = i + 1) {
        var strIndex = alphabetArray.indexOf(strArray[i]);
        if (strIndex !== -1) {
            strArray[i] = alphabetArray[strIndex + 1];
        }
    }
    return strArray.join("");



    
}

var result = LetterChanges("hello*3");
alert(result);

//should get "Ifmmp*3" as a result