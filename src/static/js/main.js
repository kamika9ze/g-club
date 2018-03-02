$(document).ready(function(){
    
    $('#up').click(function(){
        $.scrollTo(0, 400);
        
        return false;
    });
    
//    up();
    
    $('.scrollTo').click(function(){
        $.scrollTo($(this).attr('href'), 400, {offset:-130});
        
        return false;
    });
    
    fixFooter()
    
});

$(window).resize(function(){
    
//    up();

    fixFooter()

});

$(document).scroll(function(){
    
//    up();
    
});

function up()
{
    var up = $('#up');
    up.css('right', ($(window).width()-1090)/2+20);
    if ( $(document).scrollTop()>400 ) {
        up.show();
    } else {
        up.hide();
    }
}

function fixFooter()
{
    var dh = $('body>.container').height() + $('.footer').height() + parseInt($('body>.container').css('padding-top'));
    var wh = $(window).height();
    if ( dh < wh ) {
        $('.footer').css({
            'margin-top': wh-dh
        });
    } else {
        $('.footer').css({
            'margin-top': 0
        });
    }
}