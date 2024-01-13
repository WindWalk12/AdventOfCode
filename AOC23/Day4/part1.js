import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day4/input.txt'))
  })


for await (const line of readInterface){
    let scratchCard = line.split(':')[1].split('|')
    let winningNumbers = scratchCard[0].trim().split(' ').filter(Number)
    let numbers = scratchCard[1].trim().split(' ').filter(Number)
    
    let first = false
    let points = 0
    winningNumbers.forEach(winNum => {
        if (numbers.includes(winNum)) {
            if (!first) {
                points++
                first = true
            } else {
                points *= 2
            }
        }
    })
    answer += points
}

console.log(answer);