//window.document.body.
//use ele.scroll

//document.getElementsByClassName('slida')[2].scrollIntoView(true);
//document.body.scrollWidth
//alert('hello');
var slida = 0;
slida_len = 0;
function myfunc2(){
	s_l = document.getElementsByClassName('slida').length;
	if(slida_len==s_l)
	{slida = 0;slida_len = 0;}
	
	$('#sgallery').css({'width':(s_l*103)+'vw'});
	//document.getElementsByClassName('slida')[slida].scrollIntoView(false);
	$('#sgallery').animate({'margin-left': -slida+'vw'}, 1000);	
	slida += 101;
	slida_len++;
	//alert(slida);
	
	setTimeout(myfunc2,10000);
}

myfunc2();

function sho(x){
//alert('hey');
	$('.clist_writeup').slideUp();
	$('.clist_writeup:eq('+x+')').slideDown();
	
	$('.exp').html("+");
	$('.exp:eq('+x+')').html("_");
	
}

var menu_1 = '                                                                                 <img class="coI" src="images/Nigeria Teachers LOGO.jpg" style="width:170px;border-radius:20px; margin:auto;margin-left:10px;"  />                                                                                                                  <div class="menu1"><div class="bull"></div>Who We Are</div>                                                                                                                                                <div class="menu1" onclick="">                                    <div class="bull"></div>Contact Us                                    </div>                                                                                                         <!--  <a href="diagram.html">                                    <div class="menu1" onclick=""><div class="bull"></div>FAQs</div>                                    </a>                                                                   <a href="./about.html">                                    <div class="menu1" onclick=""><div class="bull"></div>Upcoming Events</div>                                    </a>    -->                                                                                                             <div class="menu1" onclick="showViewTab(\'more\')"><div class="bull"></div>Credits</div>                                                                                                           		<div class="menu1" onclick="showSeti()"><div class="bull"></div>Our Services</div>		                                  ';
menu_2 ='';


//......

var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
}

function inner_(y,z)
{
	return '<div class="menu1" onclick="pla2(\''+y+'\')">\
	<div class="bull"></div>'+z+'</div>';	
}

var bac = '<div onClick="bak()" ><div class="bull" style="color:#FFF;font-size: 30px;">&laquo;</div> Back | Home </div>';
ninja = '<div>'+
inner_('https://www.youtube.com/watch?v=6AAeTooFp1k','Chapter 1')+
inner_('https://www.youtube.com/watch?v=LPYjzT_JzOc','Chapter 2')+
inner_('https://www.youtube.com/watch?v=EIzz3zdoKdQ','Chapter 3')+
inner_('https://www.youtube.com/watch?v=5by2ENjfB90','Pray This Dangerous prayers everyday in 2021')+'</div>';

function bak(){	
	document.getElementById('lay_1').style.display = "block";
	document.getElementById('lay_2').style.display = "none";
	document.getElementById('lay_3').style.display = "none";
	document.getElementById("inn").innerHTML=menu_1;
	closeNav();
}

document.getElementById("inn").innerHTML=menu_1;

function pla2(x){
	var video2='\
<div style="text-align:center"> \
  <button onclick="playPause()">Play/Pause</button> \
  <button onclick="makeBig()">Big</button>\
  <button onclick="makeSmall()">Small</button>\
  <button onclick="makeNormal()">Normal</button>\
  <br><br>\
  <video id="video1" width="420">\
    <source src="'+x+'" type="video/mp4">\
    <source src="mov_bbb.ogg" type="video/ogg">\
    Your browser does not support HTML5 video.\
  </video>\
</div> ';
//http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1
	video ='<iframe class="ifr" \
src="'+x+'?autoplay=1">\
</iframe>';
	document.getElementById('lay_2').innerHTML=video;
	
	document.getElementById('lay_1').style.display = "none";
	document.getElementById('lay_2').style.display = "block";

	myVideo = document.getElementById("video1");
	//document.getElementById('lay_2').scrollIntoView(true);
	closeNav();	
}
function play_local(x,y){
	lOCKER = lOCKER.toUpperCase();
	if(lOCKER == 'KUNLE' || lOCKER == 'ISRAEL' || lOCKER == 'ISREAL')
	{
	var video='\
<div style="text-align:center"> \
  <button onclick="playPause()">Play/Pause</button> \
  <button onclick="makeBig()">Big</button>\
  <button onclick="makeSmall()">Small</button>\
  <button onclick="makeNormal()">Normal</button>\
  <br><br>\
  <video id="video1" width="420">\
    <source src="'+x+'" type="video/mp4">\
    <source src="mov_bbb.ogg" type="video/ogg">\
    Your browser does not support HTML5 video.\
  </video>\
</div> ';
//https://youtu.be/JoMw4TQkT1Y

	document.getElementById('lay_2').innerHTML=video;
	
	document.getElementById('lay_1').style.display = "none";
	document.getElementById('lay_2').style.display = "block";
	document.getElementById('lay_3').style.display = "none";

	myVideo = document.getElementById("video1");
	//document.getElementById('lay_2').scrollIntoView(true);
	document.getElementById("inn").innerHTML=bac + y;
	}
	else{
	document.getElementById('lay_1').style.display = "none";
	document.getElementById('lay_2').style.display = "none";
	document.getElementById('lay_3').style.display = "block";
	}
	lockerX =x;
	lockerY =y;
	play = 'local';
	
}

function unlocker(){
	lOCKER = document.getElementsByTagName('input')[0].value;
	//alert(lOCKER);
	if(play == 'local')
	{
		play_local(lockerX,lockerY);
	}else{
		pla(lockerX,lockerY);
	}
}

/*
var pas = document.getElementsByClassName('input')[0];
pas.addEventListener("onkeyup", function(){ unlocker(); });
*/

function sub(){
	document.getElementById('myform').submit();
}