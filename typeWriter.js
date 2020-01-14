// // typeWriter.js

const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
// 	setTimeout(() => {
// 		process.stdout.write(char+'\n');
// }, 500 ) 
// }


// sentence.forEach((char,i) => {
// 	setTimeout(() => {
// 		process.stdout.write(char)
// 	}, i * 50);
// });

for(let i = 0; i < sentence.length; i++) {
	setTimeout(() => {
		process.stdout.write(sentence[i])
	}, i * 50)
}
console.log('\n');






