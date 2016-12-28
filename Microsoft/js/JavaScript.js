$(function () {
    var page = 1;//初始化page变量；
    var i = 3;//每版放3组图片；
    var $sliderShow = $(".slider");
    var downwidth = $sliderShow.width();//获取框架宽度，即每次移动的距离；
    var len = $(".silde").find('.item').length;//找到一共几组图片；
    var page_number = Math.ceil(len / i);//找到一共几组版面；
    //for (var i = 0; i < len; i++) {
    //    var item = $(".silde").find('.item')[i];
    //    if (i!=0) {
    //        $(item).css('left', 240 * (i + 1));
    //    }

    //}
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
//$(function () { 
//    var page = 1;//初始化page变量 
//    var i = 2;//每版放两组图片 
//    var $pictureShow = $(".pictures4"); 
//    var downwidth = $pictureShow.width();//获取框架内容的宽度，既每次移动的大小 
//    var len = $(".picturescontent4").find('ul').length;//找到一共有几组图片 
//    var page_number = Math.ceil(len / i);//找到一共有多少个版面 
//    $("#symbol4b").click(function () { 
//        if (!$(".picturescontent4").is(":animated")) {//判断是否正在执行动画效果 
//            if (page == page_number) {//已经到最后一个版面了,如果再向后，必须跳转到第一个版面。 
//                $(".picturescontent4").animate({ left: '0px' }, "slow");//通过改变left值，跳转到第一个版面 
//                page = 1; 
//            } else { 
//                $(".picturescontent4").animate({ left: '-=' + downwidth }, "slow");//通过改变left值，达到每次换一个版面 
//                page++; 
//            } 
//        } 
//        return false; 
//    }); 
//    $("#symbol4a").click(function () { 
//        if (!$(".picturescontent4").is(":animated")) { 
//            if (page == 1) {//已经到第一个版面了,如果再向前，必须跳转到最后一个版面 
//                $(".picturescontent4").animate({ left: '-=' + downwidth * (page_number - 1) }, "slow");//通过改变left值，跳转到最后一个版面 
//                page = page_number; 
//            } else { 
//                $(".picturescontent4").animate({ left: '+=' + downwidth }, "slow");//通过改变left值，达到每次换一个版面 
//                page--; 
//            } 
//        } 
//        return false; 
//    }); 
//}); 