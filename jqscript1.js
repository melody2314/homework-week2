$().ready(function(){
  var tipColor=['red','yellow','orange','green'];
  
  function matchLevel(password){
    if(password.length===0){
        return -1;
    }
	else if(password.length>=1&&password.length<6){
		return 0;
	}
	else if(password.length>=6&&password.length<10){
		return 1;
	}
	else if(password.length>=10&&password.length<16){
		return 2;
	}
	else{
		return 3;
	}
  }

  $("#password>input").keyup(function(){
    var pass = $(this).val();
    var level = matchLevel(pass);
    
    
//    for(var i=0;i<4;i=i+1;){
//       if(level>=i){
//      $("[level='"+i+"']").css("background",tipColor[i]);
//    }
//       else{ 
//      $("[level='"+i"']").css("background","");
//    }  
//    }
    
    
     if(level>=0){
       $("[level='0']").css("background",tipColor[0]);
                 }
      else{ 
     $("[level='0']").css("background","");}
    
    
     if(level>=1){
       $("[level='1']").css("background",tipColor[1]);
                 }
      else{ 
     $("[level='1']").css("background","");}
    
    
      if(level>=2){
       $("[level='2']").css("background",tipColor[2]);
                 }
      else{ 
     $("[level='2']").css("background","");}
    
    
      if(level>=3){
       $("[level='3']").css("background",tipColor[3]);
                 }
      else{ 
     $("[level='3']").css("background","");}
    
      
  });


});