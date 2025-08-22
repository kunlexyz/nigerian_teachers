// file name: slider_top.js
// date: 24-03-2024

// How to use ai to write code
//https://www.youtube.com/watch?v=rvHI6ZG4Jc4&pp=ygUXaG93IHRvIHVzZSBhaSBpbiBjb2Rpbmc%3D

function slidin_mobile(x, y) {
    document.getElementsByClassName('slidis_m')[x];;
    $('.slidis_m').css({ 'z-index': '1', 'display': 'none' });
    $('.slidis_m:eq(' + x + ')').css({ 'z-index': '1', 'display': 'block' })
    //document.getElementsByClassName('slidis_m')[x]
    $('.slidis_m:eq(' + y + ')').css({ 'z-index': '2', 'display': 'block', 'left': '-365px' });

    $('.slidis_m:eq(' + y + ')').animate({ 'left': '0px' });
}
//slidin_mobile(0,1);
function test_() {
    if (window.innerWidth < 361) {
        if (wheeler == (document.getElementsByClassName('slidis_m').length - 1)) {
            slidin_mobile(wheeler, 0);
            wheeler = 0;
        } else {
            console.log(wheeler);
            slidin_mobile(wheeler, (wheeler + 1));
            wheeler++;
        }
        if (wheeler == 0) { crys_m1_fun(); }
        else if (wheeler == 1) { testW_1(); }
        else if (wheeler == 2) { testW_2(); }
    }
}
wheeler = 0;
setInterval(function () { test_(); }, 4000)
// setInterval(function(){
//     if(wheeler==(document.getElementsByClassName('slidis_m').length-1)){
//         slidin_mobile(wheeler,0);
//         wheeler=0;
//     }else{
//         console.log(wheeler);
//         slidin_mobile(wheeler,(wheeler+1));
//         wheeler++;
//     }
// },5000);

function testW_1() {
    moveIt(
        'slid_2x1',
        { 'margin-left': '-555px' },
        { 'margin-left': '20px' },
        { 'margin-left': '0px' }
    );
    moveIt(
        'slid_2x2',
        { 'margin-left': '555px' },
        { 'margin-left': '-20px' },
        { 'margin-left': '0px' }
    );
    moveIt(
        'slid_2x3',
        { 'margin-left': '-555px' },
        { 'margin-left': '20px' },
        { 'margin-left': '0px' }
    );
}
function testW_2() {
    moveIt(
        'slid_3x1',
        { 'margin-left': '-555px' },
        { 'margin-left': '20px' },
        { 'margin-left': '0px' }
    );
    moveIt(
        'slid_3x2',
        { 'margin-left': '555px' },
        { 'margin-left': '-20px' },
        { 'margin-left': '0px' }
    );
    moveIt(
        'slid_3x3',
        { 'margin-top': '555px' },
        { 'margin-top': '-50px' },
        { 'margin-top': '-20px' }
    );
}
function crys_m1_fun() {
    document.getElementById('crom4').innerHTML = '';
    $('#crom1').css({
        top: '250px', left: '650px', width: '10px',
        "transform": "rotate(0deg)", rotation: 0
    });
    $('#crom1').animate(
        {
            width: '150px', rotation: 360
        },
        {
            duration: 1000, step: function (n, f) {
                $(this).css({ "transform": "rotate(" + n + "deg)" });
            }
        }
    );

    $('#crom3').css({
        top: '450px', left: '400px', width: '50px',
        "transform": "rotate(0deg)", rotation: 0,
        opacity: '0.1'
    });
    $('#crom3').delay(1000).animate(
        {
            width: '500px', top: '100px',
            left: '250px', opacity: '1', rotation: 360
        },
        {
            duration: 1000, step: function (n, f) {
                $(this).css({ "transform": "rotate(" + n + "deg)" });
            }
        }
    );
    setTimeout(ty4_m, 2001);
}


crys_m1 = 0;
crys_m1_txt = `We believe in responsible printing practices and strive to minimize our environmental footprint through eco-friendly materials and processes.`;
function ty4_m() {
    var res = crys_m1_txt.substring(0, crys_m1);
    document.getElementById('crom4').innerHTML = res;
    crys_m1 = crys_m1 + 3;
    if (crys_m1 > (crys_m1_txt.length + 1)) {
        crys_m1 = 0;
    } else {
        setTimeout(ty4_m, 60);
    }
}

/*
At PrintCraft Studios, we blend creativity with precision to bring your visions to life. As a premier printing company, we specialize in delivering top-notch printing solutions tailored to meet your needs, whether personal or professional. From business cards to banners, invitations to promotional materials, we're your one-stop destination for all things print.

Our Services:

Business Printing: Impress clients and make a statement with our high-quality business printing services. From business cards to letterheads, we ensure every detail reflects your professionalism and brand identity.

Marketing Materials: Elevate your marketing game with our range of eye-catching materials. From brochures to flyers, posters to banners, we help you stand out from the crowd and leave a lasting impression.

Event Printing: Make your events memorable with our custom event printing solutions. Whether it's wedding invitations, party favors, or conference materials, we add a touch of elegance and sophistication to every occasion.

Personalized Gifts: Celebrate life's special moments with our personalized gift options. From custom photo albums to personalized mugs, we help you create meaningful gifts that are sure to be treasured.

Why Choose PrintCraft Studios?

Quality Assurance: We are committed to delivering top-notch quality on every project, ensuring crisp, vibrant prints that exceed your expectations.

Fast Turnaround: Need it fast? We've got you covered. With our efficient production process, we deliver your prints promptly without compromising on quality.

Expert Team: Our team of experienced professionals is dedicated to providing personalized service and expert guidance every step of the way.

Sustainability: We believe in responsible printing practices and strive to minimize our environmental footprint through eco-friendly materials and processes.

Get Started Today

Ready to bring your ideas to life? Contact PrintCraft Studios today to discuss your printing needs and let us help you make a lasting impression. Quality prints, personalized service – that's the PrintCraft Studios promise.

------------------------------------
Award Making

"Embrace Excellence: Elevate Your Achievements with Our Award-Making Services.

At [Company Name], we understand the power of recognition. That's why we specialize in crafting exquisite awards that honor excellence and inspire greatness. Whether you're celebrating corporate milestones, academic achievements, or sports triumphs, our expert craftsmen are dedicated to creating timeless pieces that embody prestige and significance.

Why Choose Us?

Unmatched Craftsmanship: Each award we create is meticulously crafted with attention to detail and precision, ensuring a flawless finish that reflects the importance of the occasion.

Customization Options: From elegant trophies to stunning plaques, we offer a wide range of customization options to suit your specific needs and preferences. Add your logo, engrave a heartfelt message – the possibilities are endless.

Quality Materials: We believe in using only the finest materials to ensure the longevity and beauty of our awards. From gleaming metal to exquisite crystal, we source materials of the highest caliber for truly exceptional results.

Timely Delivery: With our efficient production process, we deliver your awards on time, every time. Whether you need a single piece or a large batch, we'll work tirelessly to meet your deadlines without compromising on quality.

Make Your Mark with [Company Name]

Celebrate achievements, inspire greatness – choose [Company Name] for award-making services that exceed expectations. Let us help you honor excellence and create lasting memories. Contact us today to discuss your project and discover the difference of working with the best in the business."

-------------------------------------
ABOUT PAGE

**About Crystal Animation**

Welcome to Crystal Animation, where creativity knows no bounds and imagination comes to life. As a dynamic and versatile company, we specialize in an array of creative endeavors, ranging from printing and crafting to graphics, fashion, and supplies. 

**Our Mission**

At Crystal Animation, our mission is simple: to inspire creativity and innovation in everything we do. Whether it's crafting a custom print, designing captivating graphics, curating the latest fashion trends, or providing top-quality supplies, we are committed to excellence in every aspect of our business.

**Our Expertise**

With years of experience and a team of skilled artisans, designers, and craftsmen, we pride ourselves on our ability to bring your ideas to life. From vibrant prints to intricate crafts, eye-catching graphics to stylish fashion pieces, and reliable supplies, we offer a diverse range of services to meet your creative needs.

**What Sets Us Apart**

What sets Crystal Animation apart is our unwavering dedication to quality, creativity, and customer satisfaction. We believe in going above and beyond to exceed expectations, delivering exceptional products and services that inspire and delight.

**Our Promise**

When you choose Crystal Animation, you can expect:

- **Quality:** We use only the finest materials and employ the highest standards of craftsmanship to ensure the quality and durability of our products.

- **Creativity:** With our team of talented professionals and cutting-edge technologies, we push the boundaries of creativity to deliver unique and innovative solutions.

- **Customer Satisfaction:** Your satisfaction is our top priority. We strive to provide personalized service, timely delivery, and unparalleled support to ensure a seamless and enjoyable experience.

**Join Us on Our Creative Journey**

Whether you're looking to add a personal touch to your home décor, elevate your brand with stunning graphics, stay on-trend with the latest fashion pieces, or stock up on essential supplies, Crystal Animation is here to help you unleash your creativity and make your vision a reality. Join us on our creative journey and let's bring your ideas to life together.
*/