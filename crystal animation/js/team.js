// filename: team.js
var state_d=0;
state_x=0;
state_y=0;

function bring_more(event,k){
    $('.story_box').css({display:'none'});
    $('#'+k).css({display:'block'});
	x = event.clientX;
	y = event.clientY;
	state_x = event.clientX;
	state_y = event.clientY;
    state_d=window.scrollY;

    $('#more').css({display:'block',width:'150px',height:'50px',top:y+'px',left:x+'px'});
    $('#more').animate({top:'0px',left:'0px',width:'100%',height:'100vh'},1000,
    function(){
        //$('#more').scrollTop(0);
        $('#more').animate({scrollTop:0});
    }
    ); 
    
}
function bring_more_2(event,k,aa){
   $('.story_box').css({display:'none'});
   let mem = '';
   if(aa==='team'){
      mem=team[k];
      console.log('here');
   }else{
      mem = Advisory[k];
      console.log('no');
   }
   $('#The_story').css({display:'block'});
   let profile = `
   <div class="more_box">
      <img src="./image/${mem[3]}">
      <div style="display: inline-block;">
         <div class="more_title">${mem[0]}</div> 
         <div class="more_name">
         ${mem[1]} 
         </div>
         <hr>
         <div class="more_title">
         ${mem[2]}
         </div>
         <div onclick="hideTeamStory()" class="more_btn">« Back</div>
      </div>

</div>`;
   let back_btn =`<div onclick="hideTeamStory()" class="more_btn">« Back</div>`;
   $('#The_story').html(profile+mem[(mem.length-1)]+back_btn);
	x = event.clientX;
	y = event.clientY;
	state_x = event.clientX;
	state_y = event.clientY;
    state_d=window.scrollY;

    $('#more').css({display:'block',width:'150px',height:'50px',top:y+'px',left:x+'px'});
    $('#more').animate({top:'0px',left:'0px',width:'100%',height:'100vh'},1000,
    function(){
        //$('#more').scrollTop(0);
        $('#more').animate({scrollTop:0});
    }
    ); 
    
}

function hideTeamStory(){
    $('#more').animate({width:'150px',height:'50px',top:state_y+'px',left:state_x+'px'},1000, function(){
        $('#more').css({display:'none'});
    });
    window.scrollTo(0,state_d);
}

var Pastor_remmy = `
<h3 style="
    border-left:solid 6px #99f;
    background:#eef;
    padding:10px;
    padding-left:40px;
    font-family: calib;
">Hebrew 12:1</h3>
   <p>
   Therefore we also, since we are surrounded by so great a cloud of witnesses, let us lay aside every weight and the sin which so easily ensnares us, and let us run with endurance the race that is set before us,
   </p>
   <p>
   According to the scripture Hebrew 12:1, it is my privilege to share the vision that was set before me and the race that I have to RUN. I would like to share with you how I received the call of God, my history, my vision, and how far I have gone with the vision.
   </p>
   
   <h3 style="
       border-left:solid 6px #99f;
       background:#eef;
       padding:10px;
       padding-left:40px;
       font-family: calib;
   ">My History</h3>
   
<p>
   To the glory of God Almighty, I was called into the ministry in 1988, August 12. On August the 12th, I had a revelation that launched me into my calling. I can never forget the revelation in my lifetime because it was written as if on a tablet in my heart and it can never be wiped off. I was in a village in this dream, and Jesus came to the village to look for me. He saw some children playing on the field and he told them that He is looking for Peter and there was only one person bearing the name Peter in the entire village. My friends ran to me to call me and tell me that a white man was looking for me. I was surprised and I asked, “A white man in our village?”
   
</p>
<p>
   I ran quickly to meet the white man. I looked at the white man, it was Jesus Christ. He gave me a Bible and He said to me, “Go into all the world and preach the gospel to every creature.” (Mark 16:15), “In 20 years’ time, you will be in America.” On the front cover and back cover of the Bible that was given to me it was written, “GOLDEN BIBLE”.  After He delivered the message to me He left, and I was very happy to show my friends my “GOLDEN BIBLE” because there was no one that had such a Bible in the village and in the whole nation.
   
</p>
<p>
   When I woke up from my dream, I was worried because I didn’t know the meaning of the dream, after all, I was only 21 years old. At that time, I was a member of Scripture Union. I ran quickly to the Scripture Union Coordinator, Brother Tayo, now Bishop Tayo Odunuga, (Late), to share my dream with him. He explained to me that the revelation I was shown was the calling of God upon my life. Even though he had been telling me before that time that I had the call of God, I didn’t understand what the call of God was all about. Brother Tayo later started his own ministry, and he became the Bishop of his own ministry, CHRIST LOVE EVANGELICAL MINISTRIES. Bishop Tayo Odunaga has since gone home to rest. May his soul Rest in Peace.
   
</p>
<p>
   After my encounter with the Lord Jesus Christ in 1988, I had a passion to reach the unreached with the Gospel of Christ Jesus. This prompted me to start going to several villages in Ijebu Land, Ogun State in Nigeria to preach the Gospel of Jesus Christ. When I was in secondary school everyone called me ‘Pastor’ because I usually preached to my fellow students. I was also the assistant secretary in my school fellowship but when I received the call of God the fire in me doubled. I told my fellow Christians that villages had been neglected and many preachers did not want to go to villages to preach, they preferred to go and preach and hold crusades in towns and in the cities because they feared death. I cried to God that many souls were dying every day in those villages and there is no one to preach to them. I told God, “Here I am, send me, I am ready to go to the villages, to go and preach the Gospel of Jesus Christ to reach the unreached.” I feared no death and I told myself that I was ready to die for the sake of the Gospel.
   
</p>
<p>
   I did not waste any time! Immediately I had understanding that the call of God is upon my life to take the Gospel of Christ to the unreached people, I started preaching the Gospel of Christ from street to street in Ijebu Ode in 1988. Someone who knew me and the gift of God upon my life introduced me to a brother, his name is Gbenga Odusanya. Brother Gbenga told me about their village youth fellowship, and he wanted me to come and preach the Gospel to them.
   
</p>
<p>
   I went to their village to preach the Gospel to the youths and also to the secondary school students in their village and God worked in a miraculous way each time I preached. Miracles happened among the youths, schools and my name was spread all over the village and the surrounding area. I held my first village crusade in OdesenboraIlugun, Ijebu-Ode in 1988. God performed miracles among the youths and adults, and it was a glorious day. The entire village and 2 other villages around the area also were affected by the fire of the revival of the Lord.
   
</p>
<p>
   By this time that I started holding crusades in these villages there was no electricity, and the roads were extremely bad. Darkness occupied the villages, and the people didn’t want light at all. That is why many of the preachers ran away from coming to preach in those villages then. Those who came before me to preach were chased away by the evil possessed people, the leaders of the villages chased them and some of them lost their lives.
   
</p>
<p>
   I was 21 years old and looked small in stature, therefore they counted what I was doing then as child’s play. Before they realized what was happening, the fire of the Lord, the fire of Revival had already spread all over mostly among the youth in the villages. This led to the leader of the Anglican Church in the village accusing me of bringing a strange religion into their Church and their community. Our prayers at that time scattered their evil kingdoms and that was the beginning of my persecution.
   
</p>
<p>
   During this time there were no good roads leading to some of these villages, furthermore, most of the brothers that followed me were students in the secondary school. We didn’t have money to sponsor some of our trips to these villages, but we lived by faith. Many times, I had to do some petty jobs to sponsor our transportation and food costs. Several times we had to walk from Ijebu-Ode to Odosenbora which is a distance of about six to seven miles. After resting for some hours or a day in some of the villages we would then proceed on another journey to other villages which would take us about 7 miles or more by trekking. At that time, we were very young and had strength so we didn’t tire easily from all this walking.
   
</p>
<p>
   The spirit that was driving me then, was the Spirit of God. He led me to reach the unreached to take the Gospel of Jesus Christ to these villages. By God’s grace within 2 to 3 years of holding crusades and engaging in prayers, the Fire of Revival spread out among the youths and old men and women in the villages and many people gave their lives to the Lord Jesus Christ. God used our prayers to suppress the people of the darkness in those villages, and within 3 years electricity was installed and good roads were built which could reach the villages at that time.
</p>   
   
   <h3 style="
       border-left:solid 6px #99f;
       background:#eef;
       padding:10px;
       padding-left:40px;
       font-family: calib;
   ">
       My Persecution
   </h3>
   <p>
   At the time that I was traveling to preach in those villages, I was 21 years old and my family believed I was going into dangerous zones, these are places where some of the great pastors chose not to go. My family was afraid of losing me. I was called for a family meeting in my home townEpe in Lagos State. In the meeting, I was told to stop going to the villages to preach the Gospel because they feared I would be killed by the demonic power that controls the villages. I told my family that I am ready to die for the sake of the Gospel of Christ Jesus because Jesus Christ said: Whoever finds his life will lose it, and whoever loses his life for my sake will find it. Matthew 10:39.
   
</p>
<p>
   As a result of my stance, the entire family rejected me as their son because of the Gospel. Nonetheless, with confidence in Jesus Christ who I accepted and received in my life as my God and my Savior, I told my family that, when my father and my mother forsake me, the LORD will take me up. <strong><em>Psalm 27: 10.</em></strong>
   
</p>
<p>
   Though I faced a lot of persecution, hard suffering, pain and rejection etc, all these things did not stop me from preaching the Gospel of the LORD JESUS CHIST. I was attacked many times on this journey. There was a time that I was sick and slept for 3 full days in a row without waking up. My enemies thought that was the end of my life,  thinking that I was dead and that they had finished me off. To their surprise, I woke from my sleep on the third day like my LORD JESUS CHRIST. After I had woken up from my deep sleep, that same week I traveled to preach again in village where the severe attack on me had come from. Immediately I alighted from the bus at the bus stop, I saw many people running away from me! Some ran quickly inside their houses and shut their door. The people thought they had seen my Ghost because they thought I was dead, hence seeing me again in the village was a big shock to them. I did not allow what happened to me to disturb me from preaching the Gospel of Christ.  I continued to preach the Gospel of Christ in villages, towns, and cities working with Ministries in Nigeria for a prolonged period until God asked me to leave Nigeria to go to South Africa in 2004.
   
   😀😄😍💗
   
</p>
<p>
   <h3 style="
   border-left:solid 6px #99f;
   background:#eef;
   padding:10px;
   padding-left:40px;
   font-family: calib;
">
   The Fruits that Remain
</h3>
   I want to give thanks to God almighty that many of the youths that I preached to in those villages are doing well in the kingdom of God working for God and committed to the work of the ministry. They are mature men and women now doing exploits for the Kingdom of God. Among them today we have Pastors, Serving overseers of their own Ministries, Lawyers, Businessmen and women. I want to use this time to thank God and to remember some of my converts who had slept in the Lord, May their souls rest in Peace.
   
</p>
<p>
   To this end, what prompted me to start RIVER AND TREE OF LIFE FOUNDATION is the passion that I have for the Gospel of Jesus Christ to reach the unreached. My passion is to Train, Mentor, and Equip (TME) the small Churches in the villages, towns and cities in Nigeria, other African nations, and all across the world so that they can achieve their purpose and their calling in their community, in their nations for the work of GOD at this end time.
   
</p>
<p>
   I have to share my Calling, my Vision and my History with you all for you to know the purpose of this Organization called, RIVER AND TREE OF LIFE FOUNDATION (RTLF) I am not starting this foundation to enrich myself but to support small Churches, ministries, communities, and the less privileged.
   
</p>
<p>
   So many big ministries today have neglected the small Churches but have rather chosen to concentrate on building mega buildings for themselves, which is admirable, if they could also lend help to the growth of other small Churches or Ministries. Jesus Christ said, My Father work hitherto, and I work. John 5:17. Let us all do the work that God has committed into our hands, Mara’nathah. (Our LORD is coming soon)
</p>`;

Mwaka_peter =`
<p>
   Mwaka Peter has devoted her life to helping the needy and proclaiming the Gospel of Jesus Christ. Mwaka is involved in missions and has a passion for younger children, adolescents,the broken-hearted, the lost, and the marginalized or forgotten people in society. She believes that wherever you find yourself working, studying or in whatever sphere of life that you find yourself in, that is your mission field. 
   </p>
   <p>
Mwaka gave her life to Jesus Christ in 1995 and has pursued and submitted to the will of God upon her life. She is a very dynamic woman, a woman of faith, of great vision, and an intercessor. Mwaka believes that this ministry River and Tree of Life allows her to be an ambassador of the Kingdom of God in the different nations she finds herself in.
   </p>
   <p>
Mwaka Peter is the Chief Executive Director of River and Tree of Life Ministries International (RATOLM). 
</p>
<p>
She is also the Co-founder with her husband Pastor Remmy-Green Peter of River and Tree of Life Foundation(RATOLF)
   </p>
   <p>
Mwaka holds a business degree in management from the University of KwaZulu Natal and Wits Business Schooland has worked in financial services for many years. She alsoholds a degree in Education and is a licensed experienced Educator. She has worked as an educator in South Africa, Taiwan, and currently in the United States of America with teaching experience spanning elementary, middle school, and high school levels. She has specialized in teaching AP Microeconomics, Personal Finance, and elementary math. Her work as an educator has allowed her to impact a lot of students who are in need of counseling and seeking to know God.
</p>
`;

Adebayo_okeowo=`
<p>
Adebayo Okeowo is a human rights lawyer with over a decade’s experience working around issues of socio-economic rights, environmental justice, and international criminal accountability. His current focus is on exploring, through research and practice, the intersection between human rights and technology.
</p><p>

In his role as the Associate Director of Programs, Regional & Partner Engagement, Adebayo provides strategic insight and guidance on the day-to-day operational and programmatic work of WITNESS across the regions, ensuring that human rights impact is achieved for the communities we support, center and serve. Previously, Adebayo led WITNESS’ work in Africa, where he implemented projects seeking to secure justice for victims of police brutality, war crimes, technology-facilitated violations, and environmental crimes. 
</p><p>

In the course of his career, Adebayo has worked for the Centre for Human Rights in South Africa, Global Rights Nigeria, and the Commonwealth Human Rights Initiative. He also served as the Lab Manager at the University of Pretoria hub of the Digital Verification Corps project – a collaborative initiative between Amnesty International and six universities around the world which uses digital tools to verify citizen media with the aim of advancing accountability for atrocities.
</p><p>

Though a self-taught photographer and filmmaker, he has won two human rights photography awards and had his work exhibited in Italy, Mauritius and South Africa and has executed campaigns focusing on the rights of vulnerable groups such as persons with albinism, women, and older persons. In 2017, he delivered a TEDx talk on the <a href="https://www.youtube.com/watch?v=lhIwfRJ4Wo8" >Visual Disruption of Injustice.</a>
</p><p>
Adebayo holds a doctorate on International Human Rights Law from the University of Pretoria, South Africa, a LLM from the same university, and a LLB from the University of Ilorin, Nigeria. You will find him tweeting about social justice, international criminal accountability, human rights and technology via <a href="https://twitter.com/AdebayOkeowo/" >@AdebayOkeowo</a>
</p>`;

Dr_funmi=`
<p>
Dr Funmi Olamide ANDREWS is the president, FUNMI ANDREWS FOUNDATION, and RESTORERS' BAND an arm of Funmi Andrews Foundation, with the mission to reach out to and restore men to Christ. Has ministered within and outside Lagos.
A trained accountant from the Institute of Chartered Accountant of Nigeria.
Holds a diploma certificate in music from Lagos state school of music.
A Leadership certificate from Day Star Academy, also a Basic Certificate Course, 
Leadership diploma course and Leadership certificate Course from Word of Faith Bible institute.
</p><p>
Worked at MIKANO INTERNATIONAL, as an Account Officer, also worked at OAO and CO (AuditFirm) as an Audit Officer, and Managing Director of Silvery Vest Ltd, a Subsidiary of Olydite group international.
She is an Ordained Minister, music director of Pentecostal fellowship of Nigeria(PFN) Agege/Ogba Province, and assistant music director of Lagos state (PFN), mother of lovely children.

</p><p>
She hails from IpetuIjesha, Osun State Nigeria, she is the Author of the book “OFFERING ACCEPTABLE PRAISE” and owes three music albums to her name: RESTORING PRAISE, THE BLESSER and THE TURNAROUND. She was the Lagos Representative of Gospel music Ally of Nigeria, and now the assistant Governor of Gospel music Ally.
She is currently the CEO OF TRIBLESA GLOBAL SERVICES LIMITED
    </p>`;

Adegeye_michael= `
<p>
   Adegeye Michael Oluyemi is a graduate of Olusegun Agagu University of Science and Technology (OAUSTECH) with a bachelor’s degree in Geophysics, 2023.
</p><p>
I served as a General Secretary in the Joint Christian Campus Fellowship (JCCF) of the school, and served as a Music Director in my fellowship, Gofamint Student Fellowship (GSF).
</p><p>
I currently have a fashion brand, where I work as the CEO of Meralb Designs. The brand currently deals with every aspect of male fashion wears.
</p><p>
I am also a member of Caring and Sharing Foundation, Nigeria. Founded by a family member, Mrs Nicky Iginla.
</p> `;

Pastor_adekunle_j=`
<p>
   He had his primary and secondary schools at Ogbogbo Baptist Grammar School, Ijebu Ode.During his secondary school he had been with a Gospel group called World Evangelical Christian Ministries. They preached the gospel from one village to another, lead by Pastor Remmy-Green Adekunle Peter, who was the coordinator then.
</p><p> 
He went to Lagos and there he received the call of God to be a full time gospel minister in 1991. He went to Bible school at Samuel Bible Institute at Yaba,Lagos, wherehe obtained his Diploma in Theology. 
</p><p>
He served under Wonderful Gospel Church, Shomolu Lagos as Residence Pastor for 20years. He was planting churches and ministering in conferences, seminars and revivals by several Pentecostal churches. Presently he is the senior Pastor at Christ Gospel Church in Lagos, Nigeria.He resides in Lagos with his family.
</p>`;

Dr_osungbohun=`
<p>
   Osungbohun Jacob Jesusrich (Rev. Dr.) Pastors THIS ROCK ASSEMBLY, a Pentecostal inclined church with headquarters in Lagos. 
</p><p>
Holds two separate doctoral degrees in Theology and Divinity from West African Christian University. 
</p><p>
He is the Vice Chairman Christian Association of Nigeria CAN of an Area in Lagos and Chapter's Vice Chairman of Pentecostal Fellowship of Nigeria PFN in Lagos. Also, the Chairman of a community Development Association CDA a grassroots (forth tier) government in Lagos state.
</p><p>
He directs the affairs of the Pentecost College of Theology, Lagos.
</p>`;

Michael_olatunji=`
<p>
   Michael Olatunji ONI a native of Ile-Ife in present day Osun State born about six decades ago.

   </p><p>
Michael had his university education at the University of Lagos with a Second-Class Upper division andmaster’s degree in Philosophy.

</p><p>
Michael added the Doctor of Philosophy in Philosophy (PhD) degree from the same University and later a master’s degree in African Studies from the University of Lagos.

A seasoned scholar and academic with integrity. Dr. Oni was for many years a Graduate Fellow and Researcher at the University of Lagos, before proceeding to Osun State University, Oshogbo (Ikire campus).
</p><p>
In addition, Dr. Oni is a Theologian of high repute, having acquired multiple degrees in Theology, including a Doctor of Divinity.
</p><p>

A Bible teacher of over three decades, Dr. Oni is a favourite speaker in many Pentecostal/Evangelical meetings.
</p><p>

He is also the Overseer of Grace Assembly in Lagos.
</p><p>

He is happily married.
</p>
`;

Bunmi_johnson=`
<p>
Bunmi Johnson is an accomplished strategic communication professional with extensive experience in managing businesses, publishing, and representing global brands. As the former managing partner of Bunmico (Publishers/Printers/Biographers), he successfully published numerous books in various fields, gaining international recognition. Currently, Bunmi serves as a key executive at Oxbrandplanet Ltd., a leading strategic communication management company.
</p>
<h3 class="more_head">

Experience:
</h3>
<p>
Managing Partner, Bunmico (Publishers/Printers/Biographers) | Early 1990s - Present
</p><p>

Led the successful publication of over a dozen books, catering to diverse international markets and professional backgrounds.
</p><p>
Established strong partnerships and managed communication accounts, including the International Facility Management Association (Nigerian Chapter).
<br>
Founder and Lead Consultant, Oxbrandplanet Ltd. | 2013 - Present
</p><p>

Oversaw the publication of "A Law To Provide Protection against Domestic Violence And For Connected Purposes" for Lagos State of Nigeria.
</p><p>
Appointed as the West African representatives for John Maxwell Co. (Africa), a renowned global leader in leadership and training.
<br>
Author | 2017 - Present

</p><p>
Authored the children's book "A-Z of Bible Characters for Children," bringing delight and educational value to young readers.
</p><p>
Published the second edition six years later, showcasing dedication to continuous improvement and literary excellence.
<br>
Lead Consultant and Event Manager | 2008 - 2009
</p><p>

Led the planning and execution of notable events such as the 63rd Anniversary and Conference of the British Society of Commerce, the conferment of International Life Fellowship in Commerce & Induction ceremonies, and the celebration of the Bernard Simons Human Rights Award.
</p>
<h3 class="more_head">
Board Appointments and Memberships:
</h3>
<p>
Board of Trustees, River and Tree of Life Foundation | 2022 - Present
</p><p>
Appointed as the Country Secretary of the non-governmental organization (NGO), supporting initiatives in South Africa, Nigeria, and America.
</p>
<h3 class="more_head">

Education and Associations:
</h3>
<p>
Bachelor of Arts in Mass Communication | [Ambrose Alli University, Ekpoma, Nigeria.]
Member, Nigerian Institute of Public Relations
Fellow, British Society of Commerce, Nigerian Chapter.
</p>
<h3 class="more_head">

Honours and Awards:
</h3>
<p>
AWARD, for SACRIFICIAL PROMOTION of PROFESSIONAL EXCELLENCE & GLOBAL PROSPERITY
</p><p>
On Sunday 15th of August, 2021 at the gathering of the Global Citizens, the community of the Global Public Relations Achievers, Bunmi was honoured with Outstanding Citizen Award, for Sacrificial Promotion of Professional Excellence & Global Prosperity.
</p>
<h3 class="more_head">

Personal:
</h3>
<p>
Bunmi Johnson is happily married to Yinka Johnson and cherishes family life. With a passion for strategic communication, publishing, and inspiring young minds, Bunmi continues to make significant contributions to the industry while upholding values of excellence and professionalism.
</p>
`;
Sis_arah =`    
    <p>
    Arah James is a gender-based violence activist and has worked with NGO’s such as Women Against Rape (WAR), Professional Organization for Women in Antigua (POWA) advocating for gender parity and gender security.  She has also worked with Community Charitable Ministries (CCM) in addressing the issues of the poor and ostracized in the society.
    She has used her gifts and talents while working with El Shaddai Promotions to spearhead Christian based talent shows in Antigua Barbuda.  She has hosted and performed on many of these dinners and galas.
    </p><p>
    Arah is a member of the United Progressive party (UPP) a political organization in Antigua Barbuda.  She holds the position Secretary of the St. Peter’s Parish Branch and served as the Public Relations Officer of the Women’s Forum.  She also served as a member of the Movement a political watchdog advocating for political and constitutional change
</p><p>
    Arah has worked extensively as an Administrator and Liaison Officer with the government of Antigua and Barbuda and other private entities.  She is convinced according to 1 Corinthians 12: 28 that she has been anointed with the gifts of helps and administration.  She loves planning, coordinating, and seeing programs come together.  She is passionate about her walk with the Lord and believes that “we can win by righteousness”.Arah currently functions in the position of Executive Network Relations for the River and the Tree of Life Foundation and serves as the Vice Chairman of the RATOLF Events Planning Committee.
    </p>
    `;
Pastor_philemon =`<p>
Philemon EdemaMafolabomi, is a native of IlajeIgbokoda Ondo State Nigeria.
</p><p>
Philemon had his university education at Lagos State University (LASU) witha Second-Class Upper studying Banking and Finance.
</p><p>
Philemon attended Ministers of God Academy Bible School where he obtaineda diploma in Theology.
Philemon is a Senior Pastor at Christ Anointed Church International located at Oko-Afo, Badagry, Lagos State Nigeria. 
</p><p>

A Bible teacher for one decade, He is a man of vision with passion to achieve God’s purpose. He operates in the office of pastor and prophet.
</p><p>
     
His vision is to move the ministry of God from one place to another and to expand and increase the kingdom of God.
</p><p>
     
Philemon EdemaMafolabomiis happily married with four children. 
</p>
`;

Christopher_a=`<p>
Christopheris a trained teacher from the prestigeous Adeniran Ogunsanya College of Education, Ijanikin, Lagos.Also a trained caterer and event manager, he worked as caterer with Cafeteria Royale Ikeja, and Ec-Squared an outdoor catering service provider. 
</p><p>
He later worked as head supervisor/kitchen manager with StellaMaris catering services, when the outfit was the contract catering company for Cadbury Nig Plc. 
</p><p>

He is a writer and the author of a book titled "I Have Something To Tell You Before I Go To Bed" a romance book for matured singles and married. He later embarked on a missionary journey to Agadez in Niger Republic (2015) with Royal Missionary Outreach, a missionary outfit focused on evangelizing the desert dwellers in the Sahara, based in Lafia Nasarawa State while working as a correspondence to Church Times Nigeria. Since then, he has been into ministry work. He worked as an assistant to the late head Pastor of Breakthrough Evangelical Ministry, Abuja, later managed the church after his demise but not ordained then. (2019)
</p><p>

He later moved to work with another ministry in Abuja 'Christ Word Healing and Power Ministry, where he was ordained as a pastor in year 2021, and function as Pastor Assistant. Currently working as a personal chef to the MD of a company in Abuja.
</p><p>

Pastor Chris is happily married with a wife and wonderful children.
</p>
`;
Pastor_ayooluwa=`
<p>
He is from Ekiti State, Emure local government and was born and brought up in Christ Apostolic Church and later became an Evangelist in the same ministry. 
</p><p>
He later proceeded to pastor in several ministries such as Christ Redeeming Evangelicals church in Ibadan. 
</p><p>
He's currently the Senior Pastor of Mount Zion prayer and deliverance ministry, here in Lagos. 
</p><p>
Hedidhis O levels at A.U.D Grammar School Owo and proceeded to obtain his NCE at YewaCollege of Education Ogun state. 
</p><p>
Ayooluwa Elisha is also an actor, script writer, quotescreator, who has produced some Christian movies.
</p><p>
He is also an activist who loves to fight against injustice and protect the rights of the citizens. 
</p><p>
He is married to Mrs.Ayooluwa Cecilia and blessed with glorious children and is currently residing in Lagos.
</p>
`;

Pastor_Olugbuyi =`
<p>
Solomon Olusodo graduated from Ambrose Alli University (Ekpoma) Edo State with a degree in Business Administration.
</p><p>

Solomonhas over Twenty Fiveyears experience and oversees in office administration, facility management and health safety and environment at Gilgal Properties Limited Lagos.
</p><p>

Hehas pursued a steady carrier with strict compliance to professional ethics while also adding value.
</p><p>

Solomon Olusodo is an influential member of a highly motivated team providing qualitative and excellent services in a dynamic organization. He has worked in various organizations before joining Gilgal Properties Limited.
</p><p>

Highly efficient and administrative office professional with fifteen years of experience in management. Capable with excellent skills in delegating responsibilities to others and supervising and evaluating for effective task completion. Enthusiasm for delivering excellent service to clients.
</p><p>

Furthermore, Solomon Olusodo has a bachelor’s degree in Theology. Being an Assembly Pastor of various branches for more than 20 years under The Word Bible Church at 1, Ganiyu Muraino Close, Ajelogo, Mile 12, Lagos.  Presently Solomon Olosodois the Ogun State Zonal Pastor under The Word Bible Church.
</p><p>
He is married and blessed with many children
</p>
`;

OSUNGBOHUN_OLAWALE=`
<p>
Osungbohun Olawale David is born to the family of Rev. Dr & Dr. mrs Osungbohun on a Monday evening, at Lagos island, Nigeria. His elementary education was cautiously garthered in Lagos State, Nigeria before he left for obafemi awolowo university ( OAU), Ile-ife, Nigeria, Where he is currently pursuing a degree in Dental and Dental Surgery. 
</p><p>
Although, raised in a Christian family, Osungbohun Olawale David in February 2013 genuinely encountered Christ and since became committed to the course of the cross and the propagation of the sweet Gospel of peace. His encouter with Christ furnished in him a personal understanding of God's power to outrightly save a man from sin and the reality of the transforming power of God's knowledge. This becomes his passion, his drive, aspiration and quest, to seeing all whom he comes in contact realise this,  youths and young adults alike.
</p><p>

Hence, Osungbohun Olawale David had been involved in numerous outreaches and in-reaches withing the local jurisdiction of Ondo and Ekiti state, as well as Ife and Modakeke environs (where he currently resides). 
</p><p>
He is currently the Coordinator of National association of Ondo and Ekiti state Christian students (NAOESCS OAU CHAPTER), and the Outreach Coordinator of The glory of God student fellowship (GLOGSFE), and had once been the Convert and Follow up Secretary of GLOGSFE (the fellowship he attends). He also, by means of his God given vision, disciples, coaches, and mentor other young christians to grow in faith and life relevance through the instrumentality of his experience, counselling, teaching and the seasoned sure word of God.
</p><p>
Osungbohun Olawale David had been a seasoned teacher with various secondary schools and tutorial centers. The subject of interest avidly includes; Biology, Chemistry and Physics. His teaching experience spans more than 10 years with schools like; Zenith Ideal secondary schools (presently a part time teacher), Success Impact Tutor (SIT), Pacesetters Tutor and private individuals to mention a few. with high success rate of wards in various scientific field of various higher institution.
</p><p>

Osungbohun Olawale David is also a developing  writer, graphic designer, video editor and still much in the  learning facet of several digital skills relevant to the course of self development and  mission. He also has great knowledge in the agricultural field, this steming from his experience in farming ( basically, cassava and tomatoes) and gari production, where he was the manager of an industrialized gari Factory, suited in the OAU community during the yea 2020 (Corona viruse period).
</p><p>

He is currently the secretary of RATOLF, a foundation laddened with mission via meeting the needs of the needy as well as reaching out to the marginalized with the Gospel of christ
</p><p>

His God's given Mandate is to Strengthen those in Distress, in Debt, and Discontented. Through Spiritual means, Medical means and other relevant aquired skills as it were.
</p>
`;

Dr_ElbieMwenesongole=`
<p>
Elbie Mwenesongole is a certified and international educator and teacher trainer. She specialised as educator in English, Geography, Curriculum development, Teacher Education, and Early Childhood education.
</p><p>
Dr. Elbie worked as secondary school educator for more than 30 years before she started working as a lecturer in the university until retirement. She has been active in the field of education for more than 50 years.
</p><p>
Dr. Elbie obtained her post-graduate degrees in the United States, and South Africa, she is a retired Senior Lecturer and at Northwest University (NWU) Mafikeng, South Africa.
</p><p>
Dr Elbie is dynamic woman of faith with a passion to help abandoned children in her community. She organised workshops, refresher courses and up-skilling, trained ECD teachers in her community to support the less privileged.
</p><p>
Dr. Elbie is an elder at Rhema New Life Church, Mafikeng. She has served in several ministries,such as Sunday School Teacher, Ushering, Cell Group Leader,Ladies Ministry Leader, and Church Advisory Board member. She has also been involved in Discipleship Training of new members, and Counselling Ministry.
</p><p>
Her heartbeat is to make a difference in people’s lives, and connect them to Jesus Christ, our Lord and Saviour. She has been called into a Five-Fold Ministry.
</p><p>
Elbie Mwenesongole holds a Doctorate degree in Teacher Education (D.Ed) fromNorthwest University Mafikeng South Africa, a Master’s degree in Curriculum Development in Early Childhood Development (ECD) from Teachers College, Columbia University, New York City, USA, and a Master’s degree in Adult Education from North-West University, Mafikeng, North-West Province, South Africa. She has a Bachelor’s degree, Urban and Economic Geography from City University of New York.
</p><p>
Dr Elbie Mwenesongoleis blessed with children and grandchildren.
</p>
`;
var team =[
    ['Pastor','Remmy-Greenpasture Adekunle Peter.','(President & Founder of RATOLF)','Pastor_remmy.png',Pastor_remmy],
    ['Minister','Mwaka Peter.','Co-Founder & CEO( RATOLF)','Minister Mwaka Peter.png',Mwaka_peter],
    ['Pastor','Bunmi Johnson','Vice President / C.O.O RATOLF Nigeria.','Bunmi Johnson.png',Bunmi_johnson],
    ['Pastor','Adekunle Joseph Ayannuga','Vice President (RATOLF)','Pastor Adekunle Joseph Ayannuga.png',Pastor_adekunle_j],
 
    ['Dr.','Funmi Andrew: <div class="team_title">Dr.</div>','Associate Director of Programs(RATOLF)','Dr_funmi.png',Dr_funmi],
    
    ['Ms.','Ephrathah Arah James','Director Network Relations','Sister_arah.png',Sis_arah],
    ['','Adegeye Michael Oluyemi','Publicity Assistant (RATOLF)','compassion.jpg',Adegeye_michael],
    ['Pastor','Philemon Mafolabomi','Administrative Manager (RATOLF)','compassion.jpg',Pastor_philemon],
    ['Pastor','Christopher A Okolo','Vice C.O.O RATOLF Nigeria','Pastor_Crist_O.jpg',Christopher_a],
    ['Pastor','Ayooluwa Elisha Dickson','Manager Publicity','Pastor_ayoola.jpg',Pastor_ayooluwa], 
    ['Pastor','Olugbuyi Solomon Olusodo','Vice President / Special Adviser (RATOLF)','Pastor_Gbuyi.png',Pastor_Olugbuyi],
    ['','Osungbohun Olawale David','General Secretary (RATOLF)','Wale_Oshungbohun.png',OSUNGBOHUN_OLAWALE],     
    
   // ['','','','',],
    
    //['','','','',],
];
var Advisory=[
    ['','Adebayo Okeowo, <div class="team_title">Dr. <br>(Ph.D)</div>','Advisory Board (RATOLF)','Adebayo Okeowo.jpeg',Adebayo_okeowo],
    
    ['Dr.','Osungbohun Jacob Jesusrich <div class="team_title">Dr.</div>','Advisory Board (RATOLF)','Dr. Osungbohun Jacob Jesusrich.png',Dr_osungbohun], 
    
    ['Dr.','Michael Olatunji ONI <div class="team_title">Dr.</div>','Advisory Board (RATOLF)','Michael Olatunji ONI.png',Michael_olatunji],
    ['Dr','Elbie Mwenesongole <div class="team_title">Dr. <br>(D.Ed)</div>','Advisory Board (RATOLF)','Dr_Elbie.png',Dr_ElbieMwenesongole],
    
];

//function team_card(a,b,c,d,e)
function team_card(a,arr,aa){
    let content = arr[a];
    let card = `
    <div class="team_card">
        <div class="team_h"></div>
        <div class="team_pic">
            <img class="team_pi" src="./image/${content[3]}" alt="">
        </div>
        <div class="team_profile">
            <div class="team_name">`+content[1]+`</div>
            
            <div class="team_title_2">`+content[2]+`</div>
        </div>

        <img class="team_btn" onclick="bring_more_2(event,${a},'${aa}')" src="./image/btn.png" alt="">

    </div>
    `;

    return card;

    //document.getElementById('card_container').innerHTML=headies+card;
}

    headies = `
    <div class="line"></div>

    <div style="padding: 20px 0;">
    <img style="width:260px" src="./image/meet.png" alt="" srcset="">
    </div>`;
    line = `<div class="line"></div>`;
//team_card(0);
//team.forEach();
var all_team='';adv_team="";
for(i=0;i<team.length;i++){
   all_team +=team_card(i,team,'team');
}
all_team+=line+"<h2>Advisory Board </h2>";
for(i=0;i<Advisory.length;i++){
   all_team +=team_card(i,Advisory,'Advisory');
}
document.getElementById('card_container').innerHTML=headies+all_team+line;