$(document).ready(function () {
    $(".button").click(function () {
        location.href = 'http://www.baidu.com';
    });
    $(".controls").click(function () {
        $("input").change(function () {
            $("em").css("background-position", "url(https://www.lgstatic.com/lp/static/images/check_8486fe6.png) left -12px no-repeat;");
        });       
    });
})