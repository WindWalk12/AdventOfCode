import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

let maxAllowed = {
    'red': 12,
    'green': 13,
    'blue': 14
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '/Day2/input.txt'))
});

for await (const line of readInterface){
    let allowed = true;
    let gamenumber = line.split(':')[0].split(' ')[1]
    let games = line.split(':')[1].split(';')
    games.forEach(game => {
        let gameSplit = game.split(',')
        gameSplit.forEach(cubes => {
            let cube = cubes.trim().split(' ')
            if (cube[0] > maxAllowed[cube[1]] && allowed) {
                allowed = false;
            }
        })
    })
    if (allowed) {
        answer += parseInt(gamenumber)
    }
}
 
console.log(answer);