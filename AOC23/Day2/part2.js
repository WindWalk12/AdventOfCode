import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '/Day2/input.txt'))
});

for await (const line of readInterface){
    let maxRed = 0, maxGreen = 0, maxBlue = 0;
    let games = line.split(':')[1].split(';')
    games.forEach(game => {
        let gameSplit = game.split(',')
        gameSplit.forEach(cubes => {
            let cube = cubes.trim().split(' ')
            maxRed = cube[0] > maxRed && cube[1] == 'red' ? parseInt(cube[0]) : maxRed
            maxGreen = cube[0] > maxGreen && cube[1] == 'green' ? parseInt(cube[0]) : maxGreen
            maxBlue = cube[0] > maxBlue && cube[1] == 'blue' ? parseInt(cube[0]) : maxBlue
        })
    })
    answer += maxRed * maxGreen * maxBlue
}
 
console.log(answer);