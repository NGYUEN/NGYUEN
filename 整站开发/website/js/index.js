/**
 * Created by Administrator on 2017-02-15 .
 */
require(["jquery"],function($){
    var $searchInput = $("#search-input");
    $("#search span").on("click",function(){
        alert($searchInput.val());
    });
    $searchInput.on("keypress",function(e){
        if(e.which == 13){
            alert($searchInput.val());
        }
    });
    var nowIdx = 0;
    nowIdx= $(this).index() + 1;
    var that = this;
    $(".arrow.prev").on("click",function(){
        nowIdx--;
        if(nowIdx == -1){
            nowIdx = $("#img img").length - 1;
        }
        changeImg();
    });
    $(".arrow.next").on("click",function(){
        nowIdx++;
        if(nowIdx == $("#img img").length){
            nowIdx = 0;
        }
        changeImg();
    });
    function changeImg(){
        //nowIdx = $(this).index();
        $("#img img").removeClass("selected");
        $("#img img").eq(nowIdx).addClass("selected");
        console.log(nowIdx);
    }
    $("#img").hover(function() {
        clearInterval(that.timer);
    },function(){
        play();
    });
    play();
    function play(){
        that.timer = setInterval(function(){
            $(".next").trigger("click");
        },1000);
    }
});
var oPrev = document.getElementById("clients-prev");
var oNext = document.getElementById("clients-next");
var oImg = document.getElementById("img2");
//var oContainer = document.getElementById("img2-container");

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
