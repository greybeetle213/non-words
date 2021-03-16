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
}
function P2buttons(act){
    if(selectedWord != "gone" && turn/2 != Math.round(turn/2)){
        if(turn != 1){
            document.getElementById("p2").innerHTML += " " + act + " " + wordsInUse[selectedWord][1]
            if(act == "+"){
                P2equasion.push([wordsInUse[selectedWord]])
            }else{
                P2equasion[P1equasion.length-1].push(wordsInUse[selectedWord])
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