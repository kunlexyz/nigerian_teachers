function sh(x,y='174px'){
    $('#'+x).css({height:y});
}
function cl(x){
    $('#'+x).css({height:'0px'});
}

//data format
//vids = [video_title, video_description, video_url];
var vids = [
    [`JavaScript: App for Cooperative Society`,`<span class="drop_cap">I</span>n this video, I explain how I use javascript to achieve interactive user interface which document and communicates records from database. Actually, this app was made using different languages but in this video, my explanation focus on mainly javascript.`,``,`js_1`],

    [`Javascript in a board game(TIC-TAC)`,`This video explain the data-type/structures and how javascript commands are used to form syntax step by step to form algorithms which control the flow of the game.
I use javaScript at the core of creating a dynamic and interactive game components, bridge the gap between the user interface, user interactions, DOM manipulation, and data management, making it possible for users to express their creativity. while enjoying a seamless and feature-rich experience.`,``,`tic_tac`],
[`JavaScript in a Puzzle Game(a sub-App in A-Z of Bible Character)`,`
The wonders of javascript and the combination of a wonderful tag <canva> in html were mixed together to make this fun and attractive app possible which at the end gives the whole product additional value that is able to cause more users engagement.`,``,`puzzle`],
[`Javascript in a Drawing App`,`I convert books into apps. In a book(A-Z of Bible Character), it is written "Draw a butterfly", so i created drawing app as a sub-app for it. 
    JavaScript plays a crucial role in the functionality of the drawing app. I use it for handling user interactions, rendering graphics, and managing the application's behavior, User Interface Interaction, Canvas Manipulation to create a drawing area where users can draw and interact, manage data related to the drawing app. You can click on these link to be my guest, draw and enjoy!`,``,`drawing`],
[`Javascript in Educational App (Mathematics)`,`How many pieces of information/data can a human brain hold and process in mili-seconds, Javascript as an object  oriented language, I love it as i used capture and process data beyond! Oh! Not just process but making it to be a teachable app, teaching and simplifying math and correcting students whenever they are wrong. And DR.(phD) said "...the teacher is always around!"`,``,`eduapp`],
[`Javascript in convertion of book into app`,`
In an era, when everyday economic keeps going down and cost of production keeps raising against the book publishers in the printing industry. Especially the paper price that depends on U.S dollar exchange rate seems never to be favorable in book production. Reasoning through the spirit of javascript which is able to inspire, empower and provide an industrial solution, I aprroach authors and publishers. A digital platform was created and the solution it provides is to make the books content available in digital(android app included) to users or readers that have made payment and secure it from the non-buyers. Even, if a buyer send the app to a non-buyer, the content would still remain locker untill payment is made. In this development, i integrate the Paystack Payment Platform API.<br>
For sample <a href="https://yngbrain.com/app"> click here to visit: https://yngbrain.com/app</a>
`,``,`convert`],
[`JQuery in Animation`,`In the dynamic world of web and app development, jQuery is awesome for interactive web experiences. I am always on the journey where code becomes captivating, and user engagement soars. one thing is to communicate with text, another is to communicate through body language, but jQuery delivers movements that communicate. It's like having a magic wand for creating interactive web elements effortlessly. A true Js library for "write less, do more..."`,``,`jQ`],/*
[``,``,``],
    [``,``,``],
    [``,``,``],
    */
];

var PHP_VIDEOS =[
    [`PHP in the App for Cooperative Society`,
    `<span class="drop_cap">P</span>            
    HP, the champion of the web on server-side, as it is widely known for its dynamic content generation capability. In this video, I explain how I used PHP script to perform CRUD. That is to recieve information on the server side, do some calculations, store and output relative desire or informational results. You can click here to visit and exprience the app.`,``,`php`]
];

function fill_vid(x,y,z){

    let v_card = `
    <div class='video_block'>
        <div style="
            width: 33%;
            height: 185px;
            float: left;
            background: #fff;
            text-align: center;
            box-shadow: 2px 0px 8px rgb(241, 11, 195);
            margin-right: 25px;
        ">
            <img onclick="show_vid('#${z}')" src="./kunle P/play.png" style="
                margin-top: 60px;
            " />
            <br>
            <span style="color:#f57ceb;">video</span>
        </div>

        <div style="display: inline-block;width:63%;">
        <div class="heading_topic" style="
            font-size: 20px;
            background: #ff0;
        border-left: solid 6px rgb(241, 11, 195);
            font-weight: 700;">
            ${x}
        </div>
        <p style="background: rgba(255,255,255,0.7);padding: 25px;">
            ${y}
        </p>
        </div>
    </div>
    `;

    return v_card;
}
//real_video = [video_title, video_url];
 
function get_real_videos(x,y,z){
    let real_v = `
    <div id="${z}" class="each_video">
      <div onclick="show_view('#graphics','#kunles_video_page')" style="background: #f00;color:#fff;
      float:right;padding: 10px;font-size: 20px;
      
      "> 
        &times; 
      </div>
      <div class="video_title">${x}</div>

<!-- https://www.youtube.com/embed/ftXodKW18tM -->
<iframe width="900" height="450" src="${y}">

</iframe>

    </div>`;

    return real_v;
}

var all_vid='';real_video ='';
vids.forEach((a,b)=>{all_vid+=fill_vid(a[0],a[1],a[3]);real_video +=get_real_videos(a[0],a[2],a[3]);});

PHP_VIDEOS.forEach((a,b)=>{all_vid+=fill_vid(a[0],a[1],a[3]);real_video +=get_real_videos(a[0],a[2],a[3]);});
//all_vid=fill_vid(vids[4][0],vids[4][1]);
document.getElementById('video_con').innerHTML=all_vid;
document.getElementById('kunles_video_page').innerHTML=`
<div onclick="show_view('#graphics','#kunles_video_page')" 
style="background: #f00;color: #fff;padding: 10px;display: inline-block;">
     &lAarr;Back
</div>`+real_video;

let show_view =(x,y)=>{
    $(x).slideDown();
    $(y).css({'display':'none'});
}
let show_vid =(x)=>{
    $('.each_video').css({'display':'none'});
    $(x).css({'display':'block'});
    $('#kunles_video_page').slideDown();
}



