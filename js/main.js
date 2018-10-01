/*$(document).ready(function(){
    $('.menu-title').on('click', function () {
        console.log("click");
        $('.menu-dropdown > *').toggleClass('open-list');
    });
});*/

$(function() {
    console.log( "ready!" );
/*    $( ".menu-title" ).toggle(function() {
        console.log("click");
        var item = $(this).parent().siblings().children('.menu-list').children();
        console.log(item);
        $(item2).addClass('open');
    }, function() {
        $(item2).removeClass('open');
    });*/
    $(".menu-title").click(function(){
        var item = $(this).parent().siblings().children('.menu-dropdown').children();
        console.log(item);
        $(item).toggleClass("open");
    });
});