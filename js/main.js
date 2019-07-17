/*$(document).ready(function(){
    $('.menu-title').on('click', function () {
        console.log("click");
        $('.menu-dropdown > *').toggleClass('open-list');
    });
});*/

$(document).ready(function() {
  $(".cont").addClass("animation");
  // $(".list-title").addClass("list-title-hide");
  $("img-container").hide();
  $(".albums").find(".img-container").hide();
  // function showList() {
  //   $(".list-title").removeClass("list-title-hide");
  // }
  $(".list-title").click(function(){
  if ($(this).closest(".albums").length>0) {
    $(this).toggleClass("list-title-hide");
    $(this).find(".menu-title").toggleClass("menu-title-show");
    $(".albums").find(".img-container").delay(1000).toggle();
  }
  if ($("img-container").closest(".albums").length>0) {
    $(this).delay(1000).show();
  }
});
});
