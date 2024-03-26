//reverse.js

ReachedMaxScroll=0;
function myFunction() {
  var DivElmnt = document.getElementById("myDIV");
  var element = document.getElementById("myDIV");
  /*
  console.log('work');
  var element = document.getElementById("myDIV");
  element.scrollLeft += 2;
	*/
	if (!ReachedMaxScroll) {
    /*
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;
    */
		element.scrollLeft += 2;

		ReachedMaxScroll = DivElmnt.scrollLeft >= (DivElmnt.scrollWidth - DivElmnt.offsetWidth);
	}
	else {
		ReachedMaxScroll = (DivElmnt.scrollLeft == 0)?false:true;
		/*
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop--;
    */
    element.scrollLeft -= 2;
	}
  //element.scrollTop += 10;
}
var myVar = setInterval(myFunction,50);
function sc(){
  document.getElementById("scro").innerHTML = document.getElementById("myDIV").scrollLeft+'-w-'+document.getElementById("my_div_inn").offsetWidth;
  document.getElementById("myDIV2").scrollLeft = 500;
}

// for the scrolling divs
/*
var item ='       <div class="mbox">\
        <table style="width:100%;"><tr><td class="mbox2"\
        valign="center">\
          <img src="./image/itemA.jpg">\
        </td></tr></table>\
        <div>Shoe</div>\
        Shoe\
        N500\
      </div>';
	  */
item = '<img src="./image/acting1.jpg" class="imgScro" >';
var item2=['ng1.JPG','ng2.JPG','ng3.JPG','ng4.JPG','ng5.JPG','ng6.jpeg','ng7.JPG'];
function scrol_item(){
  var it = '';
  for(i=0;i<item2.length;i++){
    it += '<img src="./image/'+item2[i]+'" class="imgScro" >';
  }
  document.getElementById('my_div_inn').innerHTML=it;
  document.getElementById('my_div_inn').style.width=((250*item2.length)+4)+'px';
}
scrol_item();

//convert scrol_item to a reusable function/code
//it contain 3 parameter array, element and length of the element
function scr_(arr,ele,len){
  var it = '';
  for(i=0;i<arr.length;i++){
    it += '<img src="./image/'+item2[i]+'" class="imgScro" >';
  }
  document.getElementById(ele).innerHTML=it;
  document.getElementById(ele).style.width=((len*arr.length)+4)+'px';	
}

//using scr_() for the second scroll element
//scr_(item2,'my_div_inn2',250);

//reverse 2
window.onload = function(){

// for the scrolling divs
var ite =[];

function fil_item(){
  var it = '';
  for(i=0;i<10;i++){
    it += item;
  }
  document.getElementById('my_div_inn2').innerHTML=it;
}
//fil_item();

//reusable function
function myFun(ele,rea) {
  var DivElmnt = document.getElementById(ele);
  var elem = document.getElementById(ele);
  
    if (!rea) {
        elem.scrollLeft += 2;
        rea = elem.scrollLeft >= (elem.scrollWidth - elem.offsetWidth);
    }
    else {
        rea = (elem.scrollLeft == 0)?false:true;
        elem.scrollLeft -= 2;
    }
    setTimeout(function(){myFun(ele,rea)},50);
}

//document.getElementById("myDIV2").scrollLeft = document.getElementById("myDIV2").scrollWidth-document.getElementById("myDIV2").offsetWidth+1;
var Rea_=0;
//setTimeout(function(){myFun("myDIV2",Rea_)},50);

//mini slide from mgsconcept index2.html


/*codes for mini Slidersxx*/
var pic4=['ng1.JPG','ng2.JPG','ng3.JPG','ng4.JPG','ng5.JPG','ng6.jpeg','ng7.JPG'];
p2Wheel=0;
var pic2=['sa1.jpg','sa2.jpg','sa3.jpg','sa4.jpg','sa5.jpg','sa6.jpg','sa7.jpg','sa8.jpg'];
function slideMini(){
	//console.log(p2Wheel);
	var holda1='<div class="boxAdsC"><img src="image/'+pic2[p2Wheel]+'" id="adx1" class="boxAdsImage" style="margin:0px" />';
	var p2x=p2Wheel+1;
	if(p2x==pic2.length){p2x=0;}
	var holda2='<img src="image/'+pic2[p2x]+'" class="boxAdsImage" /></div>';
	document.getElementById('boxAds1').innerHTML=holda1+holda2;
	$('#adx1').animate({'margin-left': '-33%'}, 3000);
	p2Wheel++;
	if(p2Wheel==pic2.length){p2Wheel=0;}
	setTimeout(slideMini,6000);
}slideMini();


p4=1;
function sl_4(){
	//console.log(p2Wheel);
	var holda1='<div class="boxAdsC"><img src="image/'+pic2[p4]+'" id="mis" class="boxAdsImage" style="margin:0px" />';
	var p2x=p4+1;
	if(p2x==pic2.length){p2x=0;}
	var holda2='<img src="image/'+pic2[p2x]+'" class="boxAdsImage" /></div>';
	document.getElementById('boxAds3').innerHTML=holda1+holda2;
	$('#mis').animate({'margin-left': '-33%'}, 3000);
	p4++;
	if(p4==pic2.length){p4=0;}
	setTimeout(sl_4,6000);
}sl_4();
	
p5=1;
function sl_5(){
	//console.log(p2Wheel);
	var holda1='<div class="boxAdsC"><img src="image/'+pic2[p5]+'" id="mis5" class="boxAdsImage" style="margin:0px" />';
	var p2x=p5+1;
	if(p2x==pic2.length){p2x=0;}
	var holda2='<img src="image/'+pic2[p2x]+'" class="boxAdsImage" /></div>';
	document.getElementById('boxAds5').innerHTML=holda1+holda2;
	$('#mis5').animate({'margin-left': '-33%'}, 3000);
	p5++;
	if(p5==pic2.length){p5=0;}
	setTimeout(sl_5,6000);
}//sl_5();

p6=1;
function sl_6(){
	//console.log(p2Wheel);
	var holda1='<div class="boxAdsC"><img src="image/'+pic2[p6]+'" id="mis6" class="boxAdsImage" style="margin:0px" />';
	var p2x=p6+1;
	if(p2x==pic2.length){p2x=0;}
	var holda2='<img src="image/'+pic2[p2x]+'" class="boxAdsImage" /></div>';
	document.getElementById('boxAds6').innerHTML=holda1+holda2;
	$('#mis6').animate({'margin-left': '-33%'}, 3000);
	p6++;
	if(p6==pic2.length){p6=0;}
	setTimeout(sl_6,6000);
}//sl_6();	

//the following code is for the top-most slider and it only display on desktop
//slide('#top3') and 4
vx = 0;
pic = [
	'Tree b3-.jpg',
	'ratolf.png',
	'ratolf2.png',
	'River 444-76643.jpg',
	'nature-grass-plant-field-barley 2.jpg',
	'ratolf4.png',
];
var picLen = 0;
picLen_34=0;
function sl3(){
	var px = '<img src="image/'+pic[picLen_34]+'" class="imgFull" />';	
	picLen_x_34=picLen_34+1;
	if(picLen_x_34>=pic.length){picLen_x_34=0;}
	var px2 = '<img src="image/'+pic[picLen_x_34]+'" class="imgFull" />';
	// console.log(picLen_34);
	// console.log(picLen_x_34);
	$('#top3').html(px);
	$('#top4').html(px2);	
	$('#top3').css({"opacity":"100%"});	
	$('#top3').animate({"opacity":"0%"},2000);	
	
	picLen_34++;
	if(picLen_34>=pic.length){picLen_34=0;}
	setTimeout(sl3,6000);
	//
	/*
	document.getElementById('top3').innerHTML=px;
	if(picLen_34==pic.length){picLen_34=0;}
	setTimeout('sl4()',4000);}
function sl4(){$('#top4').animate({'opacity': '0'}, 2000);
	var px = '<img src="image/'+pic[picLen_34]+'" class="SliderImage" />';
	document.getElementById('top4').innerHTML=px;	
	picLen_34++;
	if(picLen_34==pic.length){picLen_34=0;}
	*/
}
sl3();

//slide('#top')
function sl(){$('#top').animate({"opacity":"1"},2000);
	px = '<img src="image/'+pic[picLen]+'" class="SliderImage" />';
	document.getElementById('top').innerHTML=px;	
	picLen++;
	if(picLen==pic.length){picLen=0;}
	setTimeout(sl2,4000);}
function sl2(){$('#top').animate({'opacity': '0'}, 2000);
	px = '<img src="image/'+pic[picLen]+'" class="SliderImage" />';
	document.getElementById('top2').innerHTML=px;	
	picLen++;
	if(picLen==pic.length){picLen=0;}
	setTimeout(sl,4000);}
sl();


}
