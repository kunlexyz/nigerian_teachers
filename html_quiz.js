//HTML – QUIZ',

q = [['What does HTML stand for?',
'Hyper Tool Markup Language',
'Hypertext Markup Language',
'Hyperlinks and Text Markup Language',
'Hyperlinks Markup Language'
],[
'What is the correct HTML for creating a hyperlink? ',
'&lt;a name="http://www.sitename.com"&gt;site&lt;/a&gt;',
'&lt;a url="http://www.sitename.com"&gt;site&lt;/a&gt;',
'&lt;a&gt; http://www.sitename.com&lt;/a&gt;',
'&lt;a href="http://www.sitename.com"&gt;site&lt;/a&gt;'
],[
'Which character is used to indicate an end tag?',
'/',
'&lt;',
'^',
'*'
],[
'How can you open a link in a new tab/browser window?',
'&lt;a href="url" target="new"&gt;',
'&lt;a href="url" new &gt;',
'&lt;a href="url" blank="target" &gt;',
'&lt;a href="url" target="_blank"&gt;'
],[
'Which of these elements are all elements?',
'&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;',
'&lt;thead&gt;&lt;body&gt;&lt;tr&gt;',
'&lt;table&gt;&lt;tr&gt;&lt;td&gt;',
'&lt;table&gt;&lt;tr&gt;&lt;tt&gt;'
],[
'How can you make a numbered list?',
'&lt;list&gt;',
'&lt;dl&gt;',
'&lt;ol&gt;',
'&lt;ul&gt;'
],[
'How can you make a bulleted list?',
'&lt;ul&gt;',
'&lt;dl&gt;',
'&lt;ol&gt;',
'&lt;list&gt;'
],[
'What is the correct HTML for making a checkbox?',
'&lt;check&gt;',
'&lt;input type="checkbox"&gt;',
'&lt;input type="check"&gt;',
'&lt;checkbox&gt;'
],[
'What is the correct HTML for making a text input field?',
'&lt;input type="text"&gt;',
'&lt;textinput type="text"&gt;',
'&lt;input type="textfield"&gt;',
'&lt;textfield&gt;'
],[
'What is the correct HTML for making a drop-down list?',
'&lt;input type="dropdown"&gt;',
'&lt;input type="list"&gt;',
'&lt;list&gt;',
'&lt;select&gt;'
],[
'What is the correct code for text area?',
'&lt;input type="textbox"&gt;',
'&lt;textarea&gt;',
'&lt;input type="textarea"&gt;',
'All of the above'
],[
'What is the correct HTML for inserting an image?',
'&lt;image src="image.gif" alt="MyImage"&gt;',
'&lt;img href="image.gif" alt="MyImage"&gt;',
'&lt;img src="image.gif" alt="myimage"&gt;',
'&lt;img alt="MyImage"&gt;image.gif&lt;/img&gt;'
],[
'Which HTML element defines the title of a document?',
'&lt;title&gt;',
'&lt;meta&gt;',
'&lt;head&gt;',
'All of the above'
],[
'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
'Alt',
'Src',
'Longdesc',
'Title'
],[
'What is the correct HTML ELEMENT for playing video files?',
'&lt;video&gt;',
'&lt;media&gt;',
'&lt;movie&gt;',
'All of the above'
]];
var A='A';B='B';C='C';D='D';
var ANS=[B,D,A,D,C,
C,A,B,A,D,
B,C,A,A,A];
function opBtn(o){
	if(o==ANS[(n-1)]){mk++;
		mk2='correctx';
	}else{mk2='wrongx';}
	var scot=document.getElementById('sco').innerHTML;
	document.getElementById('sco').innerHTML='<tr><td>'+(n)+'</td><td>'+o+'</td><td><img src="image/'+mk2+'.jpg" alt="'+mk2+'" /></td></tr>'+scot;
	mk_shot = mk;
	if(mk_shot == 2||mk_shot == 4||mk_shot == 6){
		shot();
		mk_shot = false;
		send_time=3;
	}//document.getElementById('quePanel').style.display='none';
	next();
	
	//submit if //alat();
}
