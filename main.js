x=0
y=0
drawrect=""
drawcircle=""

function setup(){

canvas=createCanvas(900,600);
canvas.center
}
var speechrecognition= window.webkitSpeechRecognition;
var recognition=new speechrecognition;

function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start()
}
recognition.onresult=function(event)
{console.log (event);
var content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="The speech has been recognised as: "+content;
if (content=="Circle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
drawcircle="set"

}
if (content=="Rectangle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
drawrect="set"

}

}
function draw(){

    if (drawcircle=="set"){
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        drawcircle=""
    }
    if (drawrect=="set"){
        length=Math.floor(Math.random()*250)
        rect(x,y,length,100)
        drawrect=""
    }
        


}

