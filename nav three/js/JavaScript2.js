$(function(){ 
$(".nav .nav-list li").hover(function(){ 
$(this).find(".nav-down").stop().slideDown({duration:500,easing:"easeOutBounce"}) 
},function(){ 
$(this).find(".nav-down").stop().slideUp({duration:500,easing:"easeOutBounce"}) 
}); 
});
