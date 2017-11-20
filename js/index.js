//bootlint.showLintReportForCurrentDocument([]);
  //轮播图
  (function(){
     var count=0,flag=true,time=null;
     $(".prev").click(function(){
		 clearInterval(time);
	   scro(-1);
	 });
     $(".next").click(function(){
		 clearInterval(time);
	   scro(1);
	 });
     function scro(speed){
	   if(flag){
	     flag=false;
		 count=count+speed;
		 $(".scroll-top>li").css("transform","rotateX("+count*90+"deg)");
		 setTimeout(function(){
		   flag=true;
		 },1300)
	   }
	 } 
      timer=setInterval(function(){
	   scro(-1)
	 },3000);
  })();
  //淡入淡出
  (function(){
	  $aImg=$(".a-right>div>div");
	  n=0;
     setInterval(function(){
        
		  $aImg.eq(n).animate({opacity:1},1000).siblings().animate({opacity:0},1000);
          n++;
		if(n>$aImg.length-1){n=0}
	    
	 },2000)
   })();
   //滚动显示
  (function(){
     $(window).scroll(function(){
		 
	   if(parseInt($(this).scrollTop())>=1200){console.log("a");
	     $(".bot-row>div:nth-child(4n+3)").animate({opacity:1},1000);
		 $(".bot-row>div:nth-child(4n+1)").animate({opacity:1},1800);
		 $(".bot-row>div:nth-child(2n+2)").animate({opacity:1},1400);
	   }
	 }) 
   })();
   //倒计时
   (function(){
      function showTime(){
		 var target=new Date("2017/12/20");
		 var now=new Date();
		 var s=parseInt((target-now)/1000);
		 var d=parseInt(s/3600/24);
		 var h=parseInt(s%(3600*24)/3600);
		 var m=parseInt(s%3600/60);
		 var s=s%60;
		 s=s<10?"0"+s:s;
		 m=m<10?"0"+m:m;
		 h=h<10?"0"+h:h;
		 d=d<10?"0"+d:d;
		var html="";
		html+=`<div><span>${d}</span><p><i>Days</i></p></div>
			 <div><span>${h}</span><p><i>Hours</i></p></div>
			 <div><span>${m}</span><p><i>Minutes</i></p></div>
			 <div><span>${s}</span><p><i>Seconds</i></p></div>`;
	    $(".timer").html(html);
	  }
	  /*function valChange(){
		var oldVal=$(".timer span").text();
		if($(".timer span").text()!=oldVal){
		  $(".timer span").css("opacity",0);
		  $(".timer span").animate({opacity:1},500)
		}
	  }*/
	  
	  setInterval(showTime,1000);
      
   })();
   (function(){
	   var flag=true;
      $(".main-bot3-img img").mouseover(function(){
		$(this).css("transform","rotateY(180deg)");
	  })
	  $(".main-bot3-img img").mouseout(function(){
	    if(flag){$(this).css("transform","rotateY(0deg)");
		flag=false;
		setTimeout(function(){flag=true},10)}
	  })
    })()