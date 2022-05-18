$(".nav__menu").on("click", function(){
    $(".nav__menu").toggleClass("close-btn");
    $(".nav").toggleClass("open-menu");
    $("body").toggleClass("fixed");
  });