$(document).ready(function () {
    $(".button").click(function () {
        location.href = 'http://www.baidu.com';
    });
    $(".controls").click(function () {
        $("input").attr('checked');
    });
    $(".controls").change(function () {
        $("input").css();
    });
})