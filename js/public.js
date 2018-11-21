$(function(){
//导航下拉
    if($(document.body).width() > 1024){
        $(".header").hover(function(e){
            $(".header .s-nav").stop(true,true).slideUp();
    
            $(".header .nav .list li").hover(function(e){
                var e = window.event || e;
                e.stopPropagation();
                $(".header .s-nav").slideDown();
            })
        })
    
        //鼠标移至二级导航
        $(".header .s-nav .list li").hover(function(){
            var index = $(this).index();
            $(".header .nav .list li").eq(index).find("a").addClass("now");
        },function(){
            var index = $(this).index();
            $(".header .nav .list li").eq(index).find("a").removeClass("now");
        })
    }else{


        $(".header .nav .menu").click(function(e){
            var e = window.event || e;
            e.stopPropagation();
            $(".header .nav .mo-nav").stop(true,true).slideToggle();
        })

        $(".header .nav .mo-nav>li>a").click(function(e){
            var e = window.event || e;
            e.stopPropagation();
            if($(this).data("sx")){
                $(this).removeData("sx");
            }else{
                $(this).data("sx","has").parent().siblings().find("a").removeData("sx");
            }

            if($(this).data("sx")){
                e.preventDefault();
                $(this).parent().find(".mo-snav").stop(true,true).slideDown();
                $(this).parent().siblings().find(".mo-snav").slideUp();
            }
            
        })
    }
    $(document.body).click(function(){
        $(".header .nav .mo-nav").slideUp();
    })

    //右侧返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.top').fadeIn();
        }
        else {
            $('.top').fadeOut();
        }
    });

    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},500);
    })


    //底部返回顶部
    $('.footer .foot-nav .box .toTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
})