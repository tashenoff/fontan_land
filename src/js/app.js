$(function () {
  objectFitImages();
});



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  padding: 23,
  stagePadding: 50,
  autoplay: true,
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
      items: 5
    }
  }
})


// if ($(window).width() < 1280) {
//   owl.trigger('stop.owl.autoplay');
// } else{
//   owl.trigger('play.owl.autoplay');
// }


if (window.innerWidth > 768) {
  owl.trigger('stop.owl.autoplay');
}


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






$(".arrow__down").on('click', function (e) {
  e.preventDefault();
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: ($(target).offset().top)
  }, 1500);
});

$(function () {

  var target_block = $(".number"); // Ищем блок 
  var blockStatus = true;

  $(window).scroll(function () {

    var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

    if (scrollEvent && blockStatus) {

      blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

      $({ numberValue: 0 }).animate({ numberValue: 96 }, {

        duration: 1500, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
        easing: "linear",

        step: function (val) {

          $(".number").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

        }

      });

    }

  });

});