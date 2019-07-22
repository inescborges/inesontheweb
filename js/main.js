$(document).ready(function() {
  $(".cont").addClass("animation");
  $(".img-container").addClass("img-hide");
  $(".list-title").click(function(){
  if ($(this).closest(".list").length > 0) {
    $(this).closest(".list").toggleClass("list-show");
    $(this).toggleClass("list-title-hide");
    $(this).find(".menu-title").toggleClass("menu-title-hide");
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
