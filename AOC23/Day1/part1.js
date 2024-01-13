import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

let regex = /\d/g

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '/Day1/input.txt'))
});

for await (const line of readInterface){
    let matchArray = line.match(regex)
    let number = "" + matchArray[0] + matchArray[matchArray.length - 1]
    answer += parseInt(number)
}
 
console.log(answer);