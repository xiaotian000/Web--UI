﻿$(function () {
    var index = window.location.href.split("/").length - 1;
    var href = window.location.href.split("/")[index].substr(0, 4);
    if (href.lenght > 0) {
        $(".nav li a[href^='" + href + "']").addClass("on");
    } else {
        $(".list li a[href^='index']").addClass("on");
    }
});