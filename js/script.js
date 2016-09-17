/**
 * Created by 欢迎使用 on 2016-07-24.
 */
$(function(){
    //实现导航跳转效果
    $(".nav").singlePageNav({
        offset:70
    });
    //小屏幕点击关闭导航菜单
    $(".navbar-collapse a").click(function(){
        $(".navbar-collapse").collapse("hide");
    });
    //使用wow.min.js
    new WOW().init();
	//解决第一屏闪退bug 
	setTimeout(function(){
		$(".bootstrap").css("display","block");
	},300);
})