$(function(){
//导航下拉
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