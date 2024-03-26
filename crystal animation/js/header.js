header=`
<!--heading-->
    <!--mobile heading-->
    <div class="parent" onclick="openNav()">
        <div style="background-color: green;" class="menu"></div>
        <div style="background-color: yellow;" class="menu"></div>
        <div class="menu"></div>
    </div>    
    <div class="mobile" style="background:linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(images/nav.jpg);
        padding:7px 25px;background-size: cover; background-position: center; background-repeat: no-repeat;" >
            <img id="logo"  src="images/logo.png" alt="">
            <div style="float: right;font-family: the_font;">
                <ul>
                    <a href="./index.html">
	<li>HOME</li>
</a>
                    <a href="./about.html">
<li>ABOUT</li>
</a>
                    <a href="./team.html">
<li>TEAM</li>
</a>
                    <a href="./get_involve.html">
	<li>GET INVOLVE</li>
</a>
            
<a href="./media.html">
                    <li>MEDIA</li>
                    </a>

                    <a href="https://ratolm.blogspot.com/">
                    <li>BLOG</li>
                    </a>
                    
                    <a href="./contact.html">
                        <li>CONTACT</li>
                    </a>
            <li style="color: red;">DONATE</li>
                </ul>
            </div>
    </div> 
    <!-- end of mobile heading-->

    <!-- tab heading -->
<div class="tab" style="background:linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(images/nav.jpg);
padding:7px 25px;background-size: cover; background-position: center; background-repeat: no-repeat;" >
    <div class="ce" >
        <img id="logo"  src="images/logo.png" alt="">
    </div>
    <div style="font-family: the_font;text-align: center;">
        <ul>
            <a href="./index.html">
	<a href="./index.html">
	<li>HOME</li>
</a>
</a>
            <a href="./about.html">
<li>ABOUT</li>
</a>
            
<li >TEAM</li>

            <a href="./get_involve.html">
	<li>GET INVOLVE</li>
</a>
            
<a href="./media.html">
            <li>MEDIA</li>
            </a>

            <a href="https://ratolm.blogspot.com/">
            <li>BLOG</li>
            </a>

            <a href="./contact.html">
                <li>CONTACT</li>
            </a>
            <li style="color: red;">DONATE</li>
        </ul>
    </div>

</div> 
    <!-- End of tab heading-->

<div class="desktop" style="background:linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(images/nav.jpg);
padding:7px 25px;background-size: cover; background-position: center; background-repeat: no-repeat;" >
    <img id="logo"  src="images/logo.png" alt="">
    <div style="float: right;font-family: the_font;">
        <ul>
            <a href="./index.html">
	<li id="home">HOME <!--
        <div id="home_drop" class="dd">
            <div class="dd_menu">- Story Behind</div>
            <div class="dd_menu">- Save</div>
            <div class="dd_menu">- Our Latest Activities</div>
            <div class="dd_menu">- Acount</div>
        </div>-->
    </li>
</a>
            
    <li id="about">
        <a href="./about_full.html"> ABOUT </a>
        <div id="about_drop" class="dd">
            <a href="./about.html#motto">
                <div class="dd_menu">- Our Motto</div>
            </a>
            <a href="./about.html#about_us">
                <div class="dd_menu">- About Us</div>
            </a>
            <a href="./about.html#purpose">
                <div class="dd_menu">- Our Purpose</div>
            </a>
            <!--
            <a href="./about.html#">
                <div class="dd_menu">- Our Mission</div>
            </a>
                <div class="dd_menu">- Our Vision</div>
            -->
            <a href="./about.html#support">
                <div class="dd_menu">- Our Support Areas</div>
            </a>
            <a href="./about.html#commitment">
                <div class="dd_menu">- Our Commitments</div>
            </a>
            <a href="./about.html#statement">
                <div class="dd_menu">- Our Statement of Faith</div>
            </a>
            <a href="./about.html#spiritual">
                <div class="dd_menu">- The Spiritual Unity</div>
            </a>

        </div>
    </li>

            <a href="./team.html">
<li id="team" >TEAM
    <div id="team_drop" class="dd">
        <div class="dd_menu">- Advisory Board</div>
        <div class="dd_menu">- </div>
    </div>
</li>
            </a>
	<li id="get">
            <a href="./get_involve.html">
            GET INVOLVE
            </a>
        <div id="get_drop" class="dd">
        <a href="./get_involve.html#compassion">
            <div class="dd_menu">- Compassion</div>
            </a>
            <a href="./get_involve.html#community">
            <div class="dd_menu">- Community Empowerment</div>
            </a>
            <a href="./get_involve.html#transforming">
            <div class="dd_menu">- Transforming communities</div>
            </a>
            <a href="./get_involve.html#youth">
            <div class="dd_menu">- Youth Empowerment</div>
            </a>
            <!--
            <div class="dd_menu">- Mission</div>
            -->
        </div>
    </li>
</a>
            
<a href="./media.html">
            <li>MEDIA</li>
            </a>
            
            <a href="https://ratolm.blogspot.com/">
            <li>BLOG</li>
            </a>
            
            <a href="./contact.html">
                <li>CONTACT</li>
            </a>
            <a href="./donation.html">
                <li id="donate" >DONATE
                    <div id="donate_drop" class="dd">
                        <div class="dd_menu">- Finance</div>
                        <div class="dd_menu">- Giving</div>
                        <div class="dd_menu">- Practice</div>
                        <div class="dd_menu">- BANK ACCOUNT</div>
                    </div>
                </li>
            </a>
        </ul>
    </div>
    
</div> 

<!--heading end -->
`;
document.getElementById('head_man').innerHTML=header;