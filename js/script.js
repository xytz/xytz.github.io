/**
 * Created by ��ӭʹ�� on 2016-07-24.
 */
$(function(){
    //ʵ�ֵ�����תЧ��
    $(".nav").singlePageNav({
        offset:70
    });
    //С��Ļ����رյ����˵�
    $(".navbar-collapse a").click(function(){
        $(".navbar-collapse").collapse("hide");
    });
    //ʹ��wow.min.js
    new WOW().init();
	//�����һ������bug 
	setTimeout(function(){
		$(".bootstrap").css("display","block");
	},300);
})