q = [
    ['<img src="images/28.png" class="sq" /><br />If in the figure above, x=100<sup>o</sup> and y = 100<sup>o</sup> and y = 140<sup>o</sup> <br />find z if PQ and RS are parallel.','120<sup>o</sup>','80<sup>o</sup>','60<sup>o</sup>','40<sup>o</sup>'],
    ['<img src="images/29.png" class="sq" />','105<sup>o</sup>','85<sup>o</sup>','75<sup>o</sup>','65<sup>o</sup>'],['<img src="images/30.png" class="sq" /><br />Which of the following triangles are similar?','I and II','I and III','II and III','I, II and III'],['<img src="images/31.png" class="sq" /><br />In the disgram above PR and SR are the bisectors of angles QPS and QSP respectively. Calculate the value of the angle marked x.','96<sup>o</sup>','132<sup>o</sup>','144<sup>o</sup>','168<sup>o</sup>'],['<img src="images/32.png" class="sq" /><br />In the diagram above. O is the centre of the circle. TQ is atangent at Q and angle PRQ = 35 while angle QTR = x.Find the value of x.','55','40','35','20'],['<img src="images/34.png" class="sq" /><br />Find the area of the figure above','1650cm<sup>2</sup>','1600cm<sup>2</sup>','1550cm<sup>2</sup>','1500cm<sup>2</sup>'],['<img src="images/35.png" class="sq" /><br />The length x in the diagram above is','16cm','8cm','4cm','&radic;8cm'],
    ['Express s in terms of m and r if<div>	<div class="lcont"><span class="numi"><div class=""><b class="x">m</b></div><span class="ntD spaceUpSmall"><img src="images/sq.png" class="sq" /><div class="ntDx">2</div></span></span><span class="ntorW NoUp">=</span><span class="numi"><div class=""><b class="x">r</b></div><span class="ntD spaceUpSmall"><img src="images/sq.png" class="sq" /><div class="ntDx"><b class="x">r</b> + <b class="x">s</b></div></span></span></div>	</div>','<img src="images/16A.png" class="sq" />','<img src="images/16B.png" class="sq" />','<img src="images/16C.png" class="sq" />','<img src="images/16D.png" class="sq" />'],['Evaluate<br /><div class="lcont"><span class="numi"><div class="">x<sup>2</sup> - 6x<sup>2</sup> + 11x - 6</div><span class="ntD">x-1</span></span>	</div>    ','x<sup>2</sup>+5x-6','x<sup>2</sup>-5x+6','x<sup>2</sup>-5x-6','x<sup>2</sup>+6x-5'],
    ['Given that<br /><div class="lcont"> <span class="numi"><div class="">2<b class="x">x</b> - y</div><span class="ntD"><div class="">2y - x</div></span></span><span class="ntorW">=</span><span class="numi"><div class="">6</div><span class="ntD"><div class="ntor">1</div></span></span></div><br />find the ratio x:y','11:7','8:11','6:8','13:8'],
];c_sc=0;
var A='A';B='B';C='C';D='D';mk=0;
var ANS=[A,B,C,D,A,B,C,D,A,B,C,D];
function opBtn(o){
	if(o==ANS[(n-1)]){mk++;
		mk2='correctx';
		c_sc++;
		if(c_sc > 2){
			$('#entrance').slideDown();
			last_question='off';
			document.getElementById('sl').style.display='none';
			document.getElementById('sl2').style.display='none';
		}
	}else{mk2='wrongx';c_sc=0;}
	var scot=document.getElementById('sco').innerHTML;
	document.getElementById('sco').innerHTML='<tr><td>'+(n)+'</td><td>'+o+'</td><td><img src="image/'+mk2+'.jpg" /></td></tr>'+scot;
	$('#sco2').html('<sup>'+mk+'</sup>/<sub>50</sub>')
	//document.getElementById('quePanel').style.display='none';
	next();
	
	//submit if //alat();
	/*
Name     : olakunle odunuga
Type     : Forex Hedged USD
Server   : MetaQuotes-Demo
Login    : 10000788851
Password : ZcA@0eOq
Investor : UeA!P8Kw
	
}*/}
