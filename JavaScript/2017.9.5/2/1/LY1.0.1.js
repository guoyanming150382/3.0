
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
 	},

 	//html([content])
 	//如果有参数把lquer对象中的所有dom节点内容变成参数
 	//如果为空，返回lquer对象中的第一个dom节点
 	html:function(content){
 		if(content){
 			for(var i=0;i<this.date.length;i++){
 				this.date[i].innerHTML=content;
 			}
 		}else{
 				if(this.date.length !=0){
 					return this.date[0].innerHTML;
 			}
 		}
 	},

 	//val([value])  ([这里的函数可有可无])
 	//如果有参数把lquer对象中的所有dom节点得value变成参数值
	//如果为空，返回lquer对象中的第一个dom节点的value值
	val:function(value){//给input内添加内容
		if(value){
			for(var i=0;i<this.date.length;i++){
 				this.date[i].value=value;
 			}
 			return this;//加上return this 在这个函数执行完时候会返回一个LQ对象
		}else{
			if(this.date.length !=0){
 				return this.date[0].value;
			}
		}
	},

	//attr(name,[value]); 设置属性  name设置的属性名称是什么，value设置的属性值
	//如果两个参数都有，设置laquer对象中的所有domdom节点的属性
	//如果只有一个，返回的lquer对象中的第一个dom节点的属性值
	//实现连追原则：如果对返回值没有硬性要求，都可以返回当前对象，以便于连缀操作
	attr:function(name,value){
		if(name && value){
			for(var i=0;i<this.date.length;i++){
				this.date[i][name]=value;

			}
			return this; 
		}else{
			if(this.date.length !=0){
				return this.date[0][name];
			}
		}
	},

	//addClass(className)  修改样式
	//给lquer对象中的所有节点添加类,追加
	//$("#div1").addclassname("box1");

	addClass:function(className){
		for(var i=0;i<this.date.length;i++){
			this.date[i].className=this.date[i].className+" "+className;
		}
	},

	//removeClass(className)
	//把lquer对象中所有的DOM节点的某个类移除掉，

	removeClass:function(className){
		//1.拿到原先的所有类
		//2.找到参数对应的类，然后将其移除
		var reg=eval("/(^|\\s)"+className+"(\\s|$)/i");
		for(var i=0;i<this.date.length;i++){
			this.date[i].className=this.date[i].className.replace(reg," ").trim();//trim（）去除前后多余空格
		}
	},

	//css(name,[value]);
	//如果是两个参数，设置lquer对象中的所有dom节点样式
	//一个参数，获取lquer对象中的第一个dom节点样式
	//css({name1:value1,name2,value:2});
	//给Lquery对象中所有DOM节点设置一组样式
	css:function(){
		if(typeof arguments[0]=='string'){
			//设置一个样式
			if(arguments.length==2){
				for(var i=0;i<this.date.length;i++){
					this.date[i].style[arguments[0]]=arguments[1];
				}
				return this;
			}//获取样式
			else{
				if(this.date.length !=0){
					return this.date[0].style[arguments[0]];
				}
			}
		}
		//设置一组样式
		else{
			var obj=arguments[0];
			// console.log(obj);//显示传进来的对象
			for(var i=0;i<this.date.length;i++){
				for(key in obj){
					this.date[i].style[key]=obj[key];
				}
			}
			return this;
		}
	},

	//$(a).append(b)
	//parentNode.appendChild(chdildNode)
	//把b插入到a中
	append:function(obj){
		var srcEle=obj.date[0];//b
		var tagEle=this.date[0];//a
		tagEle.appendChild(srcEle);
	},
	//$(a).appendTo(b)
	//把a插入到b中
	appendTo:function(obj){
		var srcEle=this.date[0];//b
		var tagEle=obj.date[0];//a
		tagEle.appendChild(srcEle);
	},
	
	//$(a).before(b)
	//把a插入到b前面
	//parentNode.insertBefore(newEle,oldEle);
	before:function(){
		var newEle =this.date[0];
		var oldEle=obj.date[0];
		var parentEle = oldEle.parentNode;
		parentEle.insertBefore(newEle,oldEle);
	},
	// $(a).remove();
	//把a删除掉(删除节点)
	//parentNode.removeChild(childNode);
	remove:function(){
		var removeNode = this.date[0];
		var parentEle = removeNode.parentNode;
		parentEle.removeChild(removeNode);
	},

	//$(a).bind(eventName,function)
	//domObj.addEventListener('click',function(){},false);
	bind:function(et,fn){
		for(var i=0;i<this.date.length;i++){
			this.date[i].addEventListener(et,fn,false);
		}
	},
 }

 // console.log(LQuery.prototype);