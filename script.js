
function myfunction() {
  var x = document.getElementById("menubar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  showGoToTopButton();
 // animateBlocks();
}
function showGoToTopButton() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 500) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display= "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}