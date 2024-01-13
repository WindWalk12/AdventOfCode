import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day4/input.txt'))
  })

let moreCards = {}

for await (const line of readInterface){
    let gameNumber = parseInt(line.split(':')[0].split(' ').filter(Number))
    let scratchCard = line.split(':')[1].split('|')
    let winningNumbers = scratchCard[0].trim().split(' ').filter(Number)
    let numbers = scratchCard[1].trim().split(' ').filter(Number)

    let cards = 0
    winningNumbers.forEach(winNum => {
        if (numbers.includes(winNum)) {
            cards++
        }
    })
    for (let i = 1; i <= cards; i++) {
        if (typeof moreCards[gameNumber + i] === "undefined") {
            moreCards[gameNumber + i] = 1
        } else {
            moreCards[gameNumber + i]++
        }
    }
    for (let i = 1; i <= cards; i++) {
        if (typeof moreCards[gameNumber] === "undefined") {
            moreCards[gameNumber + i] * 1
        } else {
            moreCards[gameNumber + i] += moreCards[gameNumber]
        }
    }
    if (typeof moreCards[gameNumber] === "undefined") {
        answer++
    } else {
        answer += 1 + moreCards[gameNumber]
    }
}

console.log(answer);