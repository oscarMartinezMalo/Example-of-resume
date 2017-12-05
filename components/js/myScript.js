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

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
  });
});

// Slide Smooth in Elements
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) {
      $(this).addClass("slide");
    }
  });
});