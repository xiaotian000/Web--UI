$(function () {
    $(".nav-list li a").hover(function () {
        $(this).stop().animate({ "margin-top": -40 }, 200)
    }, function () {
        $(this).stop().animate({ "margin-top": 0 }, 200)
    });
});