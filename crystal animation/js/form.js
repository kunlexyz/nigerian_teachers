var current_botini =0;
var slide_form = 0;
function dona(x,y){
    //alert('hello');
    $('.botini:eq('+current_botini+')').removeClass("btn_green_re");
    $('.botini:eq('+x+')').addClass("btn_green_re");
    $('#amount').html(y);
    current_botini=x;
}

//$('#slide_con_2').css({'width':(555*3)+'px'});
function sli_form(x){
    $('.form_con:eq('+slide_form+')').slideUp(1000);
    $('.form_con:eq('+x+')').slideDown(1000);
    slide_form=x;
    //tt=$('#slide_con').scroll();
    //window.scrollTo(0,tt);
    $('#slide_con')[0].scrollIntoView(true);
}