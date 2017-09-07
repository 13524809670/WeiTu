$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})
$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});


	// 楼层导航实现
	var __h = $('#navHeight').height();
	$('.next__page').click(function () {
		var index = Number($(this).attr('data-type'));
		var h = $('.public').eq(index).offset().top - __h;
		// console.log(h)
		animateTop(h);
	});
	// 点击next按钮实现楼层滚动
	$('.navItem').on('click', 'li', function() {
		var index = $(this).index();
		var h = $('.public').eq(index).offset().top - __h;
		animateTop(h);
		$(".navItem").fadeOut(200);
    	$(".mask").fadeOut(200);
		// console.log(index)
	});
	// 滚动动画
	function animateTop(h){
		$('html, body').animate({
			scrollTop: h
		}, 500);
	}


	// 导航开关
	$("#navBtn").click(function(){
		if(!$('.navItem').is(':hidden')){
			$(".navItem").fadeOut(300);
			$(".mask").fadeOut(200);
		}else{
			$(".navItem").fadeIn(300);
			$(".mask").fadeIn(300);
		}
    });
    $(".mask").click(function(){
		$(".navItem").fadeOut(300);
		$(".mask").fadeOut(200);
	});

	


	// 工业博览会
	var swiper = new Swiper('.section-exposition .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
	});

	// 核心产品介绍
	var swiper = new Swiper('.section-product .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        onSlideChangeEnd:function(swiper){ //把当前显示轮播的地址复制到按钮上
        	var index = swiper.activeIndex;
        	var href = $('#banner2-sixe .swiper-slide').eq(index).find('a').attr('href');
        	$('.move-btn a').attr('href', href);
        	// console.log(href)
        }
	});

	// 威图系统概论
	var swiper = new Swiper('.section-overview .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
	});
})


