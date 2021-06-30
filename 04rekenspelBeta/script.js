let getalA,getalB,antwoord,jouwAntwoord,goedFout,sound;

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const container = document.getElementById('container');

sound = new Audio();
sound.src = "media/goed.wav"

maakOpgave();

function maakOpgave(){
    getalA = Math.floor(Math.random()*10)+1;
    getalB = Math.floor(Math.random()*10)+1;
    antwoord = getalA*getalB;

    opgaveblad.innerHTML = getalA + " x " + getalB;
}

//execButton.addEventListener('click',checkAntwoord);

input1.addEventListener('keydown',checkAntwoord)

function checkAntwoord(evt){
    if(evt.key == "Enter"){
        jouwAntwoord = input1.value;
        if(antwoord == jouwAntwoord){
            goedFout = true;
            container.style.background = "green";
            sound.src = "media/goed.wav"
        } else {
            goedFout = false;
            container.style.background = "red";
            sound.src = "media/fout.mp3"
        }
        sound.play();
        setTimeout(wachten,2000);
    }
}

function wachten(){
    container.style.background = "aliceblue";
    input1.value = "";
    input1.focus();
    maakOpgave();
    sound.pause();
}