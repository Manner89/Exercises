
let experienceTime = 2;
experienceTime *= 12;
experienceTime *= 160; 
let test = "hej";
let testTwo = "hej hej";
console.log(`You have been spakat the diggingmaskin for ${experienceTime} hours`);

const readline = require('readline');
/*const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question("how are you today? ", (_answer) => {
	console.log("Thank you for your valuable feedback:", _answer);
	rl.close();
});*/

const Md5 = require('@nogsantos/hash').Md5;
const md5 = new Md5();
console.log('md5: ', md5.encode('Lorem ipsum dolor sit, amet consectetur adipisicing elit.'));
console.log('md5: ', md5.encode('test'));

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json({
	limit: "50mb",
	type: "application/json"
}));
app.use(cors());
app.use('/', express.static(__dirname));

app.get('/test', function (req, res) {
  res.send("test");
});
console.log("hejhej");
// port 3000
app.listen(3000);