/*$(document).ready(function(){
    $('.menu-title').on('click', function () {
        console.log("click");
        $('.menu-dropdown > *').toggleClass('open-list');
    });
});*/

$(document).ready(function() {
  $(".cont").addClass("animation");
  $(".img-container").addClass("img-hide");
  // $(".list-title").addClass("list-title-hide");
  // function showList() {
  //   $(".list-title").removeClass("list-title-hide");
  // }
  $(".list-title").click(function(){
  if ($(this).closest(".list").length>0) {
    $(this).closest(".list").toggleClass("list-show");
    $(this).toggleClass("list-title-hide");
    $(this).find(".menu-title").toggleClass("menu-title-hide");
    // $(this).siblings(".img-container").toggleClass("img-show");
    if ($(this).siblings('.img-container').hasClass("img-hide")) {
      $(this).siblings(".img-container").addClass("img-show");
      $(this).siblings(".img-container").removeClass("img-hide");
    } else {
      $(this).siblings('.img-container').addClass("img-hide");
      $(this).siblings(".img-container").removeClass("img-show");
    }
  }
});
});
