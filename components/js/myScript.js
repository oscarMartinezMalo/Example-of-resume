// window.onscroll = function() {myFunction()};
// function myFunction() {
// 	console.log($(document).scrollTop());
//     if (document.body.scrollTop > 4250 || document.documentElement.scrollTop > 4250) {
//         $("#progressbar").removeClass("invisible");
//         $("#progressbar").addClass("progress");

//     }
// }

$(window).scroll(function() {
  $(".progress").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) {
		$("#js").attr("data-percentage","80");     
   		$("#html").attr("data-percentage","20");  
		$("#less").attr("data-percentage","50");     
   		$("#sass").attr("data-percentage","70");  
		$("#csharp").attr("data-percentage","100");     
   		$("#php").attr("data-percentage","90");  
		$("#nodejs").attr("data-percentage","40");     
   		$("#angular").attr("data-percentage","30"); 
    }
  });
});