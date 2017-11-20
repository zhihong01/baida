     function test($el,reg,text){
	   $el.blur(function(){
		 console.log($el.val());
	   //var reg=/^[\u4e00-\u9fa5_a-zA-Z]+$/;
	   if($el.val()==""){
	     $el.css("background","yellow").attr("placeholder","请输入...");
	   }else if(!reg.test($el.val())){
	     $el.val("");
	     $el.css("background","yellow").attr("placeholder",text)
	   }else{
	     $el.css("background","white")
	   }
	 });
	 }
     test($("#uname"),/^[\u4e00-\u9fa5a-zA-Z]+$/,"请输入字母或汉子");
     test($("#subject"),/^[\u4e00-\u9fa5a-zA-Z]+$/,"请输入字母或汉子");
     test($("#email"),/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,"请输入正确的email格式");
     test($("#phone"),/(\+86|0086)?\s*1[34578]\d{9}/,"请输入正确的手机格式");
     test($(".ipt textarea"),/./,"不太明白您的意思");