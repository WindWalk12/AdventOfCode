import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day6/input.txt'))
})

let times = []
let distances = []
let waysToWinArr = []

for await (const line of readInterface){
    if (line.match("Time:")) {
        times = [...line.split(':')[1].split(' ').filter(Number)]
    }
    if (line.match("Distance:")) {
        distances = [...line.split(':')[1].split(' ').filter(Number)]
    }
}


let waysToWin = (time, distance) => {
    let wins = 0
    let millimeters = 0
    for (let i = 0; i < time; i++) {
        millimeters = (time - i) * i
        if (millimeters > distance) {
            wins++
        }
    }
    waysToWinArr.push(wins)
}

for (let i = 0; i < times.length; i++) {
    waysToWin(times[i], distances[i])
}

console.log(answer = waysToWinArr.reduce((num1, num2) => {return num1*num2}));