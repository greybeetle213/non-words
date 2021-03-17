function P1buttons(act){
    if(selectedWord != "gone" && turn/2 == Math.round(turn/2)){
        if(turn != 0){
            document.getElementById("p1").innerHTML += " " + act + " " + wordsInUse[selectedWord][1]
            if(act == "+"){
                P1equasion.push([wordsInUse[selectedWord]])
            }else{
                P1equasion[P1equasion.length-1].push(wordsInUse[selectedWord])
            }
        }else{
            document.getElementById("p1").innerHTML += " " + wordsInUse[selectedWord][1]
            P1equasion.push([wordsInUse[selectedWord]]) 
        }
        turn ++
        document.getElementById(String(selectedWord)).remove()
        selectedWord = "gone"
        document.getElementById("p1").style.backgroundColor = "lightgray"
        document.getElementById("p2").style.backgroundColor = "white"
    }
    update()
}
function P2buttons(act){
    if(selectedWord != "gone" && turn/2 != Math.round(turn/2)){
        if(turn != 1){
            document.getElementById("p2").innerHTML += " " + act + " " + wordsInUse[selectedWord][1]
            if(act == "+"){
                P2equasion.push([wordsInUse[selectedWord]])
            }else{
                P2equasion[P2equasion.length-1].push(wordsInUse[selectedWord])
            }
        }else{
            document.getElementById("p2").innerHTML += " " + wordsInUse[selectedWord][1]
            P2equasion.push([wordsInUse[selectedWord]])
        }
        turn ++
        document.getElementById(String(selectedWord)).remove()
        selectedWord = "gone"
        document.getElementById("p2").style.backgroundColor = "lightgray"
        document.getElementById("p1").style.backgroundColor = "white"
    }
    update()
}
function selectWord(id){
    try{
        document.getElementById(String(selectedWord)).style.backgroundColor = ""
    }catch{}
    selectedWord = id
    document.getElementById(String(selectedWord)).style.backgroundColor = "green"
}
function calculateScore(equsion){
    var score = 0
    var subEqasion
    for(i = 0; i != equsion.length; i ++){
        subEqasion = 1
        for(c = 0; c != equsion[i].length; c ++){
            subEqasion *= equsion[i][c][2]
        }
        score += subEqasion
    }
    return(score)
}
function update(){
    if(turn == 10){
        if(!maori){
            document.getElementById("words").innerHTML = '<button onclick="showAnswers()" style="height: 15%; width: 100%; font-size: 3vw;"> Show Answers </button>'
        }else{
            document.getElementById("words").innerHTML = '<button onclick="showAnswers()" style="height: 15%; width: 100%; font-size: 3vw;"> Whakamutunga </button>'
        }
        document.getElementById("p2").style.backgroundColor = "white"
    }
}
function showAnswers(){
    var P1answers = ""
    for(i = 0; i != P1equasion.length; i ++){
        for(c = 0; c != P1equasion[i].length; c ++){
            if(c != 0){
                P1answers += " x "
            }
            P1answers += P1equasion[i][c][1] + "(" + String(P1equasion[i][c][2]).substr(0,4) + ")"
        }
        if(i != P1equasion.length - 1){
            P1answers += " + "
        }
    }
    P1answers += " = " + String(calculateScore(P1equasion)).substr(0,4)
    document.getElementById("p1").innerHTML = P1answers
    
    var P2answers = ""
    for(i = 0; i != P2equasion.length; i ++){
        for(c = 0; c != P2equasion[i].length; c ++){
            if(c != 0){
                P2answers += " x "
            }
            P2answers += P2equasion[i][c][1] + "(" + String(P2equasion[i][c][2]).substr(0,4) + ")"
        }
        if(i != P2equasion.length - 1){
            P2answers += " + "
        }
    }
    P2answers += " = " + String(calculateScore(P2equasion)).substr(0,4)
    document.getElementById("p2").innerHTML = P2answers
}