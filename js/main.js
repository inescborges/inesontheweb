/*$(document).ready(function(){
    $('.menu-title').on('click', function () {
        console.log("click");
        $('.menu-dropdown > *').toggleClass('open-list');
    });
});*/

$(function() {
    console.log( "ready!" );
    $(".menu-title").click(function(){
        var item = $(this).parent().siblings().children('.menu-dropdown').children();
        console.log(item);
        $(item).toggleClass("open");
    });
});
