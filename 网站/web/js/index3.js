var oImg = document.getElementById("img");
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var speed = 5;
oImg.innerHTML += oImg.innerHTML;
oImg.style.width = oImg.offsetWidth * 2 + 'px';
setInterval(function(){
    oImg.style.left = oImg.offsetLeft - speed + "px";
    if(oImg.offsetLeft <= -oImg.offsetWidth / 2){
        oImg.style.left = 0
    }
    if(oImg.offsetLeft > 0){
        oImg.style.left = -oImg.offsetWidth / 2 + "px";
    }
},100);
oPrev.onclick = oNext.onclick = function(){
    if(this == oPrev){
        speed = 5;
    }else{
        speed = -5;
    }
};