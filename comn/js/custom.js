// 검색창
function popOpen(){
	$("html , body , .search-popup").addClass("fixed");
}
function searchOpen(){
	$("#search").toggle();
}
function searchClose(){
	$("html , body , .search-popup").removeClass("fixed");
}

// 사이드바
function fixedToggle(obj){
	$(obj).toggleClass("active");
	$("html,body").toggleClass("fixed");
	$(".fixed-menu-all").toggleClass("active");
	$(".fixed-menu-all").fadeToggle();
}

// 메뉴바
function menuOpen(){
	$("html , body , .gnb").addClass("fixed");
}
function menuClose(){
	$("html , body , .gnb").removeClass("fixed");
}

// 메뉴바
$(document).on("click" , "header .gnb button" , function(){
	var parents = $(this).closest("li");

	$(this).siblings("dl").stop().slideToggle();
	parents.toggleClass("active");
	parents.siblings("li").removeClass("active");
	parents.siblings("li").find("dl").stop().slideUp();
});

// 관련사이트
$(document).on("click" , ".footer-family button" , function(){
	$(this).siblings().stop().slideToggle();
	$(this).toggleClass("active");
});


	/*
	$(".gnb ul li").hover(function(){
		
		$("header").toggleClass("active");
		$(this).find(".header-menu").stop().slideToggle();
		$(this).toggleClass("active");
		if( $("header").hasClass("active") == true ){
			$("header h1 img").attr("src" , "../comn/img/logo_on.png");
		}else{
			$("header h1 img").attr("src" , "../comn/img/logo.png");
		}
	});
	*/
$(document).on("mouseover",".gnb ul li",function(){
	$("header").addClass("active");
	$(this).siblings().find(".header-menu").removeClass("active");
	$(this).find(".header-menu").addClass("active");
	$(this).addClass("active");
	$("header h1 img.off").hide();
	$("header h1 img.on").show();
});
$(document).on("mouseleave",".gnb ul li",function(){
	$("header").removeClass("active");
	$(this).find(".header-menu").removeClass("active");
	$(this).removeClass("active");
	$("header h1 img.on").hide();
	$("header h1 img.off").show();
});

// 연혁
$(document).on("click" , ".history-tab a" , function(){
	var paret = $(this).parent();
	var index = paret.index();
	var box = $(".history-content .content-box");

	paret.addClass("active");
	paret.siblings().removeClass("active");
	box.eq(index).addClass("active");
	box.eq(index).siblings().removeClass("active");
});