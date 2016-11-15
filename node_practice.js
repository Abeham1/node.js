var username = "no name";
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Input Username: ", function(newName){
	username = newName;
	console.log('You have searched for: ', username);
})


