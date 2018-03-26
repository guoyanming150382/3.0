
		window.onload=function(){
			var odiv2=document.getElementById('div2');
			var odiv1=document.getElementById('div1');
			var odiv3=document.getElementById('div3');
			var oimg=document.getElementById('img').children;
			var ol1=document.getElementById('ul1').children;
			var now=0//当前元素,
			for(var i=0;i<ol1.length;i++){
				ol1[i].index=i;
				ol1[i].onclick=function(){
					now=this.index;
					tab();
				}
			}
			function tab(){
				for(var i=0;i<ol1.length;i++){
						ol1[i].className="";
						oimg[i].style.zIndex=1;
						oimg[i].style.opacity=0.3;
					}
					ol1[now].className="mo";
					oimg[now].style.zIndex=30;
					// oimg[this.index].style.opacity=1;
					move(oimg[now],{opacity:100});
			}

			//箭头
			odiv3.onclick=function(){
				now++;
				if(now==ol1.length){
					now=0;
				}
				tab();
			}
			odiv2.onclick=function(){
				now--;
				if(now<0){
					now=ol1.length-1;
				}
				tab();
			}

			//循环
			var timer=setInterval(function(){
				odiv3.onclick();
			},2000);
			odiv1.onmouseover=function(){
				clearInterval(timer);
			}
			odiv1.onmouseout=function(){
				timer=setInterval(function(){
				odiv3.onclick();
			},2000);
			}
		}