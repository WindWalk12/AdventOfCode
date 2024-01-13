import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

let regex = /(?=(one|two|three|four|five|six|seven|eight|nine))|\d/g

let numbersConvert = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '/Day1/input.txt'))
})

for await (const line of readInterface){
    let matchArray = [...line.matchAll(regex)]
    if (matchArray[0][0] == '') {
        matchArray[0][0] = numbersConvert[matchArray[0][1]]
    }
    if (matchArray[matchArray.length - 1][0] == '') {
        matchArray[matchArray.length - 1][0] = numbersConvert[matchArray[matchArray.length - 1][1]]
    }
    let number = "" + matchArray[0][0] + matchArray[matchArray.length - 1][0]
    answer += parseInt(number)
}
 
console.log(answer)