$(document).ready(function () {
    var index = window.location.href.split("/").length - 1;
    var href = window.location.href.split("/")[index];
    $(".nav .nav-list li a[href='" + href + "']").addClass("on");
    var $li_a = $(".nav .nav-list li a.on");
    var li_width = $li_a.outerWidth();
    var li_left = $li_a.position().left;
    $(".nav-content .nav-line").css({ width: li_width, left: li_left });
    $(".nav .nav-list li").hover(function () {
        var li_width = $(this).outerWidth();
        var li_left = $(this).position().left;
        console.log(li_width + ',' + li_left);
        $(".nav-content .nav-line").stop().animate({ "width": li_width, "left": li_left }, { duration: 1500, easing: "easeOutElastic" });
    }, function () {
        $(".nav-content .nav-line").stop().animate({ "width": li_width, "left": li_left }, { duration: 1500, easing: "easeOutElastic" });
    });
});