import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day7/input.txt'))
})

let cardsRank = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

let strengths = {
    fiveoaf: 1,
    fouroak: 2,
    fh: 3,
    threeoaf: 4,
    tp: 5,
    op: 6,
    hc: 7
}

let hands = []

for await (const line of readInterface){
    let splittetLine = line.split(' ')
    hands.push({cards: splittetLine[0], value: splittetLine[1]})
}

let findStrength = (hand) => {
    let cardsMap = {}
    Array.from(hand.cards).forEach(card => {
        if (typeof cardsMap[card] === "undefined") {
            cardsMap[card] = 1
        } else {
            cardsMap[card]++
        }
    })
    let higestOccurence = 0
    Object.keys(cardsMap).forEach(key => {
        if (cardsMap[key] > higestOccurence) {
            higestOccurence = cardsMap[key]
        }
    })
    if (higestOccurence == 5) {
        hand.strengh = 'fiveoaf'
    } else if (higestOccurence == 4) {
        hand.strengh = 'fouroak'
    } else if (higestOccurence == 3) {
        let secondHighestOccurence = 0
        Object.keys(cardsMap).forEach(key => {
            if (cardsMap[key] == 2) {
                secondHighestOccurence = 2
            }
        })
        if (secondHighestOccurence == 2) {
            hand.strengh = 'fh'
        } else {
            hand.strengh = 'threeoaf'
        }
    } else if (higestOccurence == 2) {
        let numOfPairs = 0
        Object.keys(cardsMap).forEach(key => {
            if (cardsMap[key] == 2) {
                numOfPairs++
            }
        })
        if (numOfPairs == 2) {
            hand.strengh = 'tp'
        } else {
            hand.strengh = 'op'
        }
    } else {
        hand.strengh = 'hc'
    }
}

let handCompare = (hand1, hand2) => {
    findStrength(hand1)
    findStrength(hand2)
    let compare = strengths[hand1.strengh] > strengths[hand2.strengh] ? -1 : strengths[hand1.strengh] < strengths[hand2.strengh] ? 1 : 0
    if (compare != 0) {
        return compare
    } else {
        for (let i = 0; i < Array.from(hand1.cards).length; i++) {
            compare = cardsRank.indexOf(hand1.cards[i]) < cardsRank.indexOf(hand2.cards[i]) ? -1 : cardsRank.indexOf(hand1.cards[i]) > cardsRank.indexOf(hand2.cards[i]) ? 1 : 0
            if (compare != 0) {
                return compare
            }
        }
    }
}

let getAnswer = (hands) => {
    for (let i = 0; i < hands.length; i++) {
        answer += hands[i].value * (i + 1)
    }
}

getAnswer(hands.sort(handCompare))
console.log(answer);