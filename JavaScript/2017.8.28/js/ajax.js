function ajax(url,fnSucc,fnFaild){
	//用ajax去服务器端取数据
	// 1.创建一个ajax对象
	var oAjax = new XMLHttpRequest();
	console.log(oAjax);
	// 2.用ajax对象建立连接
	// oAjax.open(请求方法，请求地址，是否异步)
	oAjax.open('GET',url,true);
	// 3.用ajax对象发送请求
	oAjax.send();
	// 4.用ajax对象接收数据
	oAjax.onreadystatechange = function(){
		// console.log(oAjax.readyState);
		// 0 还没有初始化
		// 1 已经初始化，但是还没有调用open方法
		// 2 send方法已经调用
		// 3 返回了部分数据
		// 4 数据完全返回
		if(oAjax.readyState == 4){//请求完成，表明所有的数据已经返回，但并不代表成功
			if(oAjax.status == 200){//成功
				fnSucc(oAjax.responseText);
			}else{//失败
				if(fnFaild){
					fnFaild(oAjax.status);
				}	
			}
		}
	}
}