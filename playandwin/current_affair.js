q = [
    ['Which is the Nigerian State with the largest land mass? ','Niger','Kano','Lagos','Oyo'],
    ['Which is the Nigerian State with the greatest number of local government areas? ','Niger','Kano','Oyo','Lagos'],
    ['Which is the Nigerian state with the highest population? ','Oyo State','Enugu State','Kano State','River State'],
    ['Which Nigerian state has "Light of the Nation" as her slogan? ','Kano State','River State','Bornu State','Anambra State'],
    ['What is the highest mountain in the world? ','Mount Everest','Mount Kilimanjaro','Mount Camel','Mount Zion'],
    ['What is the highest mountain in Africa? ','Mount Everest','Mount Kilimanjaro','Mount Zuma','Mount Camel'],
    ['Nupe Ethic group is predominantly found in which state? ','Oyo State','Enugu State','Niger State','Kano State'],
    ['Where is the headquarters of ECOWAS? ','Lome Cotonu','Accra, Ghana','Addis Ababa, Ethiopia','Abuja, Nigeria'],
    ['Where is the headquarters of the United Nations? ','New York, USA','London, England','Paris, France','Honkong, China'],
    ['Where is the headquarters of the African Union? ','Cairo, Egypt','Addis Ababa, Ethiopia','Accra, Ghana','Lagos, Nigeria'],
    ['How many states are in Northern Nigeria?','21','17','19','18'],
    ['How many states are in southern Nigeria?','16','20','21','17'],
    //['','','','',''],
];
//debugiing
// q=[
// 	['1','1','1','1','1'],
// 	['2','2','2','2','2'],
// 	['3','3','3','3','3'],
// 	['4','4','4','4','4'],
// ]
c_sc=0;
var A='A';B='B';C='C';D='D';mk=0;
var ANS=[A,B,C,D,A,B,C,D,A,B,C,D];
function opBtn(o){
	if(o==ANS[(rAN[(n-1)])]){mk++;
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
}