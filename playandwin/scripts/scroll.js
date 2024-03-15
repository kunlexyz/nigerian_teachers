
    window.onload= function (){
        //var im = document.getElementsByClassName('ww')[0].offset
        var wid = 0;
        for(i=0;i<document.getElementsByClassName('ww').length;i++){
            wid += 201;
        }
        document.getElementById('sleed').style.width=(wid+10)+'px';
        
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
        
                ReachedMaxScroll = DivElmnt.scrollLeft >= (DivElmnt.scrollWidth - DivElmnt.offsetWidth-5);
                //console.log('go-left -'+DivElmnt.scrollLeft+'-'+DivElmnt.scrollWidth+'-'+DivElmnt.offsetWidth);
            }
            else {
                ReachedMaxScroll = (DivElmnt.scrollLeft <= 0)?false:true;
                /*
                DivElmnt.scrollTop = PreviousScrollTop;
                PreviousScrollTop--;
            */
            element.scrollLeft -= 2;
            //console.log('right');
            }
          //element.scrollTop += 10;
        }
        var myVar = setInterval(myFunction,50);
        }