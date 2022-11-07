// JavaScript Document named think.js

q = [
    [
        'Daddy',
        'D-y',
        'Dxy',
        'D+y',
        'D/y',
    ],
    [
        'TOWN = 8 <br> find n',
        '6',
        '2',
        '3',
        '4',
    ],
    [
        '4 + 10',
        'Former',
        'Future',
        'Fortune',
        'Foretell',
    ],
];
var A='A';B='B';C='C';D='D';
var ANS=[C,D,C];
function opBtn(o){
	if(o==ANS[(n-1)]){mk++;
		mk2='correctx';
	}else{mk2='wrongx';}
	var scot=document.getElementById('sco').innerHTML;
	document.getElementById('sco').innerHTML='<tr><td>'+(n)+'</td><td>'+o+'</td><td><img src="image/'+mk2+'.jpg" /></td></tr>'+scot;
	mk_shot = mk;
	if(mk_shot == 2||mk_shot == 4||mk_shot == 6){
		shot();
		mk_shot = false;
		send_time=3;
	}//document.getElementById('quePanel').style.display='none';
	next();
	
	//submit if //alat();
	/*
	if(q == que.length){alat();}else{
	$('#quePanel').slideDown(1000);
	document.getElementById('main').innerHTML=(q+1)+'.)<br />'+que[q][0];
	document.getElementById('opa').innerHTML=que[q][1];
	document.getElementById('opb').innerHTML=que[q][2];
	document.getElementById('opc').innerHTML=que[q][3];
	document.getElementById('opd').innerHTML=que[q][4];
	
	if(!que[q][5]){
		document.getElementById('EE').style.display ='none';
		}else{
			document.getElementById('EE').style.display = 'block';
			document.getElementById('ope').innerHTML=que[q][5];
	}
	
}*/}
