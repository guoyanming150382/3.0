
/*var $=function(secelet){
	var id=secelet.substring(1);
	return document.getElementById(id);
}*/

/*var $=function(select){
	var className=select.substring(1);//取到classname字符串从第一位到最后一个
	var reg=/(^|\s)b1(\s|$)/ig;//b1的正则形式
	var arr=[];//将符合要求的放入空数组
	var oEl=document.getElementsByTagName('*');
	for(var i=0;i<oEl.length;i++){//循环所有类看是否符合正则形式
		if(reg.test(oEl[i].className)){
			arr.push(oEl[i]);//将符合要求的放入数组
		}
	}
	return arr;//把数组返回给函数
}*/
var $=function(select){
	return document.getElementsByTagName(select);