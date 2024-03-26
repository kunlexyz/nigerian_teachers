var state_d=0;
state_x=0;
state_y=0;

function showStory(event){
	x = event.clientX;
	y = event.clientY;
	state_x = event.clientX;
	state_y = event.clientY;
    state_d=window.scrollY;
    console.log(state_d);

    // el=document.getElementsByClassName('story2')[0];
    // ww=el.offsetWidth;
    // hh=el.offsetHeight;
    // ll=el.offsetLeft;

    // $('#an_element').css({display:'block',width:'150px',height:'50px',top:y+'px',left:x+'px'});
    // $('#an_element').animate({top:10+'px',left:ll+'px',width:ww+'px',height:hh+'px'});

    $('#story_behind').css({display:'block',width:'150px',height:'50px',top:y+'px',left:x+'px'});
    $('#story_behind').animate({top:'0px',left:'0px',width:'100%',height:'100vh'},1000);
    return;
    //testing show
    $('#story_behind').css({display:'block'});
    //c=$('.myBtn:eq(0)').clientY;
    //c=e.clientY;
    
    alert(x);
    // story1 = current body scroll

    //get the button top and left relative to the screen 

    //animate to the top for reading
}

function hideStory(){
    //$('#story_behind').css({display:'none'});
    $('#story_behind').animate({width:'150px',height:'50px',top:state_y+'px',left:state_x+'px'},1000, function(){
        $('#story_behind').css({display:'none'});
    });
    window.scrollTo(0,state_d);
    //bring down story, animate/resize toward the read  more button

    //and disappear
}

function show3_tragedy(event){
	x = event.clientX;
	y = event.clientY;
	state_x = event.clientX;
	state_y = event.clientY;
    state_d=window.scrollY;

    $('#3_tragedy').css({display:'block',width:'150px',height:'50px',top:y+'px',left:x+'px'});
    $('#3_tragedy').animate({top:'0px',left:'0px',width:'100%',height:'100vh'},1000);    
}
function hide3_tragedy(){
    $('#3_tragedy').animate({width:'150px',height:'50px',top:state_y+'px',left:state_x+'px'},1000, function(){
        $('#3_tragedy').css({display:'none'});
    });
    window.scrollTo(0,state_d);
}

var more_story='more';
function showStory_mobile(){
    $('#story_mobile').slideToggle(3000);
    if(more_story=='less'){
        $('#more_mobile_story').html('Read More');
        more_story='more';
    }else{
        $('#more_mobile_story').html('Read Less');
        more_story='less';
    }
}

var _tra='more';
function mob_tragedy(){
    $('#mob_3_tragedy').slideToggle(3000);
    if(_tra=='less'){
        $('#_3tr').html('Read More');
        _tra='more';
    }else{
        $('#_3tr').html('Read Less');
        _tra='less';
    }

}
 //for tab

 var more_tab='more';
 function showStory_tab(){
     $('#story_tab').slideToggle(2000);
     if(more_tab=='less'){
         $('.tab_btn').html('Read More');
         more_tab='more';
     }else{
         $('.tab_btn').html('Read Less');
         more_tab='less';
     }
 }

 var tra_tab='more';
 function tab_tragedy(){
     $('#tab_3_tragedy').slideToggle(2000);
     if(tra_tab=='less'){
         $('.tab2').html('Read More');
         tra_tab='more';
     }else{
         $('.tab2').html('Read Less');
         tra_tab='less';
     } 
 }