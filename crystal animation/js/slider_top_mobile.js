// file name: slider_top.js
// date: 24-03-2024

// How to use ai to write code
//https://www.youtube.com/watch?v=rvHI6ZG4Jc4&pp=ygUXaG93IHRvIHVzZSBhaSBpbiBjb2Rpbmc%3D

function slidin_mobile(x,y){
    document.getElementsByClassName('slidis_m')[x];;
    $('.slidis_m').css({'z-index':'1','display':'none'});
    $('.slidis_m:eq('+x+')').css({'z-index':'1','display':'block'})
    //document.getElementsByClassName('slidis_m')[x]
    $('.slidis_m:eq('+y+')').css({'z-index':'2','display':'block','left':'-365px'});

    $('.slidis_m:eq('+y+')').animate({'left':'0px'});
}
//slidin_mobile(0,1);
function test_(){
    if(wheeler==(document.getElementsByClassName('slidis_m').length-1)){
        slidin_mobile(wheeler,0);
        wheeler=0;        
    }else{
        console.log(wheeler);
        slidin_mobile(wheeler,(wheeler+1));
        wheeler++;
    }
    if(wheeler==0){crys_m1_fun();}
    else if(wheeler==1){testW_1();}
    else if(wheeler==2){testW_2();}
}
wheeler=0;
setInterval(function(){test_();},4000)
// setInterval(function(){
//     if(wheeler==(document.getElementsByClassName('slidis_m').length-1)){
//         slidin_mobile(wheeler,0);
//         wheeler=0;
//     }else{
//         console.log(wheeler);
//         slidin_mobile(wheeler,(wheeler+1));
//         wheeler++;
//     }
// },5000);

function testW_1(){
    moveIt(
    'slid_2x1',
    {'margin-left':'-555px'},
    {'margin-left':'20px'},
    {'margin-left':'0px'}
    );
    moveIt(
    'slid_2x2',
    {'margin-left':'555px'},
    {'margin-left':'-20px'},
    {'margin-left':'0px'}
    );
    moveIt(
    'slid_2x3',
    {'margin-left':'-555px'},
    {'margin-left':'20px'},
    {'margin-left':'0px'}
    );
}
function testW_2(){
    moveIt(
    'slid_3x1',
    {'margin-left':'-555px'},
    {'margin-left':'20px'},
    {'margin-left':'0px'}
    );
    moveIt(
    'slid_3x2',
    {'margin-left':'555px'},
    {'margin-left':'-20px'},
    {'margin-left':'0px'}
    );
    moveIt(
    'slid_3x3',
    {'margin-top':'555px'},
    {'margin-top':'-50px'},
    {'margin-top':'-20px'}
    );
}
function crys_m1_fun(){
    document.getElementById('crom4').innerHTML='';
    $('#crom1').css({top:'250px',left:'650px',width:'10px',
    "transform":"rotate(0deg)",rotation:0
    });
    $('#crom1').animate(
        {
            width:'150px',rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
    
    $('#crom3').css({top:'450px',left:'400px',width:'50px',
    "transform":"rotate(0deg)",rotation:0,
    opacity:'0.1'});
    $('#crom3').delay(1000).animate(
        {
            width:'500px',top:'100px',
            left:'250px',opacity:'1',rotation:360
        },
        {duration:1000,step:function(n,f){
    $(this).css({"transform":"rotate("+n+"deg)"});
    }}
    );
    setTimeout(ty4_m,2001);
}
    

crys_m1=0;
crys_m1_txt=`We believe in responsible printing practices and strive to minimize our environmental footprint through eco-friendly materials and processes.`;
function ty4_m(){
    var res = crys_m1_txt.substring(0,crys_m1);
    document.getElementById('crom4').innerHTML=res;
    crys_m1=crys_m1+3;
    if(crys_m1>(crys_m1_txt.length+1)){
        crys_m1=0;
    }else{
        setTimeout(ty4_m,60);
    }
}