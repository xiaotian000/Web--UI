$(function () {
    var page = 1;
    var i = 1;
    var slider_innerShow=$("slider_inner");
    var downwidth=$slider_innerShow.width();
    var len = $(".silde").find('item').length;
    var page_number = Math.ceil(len / i);
    $("#carousel-left").click(function () {
        if (!$(".silde").is(":animated")) {
            if (page == page_number) {
                $(".silde").animate({ left: '0px' }, "slow");
                page = 1;
            } else {
                $(".silde").animate({ left: '-=' + downwidth }, "slow");
                page++;
            }
        }
        return false;
    });
    $("#carousel-right").click(function () {
        if (!$(".silde").is(":animated")) {
            if (page == 1) {
                $(".silde").animate({ left: "-=" + downwidth * (page_number - 1) }, "slow");
                page = page_number;
            } else {
                $(".silde").animate({ left: '+=' + downwidth }, "slow");
                page--;
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