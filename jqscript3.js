$().ready(function(){
  $("input").mouseover(function(){
    $(".hint").css("display","block")
  });
  $("input").mouseout(function(){
    $(".hint").css("display","none")
  });
});