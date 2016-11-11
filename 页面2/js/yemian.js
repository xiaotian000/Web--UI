$(function () {
    $('a').hover(
    function () {
        $(this).stop().animate({"width":"100px"},200);},
    function(){
        $(this).stop().animate({"width":"100px"},200);},
    function(){
        $(this).stop().animate({"width":"100px"},200);}
    )
})
$(document).ready(function () {
    $('a').mouseleave(function () {
        $(this).stop().animate({ "width": "80px" }, 200);}
    )
})