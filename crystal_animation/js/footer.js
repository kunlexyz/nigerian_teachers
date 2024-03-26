var footer = `
<footer class="desktop_and_tab" style="background:#0d1630;
background-image:url(images/navy_blue.jpg);
    background-size: 100% 100%;
 width: 100%; margin: auto;  text-align: center;color:#fff;
font-family: the_font;">

    <div style="width: 80%;margin:auto;padding:50px 0;text-align: left;line-height: 150%;font-size: 22px;">
        <div class="half_div">
            <div class="footer_heading">About RATOLF</div>            
            <a href="./about.html" >
            <div class="bull"></div>About Us
            </a> <br>
            <div class="bull"></div>Our Location <br> 
            <div class="bull"></div>Our Works <br> 
            <div class="bull"></div>Our Mission <br>  
            <div class="bull"></div> Our Team
    </div>
        <div class="half_div">
            <div class="footer_heading">Events</div>
            
            <div class="bull"></div>Nigeria <br> 
            <div class="bull"></div>South Africa <br> 
            <div class="bull"></div>Outreach <br> 
            <div class="bull"></div>Media
            
        </div>
        <div class="half_div">
            <div class="footer_heading">Get Involved</div>

            <div class="bull"></div>Give <br> 
            <div class="bull"></div>Join <br> 
            <div class="bull"></div>Contact us
            
        </div>
        <div class="half_div">
            <div class="footer_heading">Media</div>

            <a href="https://youtube.com/@riverandtreeoflifefoundation">
                <img class="icon" src="./images/icon_play.png">  Youtube
            </a>
                 <br> 
            <a href="https://www.facebook.com/riverandtreeoflife">
                <img class="icon" src="./images/iconFacebook.png">  Facebook
            </a>
                 <br> 
            <a href="https://instagram.com/rivertreeoflifeministries?igshid=OGQ5ZDc2ODk2ZA==">
            <img class="icon" src="./images/iconInstagram.png"> Instagram
            </a>
                 <br> 
            <a href="https://twitter.com/RiverAndTreeOf1"> 
            <img class="icon" src="./images/iconTwitter.png"> Twitter
            </a>
                 <br> 
            <a href="#"> 
            <img class="icon" src="./images/icon_wh.png"> +2348055441551
            </a>
            
        </div>
    </div>

    <div class="ff ce" style="background: orangered;color:#fff;padding: 30px;">
        ©ratolf. 2023 
    </div>
</footer>

<footer class="mobile" style="background:linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.4)),url(images/tree-736885.jpg);
background-size: 100% 100%; width: 100%; margin: auto; text-align: center;
font-family: the_font;">

    <div style="text-align: left; padding:20px;padding-bottom: 0px;">
        <img style="width:100px;" src="images/logo.png" alt="">
    </div>
    
    <div class="">
        <div class="column2">
            <h3>About RATOLF</h3>
            <p>About <br> our location <br> our works <br> our mission</p>
        </div>
        <div class="column2">
            <h3>Get Involved</h3>
            <p>Give <br> Join <br> Contact us</p>
        </div>
        <div class="column2" style="margin-top: -30px;padding-top:0px">
            <h3>Our Team</h3>
            <div class="bull"></div>Pastor Remmy-green Peter <br> 
            <div class="bull"></div>Mrs Mwaka Peter <br> 
            <div class="bull"></div>Pastor Bunmi <br> 
            <div class="bull"></div>Samuel Peter
            
        </div>
    </div>
    <div class="ff ce" style="background: orangered;color:#fff;padding: 10px;">
        ©ratolf. 2023 
    </div>
</footer>

<div id="myNav" class="overlay" style="">                                  <div class="closebtn close3" onclick="closeNav()">×</div>                                                <img class="coI" src="images/logo.png" style="width:200px; border-radius:25px; margin:10px auto;">                                  <div class="overlay-content">                                                                      <a href="./index.html">
     <div class="menu1"><div class="bull"></div>HOME</div> 
 </a>   
 <a href="./about.html">
    <div class="menu1" onclick="">
    <div class="bull"></div>ABOUT 
</div>
</a>
<a href="./team.html">
<div class="menu1" ><div class="bull"></div>TEAM</div>
</a>
<a href="./get_involve.html">
<div class="menu1">                                    <div class="bull"></div>GET INVOLVE                                    </div>
</a>
<div class="menu1" onclick="instal()">                                    <div class="bull"></div>MEDIA                                 </div><div class="menu1" onclick="instr()">                                    <div class="bull"></div>BLOG   </div><div class="menu1" onclick="popName()"> <div class="bull"></div>CONTACT </div>
<div class="menu1" onclick="popName()"> <div class="bull"></div>DONATE </div>		                                                                        </div></div>

<div class="overlay2" onclick="closeNav()"></div>
`;

document.getElementById('ratolf_footer').innerHTML=footer;