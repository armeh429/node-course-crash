const fs = require('fs');

const readStream = fs.createReadStream('./Docs/stream.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./Docs/writeeStream.txt', { encoding: 'utf8'});

readStream.on('data',(chunk) => {

	console.log('------------new data------------------------')
	console.log(chunk.toString())
	writeStream.write(chunk)
});