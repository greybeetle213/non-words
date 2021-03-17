function init(){
    P1equasion = []
    P2equasion = []
    selectedWord = "gone"
    turn = 0
    for(i = 0; i < 10; i ++){
        document.getElementById("words").innerHTML += '<button id="'+i+'" onclick="'+"selectWord("+i+")"+'" style="height: 15%; width: 45%; font-size: 3vw;">'+wordsInUse[i][1]+'</button> '
        if(i/2 != Math.round(i/2)){
            document.getElementById("words").innerHTML += "<p></p>"
        }
    }
    if(!maori){
        document.getElementById("words").innerHTML += "<a href="maori-index.html">Switch to Maori</a>"
    }
}
var xhttp = new XMLHttpRequest() // create a XMLHttpRequest called xhhtp
xhttp.onreadystatechange = function() { // when the XMLHttpRequest becomes ready (the file with the words in it is loaded) run a function
    if (this.readyState == 4 && this.status == 200) {
        allWords = xhttp.responseText // set wordToGuess to be the contense of the file
        allWords = allWords.split("\r\n") // turn the file into a list where the delimters are where there were origanaly line breaks
        wordsInUse = []
        for(i = 0; i < 10; i ++){
            var word = allWords[Math.round(Math.random()*allWords.length - 1)].split(",")
            wordsInUse.push(word)
        }
        init()
    }
}
xhttp.open("GET", "https://raw.githubusercontent.com/greybeetle213/non-words/main/NonWords.csv", true) // set the XMLHttpRequest to be get WordList.csv (a long list of words)
xhttp.send() // send the request

