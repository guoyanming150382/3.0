var $=function(select){
	var fa=select[0];
	var lquery=new LQuery();
	var regHtml=/^<[^<>]+>/g;
	var regHTMLname=/[a-z1-6]+/i;
	
	//id
	if(fa=="#"){
		var id=select.substring(1);
		var oEle=document.getElementById(id);
		lquery.date.push(oEle);
	}
//class
	if(fa=="."){
		var className=select.substring(1);
		var reg=eval("/(^|\\s)"+className+"(\\s|$)/i");
		var oEle=document.getElementsTagName("*");
		for(var i=0;i<oEle.length;i++){
			if(reg.test(oEle[i].className)){
				lquery.date.push(oEle[i]);
			}
		}
//将html转化成dom节点
		else if(regHtml.test(select)){
			var orghtml=select.match(regHTMLname)[0];
			var oEle=document.createElement(orghtml);
			var iStar=select.indexOf('>')+1;
			var iEnd=select.lastIndexOf('<');
			var content=select.substring(iStar,iEnd);
			oEle.innerHTML=content;
			lquery.date.push(oEle);
		}	
		else{
			var oEle=document.getElementsTagName(select);
			for(var i=0;i<oEle.length;i++){
				lquery.date.push(oEle[i]);
			}
		}
		return lquery;
	}


	//标签
}


function LQuery(){
	this.date=[];
}
LQuery.prototype={
	constructor:LQuery,
	size:function(){
		return this.date.length;
	},
	get:function(index){
		if(this.date.length!=0){
			return this.date[index];
		}
	},
	eq:function(index){
		if(this.date.length!=0){
			var tmp=this.date[index];
			this.date.length=0;
			this.date.push(tmp);
		}
		return this;
	}

}