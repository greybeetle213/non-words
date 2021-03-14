var xhttp = new XMLHttpRequest() // create a XMLHttpRequest called xhhtp
xhttp.onreadystatechange = function() { // when the XMLHttpRequest becomes ready (the file with the words in it is loaded) run a function
    if (this.readyState == 4 && this.status == 200) {
        allWords = xhttp.responseText // set wordToGuess to be the contense of the file
        allWords = allWords.split("\n") // turn the file into a list where the delimters are where there were origanaly line breaks
    }
}
xhttp.open("GET", "NonWords.csv", true) // set the XMLHttpRequest to be get WordList.csv (a long list of words)
xhttp.send() // send the request

for(i = 10; i != 0; i --){
    document.getElementById("words").innerHTML += '<button style="height: 15%; width: 45%; font-size: 3vw;">asdfghjklzxc</button> '
    if(i/2 != Math.round(i/2)){
        document.getElementById("words").innerHTML += "<p></p>"
    }
}