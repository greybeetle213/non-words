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
        if(maori){
            document.getElementById("instructions").innerHTML = "Kaitākaro 1: Whiriwhiritia te kupu"
        }else{
            document.getElementById("instructions").innerHTML = "Player 2 Choose a word"
        }
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
        if(maori){
            document.getElementById("instructions").innerHTML = "Kaitākaro 1: Whiriwhiritia te kupu"
        }else{
            document.getElementById("instructions").innerHTML = "Player 1: Choose a word"
        }
    }
    update()
}
function selectWord(id){
    try{
        document.getElementById(String(selectedWord)).style.backgroundColor = ""
    }catch{}
    selectedWord = id
    document.getElementById(String(selectedWord)).style.backgroundColor = "green"
    if(maori){
        document.getElementById("instructions").innerHTML = "Whiriwhiritia te paheko ([+] or [x])"
    }else{
        document.getElementById("instructions").innerHTML = "Press the [+] or [x] button or change your word selection"
    }
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
            document.getElementById("words").innerHTML = '<button onclick="showAnswers()" style="height: 15%; width: 100%; font-size: 3vw;"> Show Totals </button>'
        }else{
            document.getElementById("words").innerHTML = '<button onclick="showAnswers()" style="height: 15%; width: 100%; font-size: 3vw;"> Tatau </button>'
        }
 /*       if(maori){
            document.getElementById("instructions").innerHTML = "Whiriwhirita [Tatau], kia kitea ngā tatau!"
        }else{
            document.getElementById("instructions").innerHTML = "Select [Show Totals] to see who won the round!"
        } */
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
            P1answers += P1equasion[i][c][1] + "(" + String(P1equasion[i][c][2]) + ")"
        }
        if(i != P1equasion.length - 1){
            P1answers += " + "
        }
    }
    P1answers += " = " + String(calculateScore(P1equasion))
    document.getElementById("p1").innerHTML = P1answers
    
    var P2answers = ""
    for(i = 0; i != P2equasion.length; i ++){
        for(c = 0; c != P2equasion[i].length; c ++){
            if(c != 0){
                P2answers += " x "
            }
            P2answers += P2equasion[i][c][1] + "(" + String(P2equasion[i][c][2]) + ")"
        }
        if(i != P2equasion.length - 1){
            P2answers += " + "
        }
    }
    P2answers += " = " + String(calculateScore(P2equasion))
    document.getElementById("p2").innerHTML = P2answers
    if(!maori){
        document.getElementById("words").innerHTML = '<button onClick="init();" style="height: 15%; width: 100%; font-size: 3vw;">Next Round</button>'
    }else{
        document.getElementById("words").innerHTML = '<button onClick="init()" style="height: 15%; width: 100%; font-size: 3vw;">Haere Tonu</button>'
    }
    if(calculateScore(P1equasion) > calculateScore(P2equasion)){
        document.getElementById("p1").style.backgroundColor = "lightgreen"
        document.getElementById("p2").style.backgroundColor = "pink"
        P1score += 1
    }else{
        document.getElementById("p2").style.backgroundColor = "lightgreen"
        document.getElementById("p1").style.backgroundColor = "pink"
        P2score += 1
    }
    document.getElementById("instructions").innerHTML = " " 
    Round += 1
    if(Round == 5 && !maori){
        if(P1score > P2score){
            document.getElementById("words").innerHTML = '<span style="color: green; font-size: xx-large;">Player one wins the game! <button onclick="window.location.reload()">Play Again</button><button href="https://jenniferhay.github.io/ororeo/">Go To Instruction Page</button></span>'
        }
        if(P1score < P2score){
            document.getElementById("words").innerHTML = '<span style="color: green; font-size: xx-large;">Player two wins the game! <button onclick="window.location.reload()">Play Again</button><button href="https://jenniferhay.github.io/ororeo/">Go To Instruction Page</button></span>'
        }
    }
    if(Round == 5 && maori){
        if(P1score > P2score){
            document.getElementById("words").innerHTML = '<span style="color: green;  font-size: xx-large;">Ko kaitākaro 1 te toa!  <button onclick="window.location.reload()">Tākaro Anō</button><button href="https://jenniferhay.github.io/ororeo/">Hokia ki te Whārangi Tohutohu</button></span>'
        }
        if(P1score < P2score){
            document.getElementById("words").innerHTML = '<span style="color: green; font-size: xx-large;">Ko kaitākaro 2 te toa! <button onclick="window.location.reload()">Tākaro Anō</button><button href="https://jenniferhay.github.io/ororeo/">Hokia ki te Whārangi Tohutohu</button> </span>'
        }
    }
}
