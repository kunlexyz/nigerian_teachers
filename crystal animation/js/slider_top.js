// file name: slider_top.js
// document.getElementById('slCon').style.width=(innerWidth-20)+"px";
// document.getElementById('con1').style.width=(innerWidth-20)+"px";
// $('.slider_punk').css({width:(innerWidth-20)+"px"});

window.addEventListener("resize", function(){
    document.getElementById('slCon').style.width=(innerWidth-20)+"px";
    document.getElementById('con1').style.width=(innerWidth-20)+"px";
    $('.slider_punk').css({width:(innerWidth-20)+"px"});
})
function moveIt(n,x,y,z){

    $('#'+n).css(x);
    $('#'+n).animate(y,1000);
    $('#'+n).animate(z,1000);
    
}

function mv1(){
//alert('h');

moveIt(
'pi1',
{top:'-555px',left:'-555px'},
{top:'0px',left:'0px'},
{left:'0px'}
);

$('#rola').css({top:'-50px',"width":"150px",
"transform":"rotate(0deg)",rotation:0,
left:'400px'});
$('#rola').delay(1000).animate(
	{top:'390px',"width":"410px",rotation:360},
	{duration:1000,step:function(n,f){
$(this).css({"transform":"rotate("+n+"deg)"});
}}
);

}

function mv1x(){
//alert('h');

moveIt(
'pi1x',
{top:'755px',left:'0px'},
{top:'0px'},
{left:'0px'}
);

$('#rola1x').css({top:'-50px',"width":"1050px",
"transform":"rotate(0deg)",rotation:0,
left:'180px'});
$('#rola1x').animate(
	{top:'130px',"width":"550px",rotation:360},
	{duration:1000,step:function(n,f){
$(this).css({"transform":"rotate("+n+"deg)"});
}}
);

moveIt(
'xli_item_1x',
{top:'130px',left:'-300px',opacity:0.1},
{left:'500px'},
{left:'850px',opacity:0.99}
);

}

function mv2(){
    
    moveIt(
    'pi2',
    {left:'-555px'},
    {top:'0px',left:'0px'},
    {left:'0px'}
    );
    
    $('#xli_2item_1').css({top:'-50px',
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1',left:'700px'});
    $('#xli_2item_1').delay(1000).animate(
        {
            left:'200px',
            top:'65px',opacity:'1',rotation:360},
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );

    moveIt(
        'xli_2item_4',
        {left:'-130px'},
        {left:'500px'},
        {left: '475px'}
        );
    
}
    
    
function mv3(){
    $('#pi3').css({top:'250px',left:'650px',width:'10%',
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#pi3').animate(
        {
            width:'100%',top:'0px',
            left:'0px',opacity:'1',rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
    
    $('#xli_3item_2').css({top:'450px',left:'400px',width:'50px',
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#xli_3item_2').delay(1000).animate(
        {
            width:'500px',top:'100px',
            left:'250px',opacity:'1',rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
}

function mv4(){
    moveIt(
        'pi4',
        {left:'1230px'},
        {left:'-10px'},
        {left: '0px'}
    );
    moveIt(
        'xli_4item_4',
        {top:'-30px'},
        {top:'400px'},
        {top:'385px'}
    );
    // moveIt(
    //     'xli_4item_2',
    //     {top:'-30px'},
    //     {height:'300px'},
    //     {height:'400px'}
    // );
    l=1;
    ty();
}

var co="Is this not the fast that I have chosen: To loose the bonds of wickedness, To undo the heavy burdens, To let the oppressed go free, And that you break every yoke? Is it not to share your bread with the hungry, And that you bring to your house the poor who are cast out; When you see the naked, that you cover him, And not hide yourself from your own flesh? ";
l=1;

function ty(){
var res = co.substring(0,l);
document.getElementById('xli_4item_2').innerHTML=res;
l=l+3;
if(l>(co.length+1)){}else{
setTimeout(ty,24);
}
}
//ty();
function ty2(){
l=0;
ty();}

function ty3(a,b,c){
    var res = a.substring(0,c);
    document.getElementById(b).innerHTML=res;
    c=c+3;
    if(c>(a.length+1)){
        c=0;
    }else{
        setTimeout(function(a,b,c){ty3(a,b,c)},24);
    }
}
    //ty();

function mv5(){
    moveIt(
        'xli_5item_2',
        {width:'80px'},
        {width: '550px'},
        {width: '500px'}
    );
    // moveIt(
    //     'xli_5item_4',
    //     {top:'-30px'},
    //     {top:'400px'},
    //     {top:'385px'}
    // );
    
    $('#xli_5item_4').css({
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#xli_5item_4').animate(
        {
            opacity:'1',rotation:360
        },
        {duration:3000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
}

function mv6(){
    moveIt(
        'pi6',
        {left:'683px', width:'10%'},
        {left:'-10px', width:'50%'},
        {left: '0px', width:'100%'}
    );
    moveIt(
        'xli_6item_2',
        {width:'80px'},
        {width: '550px'},
        {width: '500px'}
    );
    moveIt(
        'xli_6item_1',
        {top:'-30px'},
        {top:'300px'},
        {top:'85px'}
    );
    moveIt(
        'xli_6item_3',
        {top:'-30px'},
        {top:'380px'},
        {top:'345px'}
    );
    
    $('#xli_6item_4').css({
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#xli_6item_4').animate(
        {
            opacity:'1',rotation:360
        },
        {duration:3000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
}
   
crys_1=0;
crys_1_txt='We believe in responsible printing practices and strive to minimize our environmental footprint through eco-friendly materials and processes.';
function crys(){
    document.getElementById('cro4').innerHTML='';
    $('#cro1').css({top:'250px',left:'650px',width:'10%',
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#cro1').animate(
        {
            width:'300px',top:'0px',
            left:'0px',opacity:'1',rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
    
    $('#cro3').css({top:'450px',left:'400px',width:'50px',
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#cro3').delay(1000).animate(
        {
            width:'500px',top:'100px',
            left:'250px',opacity:'1',rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});

    
        // var res_ = crys_1_txt.substring(0,c);
        // document.getElementById(b).innerHTML=res_;
        // crys_1=crys_1+3;
        // if(l>(a.length+1)){
        //     crys_1=0;
        // }else{
        //     setTimeout((a,b,c)=>{ty3(a,b,c)},24);
        // }
    
    }}
    );
    
    setTimeout(ty4,2001);
}
crys();
function ty4(){
    var res = crys_1_txt.substring(0,crys_1);
    document.getElementById('cro4').innerHTML=res;
    crys_1=crys_1+3;
    if(crys_1>(crys_1_txt.length+1)){
        crys_1=0;
    }else{
        setTimeout(ty4,60);
    }
}

var slide_turn = 1;
function sliderTurna(){
    $('.cir').css({background:'#fff'});
    $('.cir:eq('+(slide_turn-1)+')').css({background:'#000'});
    if(slide_turn==1){mv1x();kang('con'+(document.getElementsByClassName('slider_punk').length),'con'+slide_turn);}
    else if(slide_turn==2){mv1();kang('con'+(slide_turn-1),'con'+slide_turn);}
    else if(slide_turn==3){mv2();kang('con'+(slide_turn-1),'con'+slide_turn);}
    else if(slide_turn==4){mv3();kang('con'+(slide_turn-1),'con'+slide_turn);}
    else if(slide_turn==5){mv4();kang('con'+(slide_turn-1),'con'+slide_turn);}
    else if(slide_turn==6){mv5();kang('con'+(slide_turn-1),'con'+slide_turn);}
    else if(slide_turn==7){mv6();kang('con'+(slide_turn-1),'con'+slide_turn);slide_turn = 1;return;}
    slide_turn++
}

var tim =0;
function timeIt(){
    if(tim == 100){
        tim = 0;
        if(innerWidth<481){
            mobile_slida();
        }else if(innerWidth> 480 && innerWidth < 951){
            tab_slida();
        }else{
            sliderTurna();
        }
    }else if(tim == 'off'){
        return;
    }
    $('#cxx').css({width:tim+'%'});
    tim++;
    st = setTimeout(timeIt, 100);
}
//timeIt();

var kan=0;
function kang(x,y){
    //alert('i wok');
    if(kan==0){
        $('.slider_punk').css({"display":"none"});
        $('#'+y).css({"display":"block","z-index":"10"});
        $('#'+x).css({"display":"block","z-index":"1"});
        //kan=1;
    }
    /*
    else{
        $('#'+y).css({"z-index":"10"});
        $('#'+x).css({"z-index":"1"});
        kan=0;
    }
    */
}

st = setTimeout(timeIt, 10000);
function rager(x){
    //alert('hello');
    tim=0;
    $('#cxx').css({width:tim+'%'});
    clearTimeout(st);
    slide_turn = x;
    sliderTurna();
    st = setTimeout(timeIt, 20000);
}
//$(document).ready(function(){rager(1);});


var im='';
for(i=1;i<7;i++){
    im+='<img class="m_sl" src="./images/m_p'+i+'.png" >'
}
$('#m_slide').html(im);
turn_m = 0;
function mobile_slida(){
    turn = turn_m;
if(turn_m==0){
    turn=document.getElementsByClassName('m_sl').length;
}
if(turn_m%2==0){
    $('.m_sl:eq('+(turn-1)+')').css({"z-index":"1"});
    $('.m_sl:eq('+(turn_m)+')').css({"z-index":"10",opacity:0.0,display:"block"});
    $('.m_sl:eq('+(turn_m)+')').animate({opacity:1},1000,function(){
        $('.m_sl:eq('+(turn-1)+')').css({display:"none",opacity:0});
    });
}else{   
    $('.m_sl:eq('+(turn-1)+')').css({"z-index":"1"}); 
    $('.m_sl:eq('+(turn_m)+')').css({
        "z-index":"10","transform":"rotate(0deg)",rotation:0,
    opacity:'0.1',width:"10%",left:"40%"});
    $('.m_sl:eq('+(turn_m)+')').animate(
        {
            opacity:'1',width:"100%",left:"0%",rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
    $('.m_sl:eq('+(turn-1)+')').delay(3000).fadeOut(2000);
}
    
    console.log(turn_m,turn);
    turn_m++;
    if(turn_m>=document.getElementsByClassName('m_sl').length){
        turn_m=0
    }
}

var im='';
for(i=1;i<7;i++){
    im+='<img class="tab_sl" src="./images/t_p'+i+'.png" >'
}
$('#tab_slide').html(im);
turn_tab = 0;
function tab_slida(){
    turn = turn_tab;
if(turn_tab==0){
    turn=document.getElementsByClassName('m_sl').length;
}
if(turn_tab%2==0){
    $('.tab_sl:eq('+(turn-1)+')').css({"z-index":"1"});
    $('.tab_sl:eq('+(turn_tab)+')').css({"z-index":"10",opacity:0.0,display:"block"});
    $('.tab_sl:eq('+(turn_tab)+')').animate({opacity:1},1000,function(){
        $('.tab_sl:eq('+(turn-1)+')').css({display:"none",opacity:0});
    });
}else{   
    $('.tab_sl:eq('+(turn-1)+')').css({"z-index":"1"}); 
    $('.tab_sl:eq('+(turn_tab)+')').css({
        "z-index":"10","transform":"rotate(0deg)",rotation:0,
    opacity:'0.1',width:"10%",left:"40%"});
    $('.tab_sl:eq('+(turn_tab)+')').animate(
        {
            opacity:'1',width:"100%",left:"0%",rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );    
    $('.tab_sl:eq('+(turn-1)+')').delay(3000).fadeOut(2000);
}
    
    console.log(turn_tab,turn);
    turn_tab++;
    if(turn_tab>=document.getElementsByClassName('tab_sl').length){
        turn_tab=0
    }
}