

var $=function(select){
	var fa=select[0];
	var lquer=new LQuery();
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
 		
 	}
 }

 // console.log(LQuery.prototype);