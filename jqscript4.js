// $().ready(function(){
//   $("td[rowspan='2']").click(function(){
//    $(this).parent().children("[rowspan='2']").css("background", "lightgreen");
// });
  
// });
          
$().ready(function(){
  $("td[colspan='2']").click(function(){
  $("td:not([colspan='2'])").toggleClass("highlight")
  
});
//   $("td").click(function(){
//     $(this).text("cool")
// // 	console.log("Text: " + $(this).parent().text());
// });
// $("td").click(function(){
// // 	console.log("HTML: " + $(this).parent().html());
// });

});