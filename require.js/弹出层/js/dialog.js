/**
 * Created by Administrator on 2017-02-13 .
 */
require.config({
    paths : {
        "jquery" : "jquery-1.12.4"
    }
});
define(["jquery"],function($){
    function Dialog(){
        this.defaultSettings = {
            width : 400,
            height : 300,
            title : "弹出框",
            content : ""
        };
        this.container = $('<div class="dialog-container"></div>');
        this.mask = $('<div class="dialog-mask"></div>');
        this.box = $('<div class="dialog-box"></div>');
        this.title = $('<div class="dialog-title">');
        this.item = $('<div class="dialog-title-item"></div>');
        this.close = $('<div class="dialog-title-close">[X]</div>');
        this.content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open = function(options){
        $.extend(this.defaultSettings,options);
        this.item.html(this.defaultSettings.titie);
        this.content.css({
            height : this.defaultSettings.height - 30
        });
        if(this.defaultSettings.content) {
            this.content.load(this.defaultSettings.content);
        }
        this.box.css({
            width : this.defaultSettings.width,
            height : this.defaultSettings.height
        });
        this.title.append(this.item).append(this.close);
        this.box.append(this.title).append(this.content);
        this.container.append(this.mask).append(this.box);
        $('body').append(this.container);

        var that = this;
        this.close.on("click", function(){
            that.closeDialog();
        });
    };
    Dialog.prototype.closeDialog = function(){
        this.container.remove();
    };
    return Dialog;
});