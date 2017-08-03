require.config({
	baseUrl:"./js",
	paths:{
		"jquery":"jquery-3.2.0.min",
		"bootstrap":"bootstrap.min"
	},
	shim:{
		"jquery":{
			exports:"$"
		},
		"bootstrap":{
			exports:"Bootstrap",
			deps:['jquery']
		}
	}
});
require(['jquery','bootstrap'],function($,Bootstrap){
	$(document).ready(function(){
		//导航点击事件初始化
		$('.nav a').click(function (e) {
			e.preventDefault();
			//导航对应数据
			//a0 练习空间
			//a1 知识链接
			//a2 个人信息
			var id = e.target.id;
			//请求后台，返回数据刷新下面div.content

			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
		});
		$("#a0").click();


	});
    
});