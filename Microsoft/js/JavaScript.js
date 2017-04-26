$(function () {
    var page = 1;//初始化page变量；
    var i = 3;//每版放3组图片；
    var $sliderShow = $(".slider");
    var downwidth = $sliderShow.width();//获取框架宽度，即每次移动的距离；
    var len = $(".silde").find('.item').length;//找到一共几组图片；
    var page_number = Math.ceil(len / i);//找到一共几组版面；
    $("#carousel-left").click(function () { //点击左侧箭头；
        if (!$(".silde").is(":animated")) { //判断是否正在执行动画效果；
            if (page == page_number) { //已经到达最后一个版面，应该跳转到第一个版面；
                $(".silde").animate({ left: '+=' + downwidth * (page_number - 1) }, "slow"); //动画效果向左移动，改变left的值，跳转到第一个版面；
                page = 1;
            } else {
                $(".silde").animate({ left: '-=' + downwidth }, "slow"); //动画效果向左移动，依次改变left的值，到达每一个版面；
                page++;
            }
        }
        return false;
    });
    $("#carousel-right").click(function () { //点击右侧箭头；
        if (!$(".silde").is(":animated")) { //判断是否在执行动画效果；
            if (page == page_number) { //已经到达最后一个版面，应该跳到第一个版面；
                $(".silde").animate({ left: "+=" + downwidth * (page_number - 1) }, "slow"); //动画效果向右移动，改变left的值，移动到第一个版面；
                page = 1;
            } else {
                $(".silde").animate({ left: '-=' + downwidth }, "slow");//动画依次向左移动，到达每一个版面；
                page++;
            }
        }
        return false;
    });
})