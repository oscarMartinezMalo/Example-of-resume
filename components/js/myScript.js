// window.onscroll = function() {myFunction()};
// function myFunction() {
// 	console.log($(document).scrollTop());
//     if (document.body.scrollTop > 4250 || document.documentElement.scrollTop > 4250) {
//         $("#progressbar").removeClass("invisible");
//         $("#progressbar").addClass("progress");

//     }
// }

$(window).scroll(function() {
  $(".myProgress").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) {
      $(".myProgress").addClass("progress");
    }
  });
});