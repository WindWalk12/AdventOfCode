import fs from "fs";
import readline from "readline";
import path from 'path';

const __dirname = path.resolve();

let answer = 0

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/Day5/input.txt'))
})

let seeds = []
let maps = []
let locations = []

let found = false
let key
for await (const line of readInterface){
    if (line.match("seeds:")) {
        seeds = [...line.split(':')[1].split(' ').filter(Number)]
    }
    if (line.trim() == "") {
        found = false
    }
    if (found) {
        let info = line.split(' ')
        maps[maps.length - 1][key].push({src: parseInt(info[0]), dest: parseInt(info[1]), range: parseInt(info[2])})
    }
    if (line.match("map:")) {
        key = line.split(' ')[0]
        let obj = {}
        obj[key] = []
        maps.push(obj)
        found = true
    }
}

let locationCalc = (seed, maps) => {
    let location = parseInt(seed)
    maps.forEach(elem => {
        let key = Object.keys(elem)
        elem[key].every(map => {
            if (location >= map.dest && location <= map.dest + map.range) {
                location = location + map.src - map.dest
                return false
            } else {
                return true
            }
        })
    });
    locations.push(parseInt(location))
}

seeds.forEach(seed => {
    locationCalc(seed, maps)
})

console.log(answer = locations.reduce((loc1, loc2) => loc1 < loc2 ? loc1 : loc2));