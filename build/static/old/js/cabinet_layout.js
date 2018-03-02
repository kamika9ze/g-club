/**
 * Created by stas on 11.05.16.
 */

$(function(){

    $(".modal-window").find(".modal-close").off("click").on("click", function(){
        $(this).closest(".modal-window").trigger('closeModal');
    });

    /**
     *
     * @param title
     * @param message
     * @param hideTimeout если задано, то через указанное число секунд модалка
     *  будет скрыта
     */
    window.showSuccesPopup = function (title, message, hideTimeout){
        var modal = $(".modal-window.msg_success");
        modal.find(":header").text(title);
        modal.find("#message").text(message);
        modal.show("slow");

        if(hideTimeout){
            setTimeout(function(){
                modal.hide("slow")
            }, hideTimeout*1000);
        }

    };

});