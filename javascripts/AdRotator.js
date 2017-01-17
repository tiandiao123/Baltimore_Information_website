// Fig. 12.5: dom.js 
// Script to demonstrate basic DOM functionality.  
var temp=0;
var imagenode;
var slideleft;
var slideright;
var slideleftimage;
var sliderightimage;
var imagearray=["files/Baltimore-harbor-winter-nig.jpg","files/1city_hall_baltimore.jpg","files/rendering-by-what-works-studio-wash-monument.jpg"];
var imageinfo=["This is Innner Harbor","This is the Baltimore Train Station","This is the Winter of the Batimore"];
var buttonsarray=["button1","button2","button3"];
var urlarray=["http://www.baltimorecity.gov/","https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=BAL","http://baltimore.org/"];

function start()
{   
    imagenode=document.createElement("img");
    imagenode.setAttribute("id","imagenode");
    
    imagenode.src="files/Baltimore-harbor-winter-nig.jpg";
    document.getElementById("imagesetting").appendChild(imagenode);

    slideleftimage=document.createElement("img");
    sliderightimage=document.createElement("img");
    slideleftimage.setAttribute("id","slideleftimage");
    sliderightimage.setAttribute("id","sliderightimage");
    sliderightimage.src="files/next_blue.png";
    slideleftimage.src="files/prev_blue.png";
    document.getElementById("imagesetting").appendChild(slideleftimage);
    document.getElementById("imagesetting").appendChild(sliderightimage);

    sliderightimage.addEventListener("click",function(){changepicture(1);},false);
    slideleftimage.addEventListener("click",function(){changepicture(2);},false);


    
    
    document.getElementById("button1").addEventListener("click",function(){display(imagearray[0]);} ,false);
    document.getElementById("button2").addEventListener("click",function(){display(imagearray[1]);} ,false);
    document.getElementById("button3").addEventListener("click",function(){display(imagearray[2]);} ,false);
    
    imagenode.addEventListener("click",function(){Givenbannerurl(imagenode.src);},false);

    document.getElementById("tooltip").innerHTML=imageinfo[temp];

    
} // end function start

// call start after the window loads
window.addEventListener( "load", start, false );


function Givenbannerurl(imagefile){
     var index=temp%3;
     window.open(urlarray[index]);
     
}



var recordbutton;
function OnMouseIn (x){
   recordbutton=x.src;
   x.setAttribute("src","files/bullet_orange.png");
}

function OnMouseOut (x){
   
    x.setAttribute("src",recordbutton);

}


var timeseconds=0;
function imageanimation(){

    
    var check=true;
    
    var interval_value=window.setInterval("run()",1000);

}



function run(){
      timeseconds=timeseconds+1000;
      timeseconds=timeseconds%15000;
      
      
      
      if(timeseconds==5000){

        display(imagearray[1]);

      }
      else if(timeseconds==12000){

           display(imagearray[2]);
            
      }
      else if(timeseconds==0){
          display(imagearray[0]);

      }
      else{

      }
      
}

function changepicture(i){
  
    temp=temp+i;
    temp=temp%3;

    $(document).ready(function(){
        
        $("#imagenode").fadeOut(500,function(){ imagenode.setAttribute("src",imagearray[temp]);});
        //imagenode.src=imagefile;
        $("#imagenode").fadeIn(500);
    });
      
    //imagenode.setAttribute("src",imagearray[temp]);
    
    if(temp==0){
      timeseconds=0; 
    }
    else if(temp==1){
        timeseconds=5000;
    }
    else if(temp==2){
      timeseconds=12000;
    }
   
    
    for(var i=0;i<3;i++){
    document.getElementById(buttonsarray[i]).setAttribute("src","files/bullet_gray.png");
   
    }
    document.getElementById(buttonsarray[temp]).setAttribute("src","files/bullet_blue.png");

    document.getElementById("tooltip").innerHTML=imageinfo[temp];
    
    
}


function display(imagefile){

    //var element=document.getElementById("buttonid");
    $(document).ready(function(){
        
        $("#imagenode").fadeOut(500,function(){ imagenode.src=imagefile;});
        //imagenode.src=imagefile;
        $("#imagenode").fadeIn(500);
    });
      
    //imagenode.src=imagefile;

    


     for(var i=0;i<3;i++){
      document.getElementById(buttonsarray[i]).setAttribute("src","files/bullet_gray.png");
    }
      
     for(var i=0;i<imagearray.length;i++){
         if(imagefile==imagearray[i])
          {    temp=i;
               document.getElementById(buttonsarray[temp]).setAttribute("src","files/bullet_blue.png");
               document.getElementById("tooltip").innerHTML=imageinfo[temp];
           }
      }

      if(temp==0){
         timeseconds=0; 
       }
      else if(temp==1){
          timeseconds=5000;
      }
      else if(temp==2){
         timeseconds=12000;
      }

}

