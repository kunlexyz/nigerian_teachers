function hidME(){
	document.getElementById('result').style.display='none';
	var colo=document.getElementsByClassName('swi')[1];
	colo.style.color='#000';
	colo.style.backgroundColor='#FF0';
	
	var colo=document.getElementsByClassName('swi')[0];
	colo.style.color='#FF0';
	colo.style.backgroundColor='#000';}
function showME(){
	document.getElementById('result').style.display='inline-block';
	var colo=document.getElementsByClassName('swi')[0];
	colo.style.color='#000';
	colo.style.backgroundColor='#FF0';
	
	var colo=document.getElementsByClassName('swi')[1];
	colo.style.color='#FF0';
	colo.style.backgroundColor='#000';
	}

function startin(){
	document.getElementsByClassName('instr')[0].style.display='none';
	document.getElementById('content').style.display='block';
	prevo();cba.innerHTML=ab[queNo].innerHTML;
	emptyAnsbox();
}

//..Prevo
function prevo(){
	
	if(queNo==0){
	
	win=window.innerWidth;
	$('#slider').css({left:(-(win+3)+'px'),"width":(win+"px"),"display":"block"});
	
	document.getElementById('slider').innerHTML='you are on the first page';
	$('#slider').animate({left:(0+'px')},1300,
	function(){
	$('#slider').delay(1500).animate({left:(-(win+3)+'px')},1300);
	//$('#slider').delay(5000).css({"display":"none","left":(1+"px")});
		
	//emptyAnsbox();
	});
	
		}else{
	focuso=0;
	//document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	var tto2=document.getElementsByClassName('qcontainer')[(queNo-1)];
	tto3=document.getElementsByClassName('qcontainer')[queNo];
	win=window.innerWidth;
	$('#slider').css({left:(-(win+3)+'px'),"display":"block"});
	
	queNo--;
	
	
	document.getElementById('slider').innerHTML=tto2.innerHTML;
	$('#slider').animate({"left":(1+"px")},1300,
	function(){
	$('#slider').css({"display":"none","left":(1+"px")});
	tto3.style.display='none';
	tto2.style.display='block';
	document.getElementById('slider').innerHTML='';
		
	cba.innerHTML=ab[queNo].innerHTML;
document.getElementsByClassName('bar2')[0].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
document.getElementById('score').innerHTML='';

	emptyAnsbox();	});
	
}
}


//.... nexT 3
function nexT(){
	if(queNo==document.getElementsByClassName('qcontainer').length-1){queNo=document.getElementsByClassName('qcontainer').length-1;
	
	
	win=window.innerWidth;
	$('#slider').css({"left":(win+"px"),"width":(win+"px"),"display":"block"});
	
	document.getElementById('slider').innerHTML='you are on the last page';
	$('#slider').animate({left:(0+'px')},1300,
	function(){
	$('#slider').delay(1500).animate({left:((win+3)+'px')},1300);
	//$('#slider').delay(5000).css({"display":"none","left":(1+"px")});
		
	//emptyAnsbox();
	});
	}else{
	focuso=0;
	//document.getElementsByClassName('qcontainer')[queNo].style.display='none';
	var tto2=document.getElementsByClassName('qcontainer')[queNo];
	tto3=document.getElementsByClassName('qcontainer')[(queNo+1)];
	win=window.innerWidth;
	$('#slider').css({left:(0+'px'),"width":(win+"px"),"display":"block"});
	tto2.style.display='none';
	queNo++;
	tto3.style.display='block';
	
	
	document.getElementById('slider').innerHTML=tto2.innerHTML;
	$('#slider').animate({left:(-(win+3)+'px')},1300,
	function(){
	$('#slider').css({"display":"none","left":(1+"px")});
	document.getElementById('slider').innerHTML='';
		
	cba.innerHTML=ab[queNo].innerHTML;
document.getElementsByClassName('bar2')[0].innerHTML='No. '+(queNo+1)+' '+'('+mark[queNo].length+'marks)';
document.getElementById('score').innerHTML='';

	emptyAnsbox();	});
	
}}