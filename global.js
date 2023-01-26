//  golobal objects
// console.log(global)
global.setTimeout(() =>{

	console.log("in the timeout state");
	clearInterval(int);

},3000);

const int = global.setInterval(() => {
	console.log("in the interval state");
},1000);

console.log(__filename)
console.log(__dirname)