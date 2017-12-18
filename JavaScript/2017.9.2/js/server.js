const http = require('http');
const fs= require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');//plain文本
  // res.end('Hello World\n');
  if(req.url!="/favicon.ico"){
  	console.log(req.url);//会显示favicon.ico  浏览器标签上的图标
  	//  var pathUrl="";
  	// pathUrl="."+req.url;//当前目录下
  	if(req.url=="/"){//当访问根目录时候
  		pathUrl="index.html";
  	}else{
  		pathUrl="../"+req.url;
  	}
  	fs.readFile(pathUrl,function(err,date){
  		if(err){
  			 res.statusCode = 404;
  			 res.end(date);
  		}else{
  			res.statusCode = 200;
  			res.end(date);
  		}
  		
  	});
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});