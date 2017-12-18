
//对象互换  1.通过给工厂函数传递css的选择器。反悔的是lquer对象
//2.通过给工厂函数传递html标签。反悔的是lquer对象
//3.通过调用lquer对象给get方法，返回一个dom节点
var $=function(select){
	var fa=select[0];
	var lquer=new LQuery();
	var reghtml=/^<[^<>]+>/g;//标签内的内容格式
	var reghtmlname=/[a-z1-6]+/i;//标签名格式
	if(fa=="#"){
		var id=select.substring(1);
		var oEle= document.getElementById(id);
		lquer.date.push(oEle);
	}
	if(fa=="."){
		var className=select.substring(1);
		var reg=eval("/(^|\\s)"+className+"(\\s|$)/i");
		var oEle=document.getElementsByTagName("*");
		
		for(var i=0;i<oEle.length;i++){
			if(reg.test(oEle[i].className)){
				lquer.date.push(oEle[i]);
			}
		}
	}
	//将html标签转换成lquer对象的dom节点
	else if(reghtml.test(select)){
		// console.log(select);验证是否可行
		//方法  1.取得标签名称
		var oReghtml=select.match(reghtmlname)[0];
		//2.根据标签名称创建dm节点
		var oEle=document.createElement(oReghtml);
		//3.取得标签内容
		var iStart=select.indexOf('>')+1;
		var iEnd=select.lastIndexOf('<');
		var content=select.substring(iStart,iEnd);
		//4.把内容赋给新创建的dom节点
		oEle.innerHTML=content;
		//5.新创建的dom节点添加到lquery对象中
		lquer.date.push(oEle);
	}
	else {
		var oEle= document.getElementsByTagName(select);
		for(var i=0;i<oEle.length;i++){
			lquer.date.push(oEle[i]);
		}
	}
	return lquer;
}
//封装一个对象 这个对象保存所有选中的dom对象
//在这个对象上添加方法来操纵这些保存的dom对象

 function LQuery(){
 	this.date=[];
 }
 LQuery.prototype={
 	constructor:LQuery,//原本的他是空数组，没有constructor，因此要给他添加一个
 	size:function(){//添加一个size方法
 		return this.date.length;//返回长度
 	},
 	get:function(index){
 		if(this.date.length!=0){
 			return this.date[index];
 		}
 		
 	},

 	//筛选，模拟过滤器
 	//eq(index),返回对应索引的lquer对象
 	eq:function(index){
 		if(this.date.length!=0){
 			 var tmp=this.date[index];
 			 this.date.length=0;
 			 this.date.push(tmp);
 		}
 		return this;
 	}
 }

 // console.log(LQuery.prototype);