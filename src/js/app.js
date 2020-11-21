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
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})



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