var lap= document.querySelector(".lap");
var reset= document.querySelector(".reset");
var run= document.querySelector(".run");
var stop= document.querySelector(".stop");
var resume= document.querySelector(".resume");

var text1= document.querySelector("#lbl");

document.addEventListener('click', clicked);
var task;
var ms = 0,id,lapNo = 0,hh=0,mm=0,ss=0,a=0;

function clicked(e)
{
    if(e.target== run)
    {
        run.classList.add('hide')
        stop.classList.remove('hide');
        
        stop.disabled= false;


        // closk start
        task =setInterval(function () {
            ms=ms+10;
            if(ms>999)
            {
              ms=0;
              ss=ss+1;
            }
            if(ss>60)
            {
              ss=0;
              mm=mm+1;
            }
            if(mm>60)
            {
              mm=0;
              hh=hh+1;
            }
        
            if(ss<10)
            {
              sss="0"+ss;
            }
            else
            sss=ss;
            if(mm<10)
            {
              mmm="0"+mm;
            }
            else
            mmm=mm;
            if(hh<10)
            {
              hhh="0"+hh;  
            }
            else
            hhh=hh;
            str = hhh + ":" + mmm + ":" + sss + ":" + ms;
            text1.innerText = str;
          }, 10);
        // clock end

    }
    if(e.target == stop)
        {
            // stop.classList.add('hide')
            // run.classList.remove('hide');
            lap.classList.add('hide');
            reset.classList.remove('hide');
            stop.classList.add('hide');
            resume.classList.remove('hide');
            stop.disabled= true;
            clearInterval(task);

        }
        if(e.target == reset)
        {
            var ull= document.querySelector("ul");
            reset.classList.add('hide');
            lap.classList.remove('hide');
            stop.classList.add('hide');
            resume.classList.add('hide');
            run.classList.remove('hide');
            ms=0;
            task=0; ss=0; mm=0; h=0;
            a=0;
            text1.innerText= '00:00:00:00';
            ull.innerHTML= null;
        }

    if(e.target == resume)
    {
        stop.classList.remove('hide');
        resume.classList.add('hide')
        run.classList.add('hide')
        stop.classList.remove('hide');
        reset.classList.add('hide');
        lap.classList.remove('hide');
        stop.disabled= false;


        // closk start
        task =task =setInterval(function () {
            ms=ms+10;
            if(ms>999)
            {
              ms=0;
              ss=ss+1;
            }
            if(ss>60)
            {
              ss=0;
              mm=mm+1;
            }
            if(mm>60)
            {
              mm=0;
              hh=hh+1;
            }
        
            if(ss<10)
            {
              sss="0"+ss;
            }
            else
            sss=ss;
            if(mm<10)
            {
              mmm="0"+mm;
            }
            else
            mmm=mm;
            if(hh<10)
            {
              hhh="0"+hh;  
            }
            else
            hhh=hh;
            str = hhh + ":" + mmm + ":" + sss + ":" + ms;
            text1.innerText = str;
          }, 10);
    }
    if(e.target== lap)
    {
        if(text1.innerText != "00:00:00:00")
        {
        a++;
        var ull= document.querySelector("ul");
        var lii= document.createElement('li');
        var pp= document.createElement('p');
        var ppp= document.createElement('p');
        pp.innerText= "lap "+a;
        ppp.innerText= text1.innerText;
        console.log(text1.innerText);
        ull.appendChild(lii);
        lii.appendChild(pp);
        lii.appendChild(ppp);
        }
        
    }


}