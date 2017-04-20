function fixed_nav() {
    if ($(document).scrollTop() > 150) {
        $("#fixed_nav").slideDown(300);
    } else {
        $("#fixed_nav").fadeOut(100);
    }
}

$(function () {
    $(document).scroll(function () {
        fixed_nav();
    })
})