this.fixed_nav = function () {
    if ($(document).scrollTop() > 150) {
        $(".fixed_nav").slideDown(300);
    } else {
        $(".fixed_nav").fadeOut(100);
    }
}
