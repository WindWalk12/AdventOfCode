import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

let numberRegex = /\d+/g
let symbolRegex = /[^.\d]/g

const readInterface2 = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day3/input.txt'))
  })

let numbersOfLines = 0
for await (const line of readInterface2) {
    numbersOfLines++
}

readInterface2.close()

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day3/input.txt'))
  })

let lastLine = null
let middleLine = null
let i = 0
for await (const line of readInterface){
    if (middleLine != null) {
        let lastLineIndexNumbers = []
        let lastLineIndexSymbols = []
        let middleLineIndexNumbers = []
        let middleLineIndexSymbols = []
        let lineIndexNumbers = []
        let lineIndexSymbols = []

        if (lastLine) {
            let lastLineNumbers = lastLine.match(numberRegex)
            if (lastLineNumbers) {
                lastLineNumbers.forEach(number => {
                    lastLineIndexNumbers.push({index: lastLine.indexOf(number), length: number.length, number: number})
                })
            }

            for (let i = 0; i < lastLine.length; i++) {
                if (symbolRegex.test(lastLine[i])) {
                    lastLineIndexSymbols.push(i)
                }
            }
        }
        
        let lineNumbers = line.match(numberRegex)
        if (lineNumbers) {
            lineNumbers.forEach(number => {
                let numPos = 0
                lineIndexNumbers.push({index: line.indexOf(number), length: number.length, number: number})
                numPos = middleLine.indexOf(number, numPos) + number.length
            })
        }

        for (let i = 0; i < line.length; i++) {
            if (symbolRegex.test(line[i])) {
                lineIndexSymbols.push(i)
            }
        }

        let middleLineNumbers = middleLine.match(numberRegex)
        if (middleLineNumbers) {
            let numPos = 0
            middleLineNumbers.forEach(number => {
                middleLineIndexNumbers.push({index: middleLine.indexOf(number, numPos), length: number.length, number: number})
                numPos = middleLine.indexOf(number, numPos) + number.length
            })
        }

        for (let i = 0; i < middleLine.length; i++) {
            if (symbolRegex.test(middleLine[i])) {
                middleLineIndexSymbols.push(i)
            }
        }

        let found
        middleLineIndexNumbers.forEach(number => {
            found = false
            if (lastLineIndexSymbols) {
                lastLineIndexSymbols.forEach(symbol => {
                    if ((symbol >= number.index - 1 && symbol <= number.index + number.length) && !found) {
                        found = true
                    }
                })
            }
            if (middleLineIndexSymbols && !found) {
                middleLineIndexSymbols.forEach(symbol => {
                    if ((symbol == number.index - 1 || symbol == number.index + number.length) && !found) {
                        found = true
                    }
                })
            }
            if (lineIndexSymbols && !found) {
                lineIndexSymbols.forEach(symbol => {
                    if ((symbol >= number.index - 1 && symbol <= number.index + number.length) && !found) {
                        found = true
                    }
                })
            }
            if (found) {
                answer += parseInt(number.number)
            }
        })
        if (i == numbersOfLines - 1) {
            lineIndexNumbers.forEach(number => {
                found = false
                if (middleLineIndexSymbols && !found) {
                    middleLineIndexSymbols.forEach(symbol => {
                        if ((symbol >= number.index - 1 && symbol <= number.index + number.length) && !found) {
                            found = true
                        }
                    })
                }
                if (middleLineIndexSymbols && !found) {
                    lineIndexSymbols.forEach(symbol => {
                        if ((symbol == number.index - 1 || symbol == number.index + number.length) && !found) {
                            found = true
                        }
                    })
                }
                if (found) {
                    answer += parseInt(number.number)
                }
            })
        }
    }
    lastLine = middleLine
    middleLine = line
    i++
}

console.log(answer);