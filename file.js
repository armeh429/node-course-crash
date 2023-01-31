const fs = require('fs');
// read file 
fs.readFile('./Docs/docs.txt', (err , data) =>{
	if(err) {
		console.log(err);
	}

	console.log(data.toString()); 
})

//write file
fs.writeFile('./Docs/docs.txt',"hello world", () =>{

	console.log('hello this is writing')
})
// directory 
if (!fs.existsSync('./assets')) {
	fs.mkdir('./assets', (err) =>{
		if(err) {
			console.log(err);
		}
		console.log('folder is created')
	});

}

else {
	fs.rmdir('./assets', (err) =>{

	if (err) {
		console.log(err);
	}
	console.log('folder is deleted')
	})
}

//deleting

if (fs.existsSync('./Docs/deleteMe.txt')) {
	fs.unlink('./Docs/deleteMe.txt',(err) =>{

		if(err){
			console.log(err)
		}

		console.log('file is deleted')
	})


}
