(function(){
    var oBigImg = document.getElementById("big-img");
    var aBigPic = oBigImg.getElementsByTagName("img");
    var oSmallImg = document.getElementById("small-img");
    var aSmallPic = oSmallImg.getElementsByTagName("img");
    var oPrev = document.getElementById("prev");
    var oNext = document.getElementById("next");
    var oInfo = document.getElementById("info");
    var oCurrentPage = document.getElementById("current-page");
    var oContainer = document.getElementById("container");
    var iNow = 0;

    for(var i=0; i<aSmallPic.length; i++){
        aSmallPic[i].className = "small-opacity";
    }
    aSmallPic[iNow].className = "selected";

    oPrev.onmouseover = oNext.onmouseover = function(){
        animate(this, {
            opacity : 100
        });
    };
    oPrev.onmouseout = oNext.onmouseout = function(){
        animate(this, {
            opacity : 0
        });
    };




})();