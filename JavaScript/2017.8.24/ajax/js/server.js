const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html;charset=UTF-8');

  if(req.url != "/favicon.ico"){
  	  console.log(req.url);
	  
	  if(req.url == "/"){
	  	pathUrl = "index.html";
	  }else{
	  	pathUrl = "../"+req.url; 
	  }

	  fs.readFile(pathUrl,function(err,data){
	  	if(err){
	  		res.statusCode = 404;
	  		res.end();
	  	}else{
	  		res.statusCode = 200;
	  		res.end(data);
	  	}
	  	
	  });  	
  }

  // res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});