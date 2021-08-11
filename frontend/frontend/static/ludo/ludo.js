$stepcount = document.getElementsByClassName("step");
 for(i=0; i<$stepcount.length; i++){
     $stepcount[i].innerHTML = "";
 }

function shuffle()
{
    const img=document.getElementById("img");
    let randomNumber=Math.floor(Math.random() * 6) +1 ;
    img.setAttribute("src" , `${randomNumber}.png`);
}

function anim()
{
    setTimeout(shuffle,500);
    const img = document.getElementById("img");
    img.setAttribute("src","rollingdice.gif");
}