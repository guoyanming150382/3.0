		function move(obj,json,fnend){
			clearInterval(obj.timer);
			var odiv = document.getElementsByTagName('div');
			obj.timer=setInterval(function(){
				var bstop=true;//默认所有值都到了
				for(atrr in json){//让定时器循环的去改变属性
				var curr=parseFloat(getComputedStyle(obj,false)[atrr]);
				if(atrr=='opacity'){
				curr=Math.round(curr*100);
			}
				var speed=(json[atrr]-curr)/10;
				speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);
				if(json[atrr] !=curr){
					bstop=false;
					if(atrr=='opacity'){
						obj.style[atrr]=(curr+speed)/100;
					}else{
						obj.style[atrr]=curr+speed+"px";
					}
				}
				}
				if(bstop){
					clearInterval(obj.timer);
					if(fnend){
						fnend();
					}
				}
			},30);
			
		}