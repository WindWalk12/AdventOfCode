import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

let numberRegex = /\d+/g
let symbolRegex = /[^.\d]/g

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day3/input.txt'))
  })

let lastLine = null
let middleLine = null
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
                    lastLineIndexSymbols.push({index: i, symbol: lastLine[i]})
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
                lineIndexSymbols.push({index: i, symbol: line[i]})
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
                middleLineIndexSymbols.push({index: i, symbol: middleLine[i]})
            }
        }
        middleLineIndexSymbols.forEach(symbol => {
            if (symbol.symbol == '*') {
                let matching = []
                if (lastLineIndexNumbers) {
                    lastLineIndexNumbers.forEach(number => {
                        if (number.index + number.length >= symbol.index && number.index <= symbol.index + 1) {
                            if (!matching.includes(number) && matching.length < 2) {
                                matching.push(number)
                            }
                        }
                    })
                }
                if (middleLineIndexNumbers) {
                    middleLineIndexNumbers.forEach(number => {
                        if (number.index + number.length == symbol.index || number.index == symbol.index + 1) {
                            if (!matching.includes(number) && matching.length < 2) {
                                matching.push(number)
                            }
                        }
                    })
                }
                if (lineIndexNumbers) {
                    lineIndexNumbers.forEach(number => {
                        if (number.index + number.length >= symbol.index && number.index <= symbol.index + 1) {
                            if (!matching.includes(number) && matching.length < 2) {
                                matching.push(number)
                            }
                        }
                    })
                }
                if (matching.length == 2) {
                    console.log(matching);
                    answer += parseInt(matching[0].number) * parseInt(matching[1].number)
                }
            }
        })
    }
    lastLine = middleLine
    middleLine = line
}

console.log(answer);