/*
var $=function(secelet){
	var id=secelet.substring(1);
	return document.getElementById(id);
}*/

/*var $=function(select){
	var className=select.substring(1);//取到classname字符串从第一位到最后一个
	var reg=eval("/(^|\\s)"+className+"(\\s|$)/i");//搜寻变量classroom，将正则字符化再用eval拼接
	var arr=[];//将符合要求的放入空数组
	var oEl=document.getElementsByTagName('*');
	for(var i=0;i<oEl.length;i++){//循环所有类看是否符合正则形式
		if(reg.test(oEl[i].className)){
			arr.push(oEl[i]);//将符合要求的放入数组
		}
	}
	return arr;//把数组返回给函数
}*/
/* $('标签名称')*/

/*var $=function(select){
	return document.getElementsByTagName(select);
}*/


var $=function(select){
	var fa=select[0];
	if(fa=="#"){
		var id=select.substring(1);
		return document.getElementById(id);
	}
	if(fa=="."){
		var className=select.substring(1);
		var reg=eval("/(^|\\s)"+className+"(\\s|$)/i");
		var oEle=document.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<oEle.length;i++){
			if(re.test(oEle[i].className)){
				arr.push(oEle[i]);
			}
		}
		return arr;
	}
	else {
		return document.getElementsByTagName(select);
	}

}
//封装工厂函数  根据CSS的语法规则返回dom对象