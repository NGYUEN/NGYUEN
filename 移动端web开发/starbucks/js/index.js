/**
 * Created by Administrator on 2017-02-21 .
 */
$(function(){
    var $head = $("#head");
    var bFlag = true;//��ʶλ��true��ʾfixed��false��ʾstatic
    //$(window).on("scroll",function(){
    //    if(bFlag && $(this).scrollTop()>200){
    //
    //    }
    //});
    $(window).on("scroll", function(){
        if(bFlag && $(this).scrollTop() > 200){
            $head.css({
                position: "static"
            });
            bFlag = false;
        }else if(!bFlag && $(this).scrollTop() <= 200){
            $head.css({
                position: "fixed"
            });
            bFlag = true;
        }
    });
});