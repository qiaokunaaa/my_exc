require.config({
	baseUrl:"./js",
	paths:{
		"jquery":"jquery-3.2.0.min"
	}
});
require(['jquery'],function($){
    $(document).ready(function(){
    	$(document.body).append("<h1>成功</h1>");
    });
});

