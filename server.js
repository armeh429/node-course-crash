const http = require('http');
const fs = require('fs');




const server = http.createServer((req,res)=>{
	console.log(req.url,req.method);
	// set header content-type
	res.setHeader('Content-Type', 'text/html');
	// res.write('<p>hello , ninjas</p>');
	// res.write('<p>that is really fun ! hahahha</p>');


	// send an html file
	fs.readFile('./views/index.html',(err, data)=>{

		if (err){
			console.log(err);
			res.end()
		}
		res.write(data);
		res.end();
	})
	res.end()

});

//127.o.o.1
server.listen(3000,'localhost',()=>{

	console.log('listening on http://localhost on port 3000');
});