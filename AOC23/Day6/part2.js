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

for await (const line of readInterface){
    if (line.match("Time:")) {
        times = [...line.split(':')[1].split(' ').filter(Number)]
    }
    if (line.match("Distance:")) {
        distances = [...line.split(':')[1].split(' ').filter(Number)]
    }
}

let waysToWin = (times, distances) => {
    let time = times.reduce((num1, num2) => {return num1 + num2})
    let distance = distances.reduce((num1, num2) => {return num1 + num2})
    let wins = 0
    let millimeters = 0
    for (let i = 0; i < time; i++) {
        millimeters = (time - i) * i
        if (millimeters > distance) {
            wins++
        }
    }
    answer = wins
}

waysToWin(times, distances)

console.log(answer);