
$(function () {
    var winHeight = $(document).scrollTop();

    $(window).scroll(function () {
        var scrollY = $(document).scrollTop();
        if (scrollY > 550) {
            $('.fixed_nav').addClass('hiddened');
        }
        else {
            $('.fixed_nav').removeClass('hiddened');
        }
        if (scrollY > winHeight) {
            $('.fixed_nav').removeClass('showed');
        }
        else {
            $('.fixed_nav').addClass('showed');
        }
    });
});