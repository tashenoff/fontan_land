$(function () {
  objectFitImages();
});



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,

  dots: true,
  padding: 23,
  stagePadding: 50,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: false,
      autoplayTimeout: 40000,
    },
    600: {
      items: 3,
      autoplay: false,
    },
    1000: {
      items: 4
    },

    1400:{
      items: 5
    }
  }
})



function externalLinks() {
  links = document.getElementsByTagName("a");
  for (i=0; i<links.length; i++) {
    link = links[i];
    if (link.getAttribute("href") && link.getAttribute("rel") == "external")
    link.target = "_blank";
  }
 }
 window.onload = externalLinks;



$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});





$('.owl-carousel').each(function() {
  
  $(this).find('.owl-dot').each(function(index) {
 
    $(this).attr('aria-label', index + 1);
  });
});


$(".arrow__down").on('click', function (e) {
  e.preventDefault();
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: ($(target).offset().top)
  }, 1500);
});

$(function () {

  var target_block = $(".number"); 
  var blockStatus = true;

  $(window).scroll(function () {

    var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

    if (scrollEvent && blockStatus) {

      blockStatus = false; 

      $({ numberValue: 0 }).animate({ numberValue: 96 }, {

        duration: 1500, 
        easing: "linear",

        step: function (val) {

          $(".number").html(Math.ceil(val)); 

        }

      });

    }

  });

});