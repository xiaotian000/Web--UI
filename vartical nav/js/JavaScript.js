$(document).ready(function () {
    $(".VerticalNav>div>div:first-child").click(function () {
        $xy = $(".VerticalNav>div>div:first-child");
        $("xy").not(this).children("i.fa-angle-right").css({ "transform": "rotate(0deg)", "color": "#000000" }).attr("leng", "")
        if ($(this).children("i.fa-angle-right").attr("leng") != "s") {
            $(this).children("i.fa-angle-right").attr("leng", "s")
            $(this).children("i.fa-angle-right").css({"transform":"rotate(90deg)","color":"#f9579e"})
        } else {
            $(this).children("i.fa-angle-right").attr("leng", "")
            $(this).children("i.fa-angle-right").css({"transform":"rotate(0deg)","color":"#000000"})
        }
        $($xy).not(this).siblings("[name='xy']").stop().slideUp(400)
        $(this).siblings("[name='xy']").slideToggle(400)
    })
    $VerticalNav_scdj = null;
    $(".VerticalNav>div>div:last-child>div").click(function () {
        $($VerticalNav_scdj).css("background-color", "white");
        $(this).css("background-color", "#00ff90");
        $VerticalNav_scdj=$(this)
    })
})
