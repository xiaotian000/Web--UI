
$(function () {
    $(".nav .nav-list li").hover(function () {
        $(this).find(".nav-down").stop().slideDown()
    }, function () {
        $(this).find(".nav-down").stop().slideUp()
    });
});